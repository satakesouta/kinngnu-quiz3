"use strict";

var _sample = require("./sample-after.js");

// クイズ
// 正答数による結果
var title = [
	"残念！勉強してもう一度！",
	"あなたはキングヌー見習いです！",
	"あなたはキングヌーエリートです！",
	"あなたはキングヌーマスターです！",
]; // 再チャレンジボタン（最後に表示のため最初は非表示）
// document.getElementById("reChallenge").style.display ="none";
// 出題問題数

var questionNumber = 3; // 用意している問題数

var quizLength = _sample.quiz.length;
var quizIndex = 0;
var problemNumber = 1;
var score = 0;
var explanation = [
	"キングヌークイズは全部で" +
		quizLength +
		"問あり、毎回ランダムで3問出題します!",
	"もう1度遊びたい人は下のボタンをクリック！",
]; // const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
// const answers = [
//     'スーパーファミコン',
//     'プレイスレーション2',
//     'ニンテンドースイッチ',
//     'ニンテンドーDS'
//     ];
//     const correct = 'ニンテンドーDS';
// console.log(document.getElementById('js-question').textContent);
// $でHTMLのオブジェクトであるとわかりやすくするのが決まり

var $button = document.getElementsByName("js-btn");
var $problemNumber = document.getElementsByTagName("header");
var $correct = document.getElementById("js-correctAnswers");
var $title = document.getElementsByClassName("title")[0];
var buttonLength = $button.length; // 整数のランダム生成

function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
} // クイズ問題をランダムで選択

var question = [];

var random2 = function random2() {
	min = 0;
	max = quizLength - 1;
	var randomNumber = random(min, max);
	var result = question.indexOf(randomNumber);

	if (result == -1) {
		question.push(randomNumber);
	} else {
		random2();
	}
};

var problemindex = 0;

while (problemindex < questionNumber) {
	random2();
	problemindex++;
} // console.log(question);
// クイズの問題、選択肢を定義

var setupQuiz = function setupQuiz() {
	// タブのテキスト指定
	$problemNumber[0].textContent = "第" + problemNumber + "問";
	document.title = "キングヌークイズ：第" + problemNumber + "問"; // console.log($problemNumber.textContent);
	// console.log($problemNumber);

	document.getElementById("js-question").textContent =
		_sample.quiz[question[quizIndex]].question;
	$correct.textContent = "現在" + score + "問正解";
	var buttonIndex = 0;

	while (buttonIndex < buttonLength) {
		$button[buttonIndex].textContent =
			_sample.quiz[question[quizIndex]].answers[buttonIndex];
		buttonIndex++;
	}
};

setupQuiz(); // クリックイベント

var clickHandler = function clickHandler(e) {
	if (_sample.quiz[question[quizIndex]].correct === e.target.textContent) {
		window.alert("正解！\n" + _sample.quiz[question[quizIndex]].expla);
		score++;
	} else {
		window.alert(
			"不正解！正解は「" +
				_sample.quiz[question[quizIndex]].correct +
				"」です。\n" +
				_sample.quiz[question[quizIndex]].expla
		);
	} // scrollTo(0, 0);

	window.scrollTo({
		top: 0,
		behavior: "auto",
	});
	quizIndex++;
	problemNumber++;

	if (quizIndex < questionNumber) {
		setupQuiz(); // console.log(questionNumber2);
	} else {
		// 結果発表
		document.getElementById("link").href = "index3.css";
		$problemNumber[0].textContent = "結果発表";
		document.getElementById("js-question").remove();
		document.getElementById("js-items").remove();
		$correct.textContent = questionNumber + "問中" + score + "問正解！";
		$title.textContent = title[score];

		if (score == 1) {
			$title.style.color = "#C47022";
		} else if (score == 2) {
			$title.style.color = "silver";
		} else if (score == 3) {
			$title.style.color = "gold";
		}

		document.getElementsByClassName("explanation")[0].textContent =
			explanation[0];
		document.getElementsByClassName("explanation")[1].textContent =
			explanation[1]; // 再チャレンジボタン表示
		// document.getElementById("reChallenge").style.display ="block"
	}
};

var handlerIndex = 0;

while (handlerIndex < buttonLength) {
	$button[handlerIndex].addEventListener("click", function (e) {
		clickHandler(e);
	});
	handlerIndex++;
}
