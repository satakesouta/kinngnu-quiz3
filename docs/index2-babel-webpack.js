/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/index2.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sample.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// クイズ
 // 正答数による結果

var title = ["残念！勉強してもう一度！", "あなたはキングヌー見習いです！", "あなたはキングヌーエリートです！", "あなたはキングヌーマスターです！"]; // 再チャレンジボタン（最後に表示のため最初は非表示）
// document.getElementById("reChallenge").style.display ="none";
// 出題問題数

var questionNumber = 3; // 用意している問題数

var quizLength = Object(function webpackMissingModule() { var e = new Error("Cannot find module './sample.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var quizIndex = 0;
var problemNumber = 1;
var score = 0;
var explanation = ["キングヌークイズは全部で" + quizLength + "問あり、毎回ランダムで3問出題します!", "もう1度遊びたい人は下のボタンをクリック！"]; // const question = 'ゲーム市場、最も売れたゲーム機は次のうちどれ？';
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
  var min = 0;
  var max = quizLength - 1;
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

  document.getElementById("js-question").textContent = Object(function webpackMissingModule() { var e = new Error("Cannot find module './sample.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[question[quizIndex]].question;
  $correct.textContent = "現在" + score + "問正解";
  var buttonIndex = 0;

  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = Object(function webpackMissingModule() { var e = new Error("Cannot find module './sample.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[question[quizIndex]].answers[buttonIndex];
    buttonIndex++;
  }
};

setupQuiz(); // クリックイベント

var clickHandler = function clickHandler(e) {
  if (Object(function webpackMissingModule() { var e = new Error("Cannot find module './sample.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[question[quizIndex]].correct === e.target.textContent) {
    window.alert("正解！\n" + Object(function webpackMissingModule() { var e = new Error("Cannot find module './sample.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[question[quizIndex]].expla);
    score++;
  } else {
    window.alert("不正解！正解は「" + Object(function webpackMissingModule() { var e = new Error("Cannot find module './sample.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[question[quizIndex]].correct + "」です。\n" + Object(function webpackMissingModule() { var e = new Error("Cannot find module './sample.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[question[quizIndex]].expla);
  } // scrollTo(0, 0);


  window.scrollTo({
    top: 0,
    behavior: "auto"
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

    document.getElementsByClassName("explanation")[0].textContent = explanation[0];
    document.getElementsByClassName("explanation")[1].textContent = explanation[1]; // 再チャレンジボタン表示
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsLy4vc3JjL2luZGV4Mi5qcyJdLCJuYW1lcyI6WyJ0aXRsZSIsInF1ZXN0aW9uTnVtYmVyIiwicXVpekxlbmd0aCIsInF1aXoiLCJxdWl6SW5kZXgiLCJwcm9ibGVtTnVtYmVyIiwic2NvcmUiLCJleHBsYW5hdGlvbiIsIiRidXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiJHByb2JsZW1OdW1iZXIiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIiRjb3JyZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCIkdGl0bGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnV0dG9uTGVuZ3RoIiwibGVuZ3RoIiwicmFuZG9tIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInF1ZXN0aW9uIiwicmFuZG9tMiIsInJhbmRvbU51bWJlciIsInJlc3VsdCIsImluZGV4T2YiLCJwdXNoIiwicHJvYmxlbWluZGV4Iiwic2V0dXBRdWl6IiwidGV4dENvbnRlbnQiLCJidXR0b25JbmRleCIsImFuc3dlcnMiLCJjbGlja0hhbmRsZXIiLCJlIiwiY29ycmVjdCIsInRhcmdldCIsIndpbmRvdyIsImFsZXJ0IiwiZXhwbGEiLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiaHJlZiIsInJlbW92ZSIsInN0eWxlIiwiY29sb3IiLCJoYW5kbGVySW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7QUNOQTtDQUVBOztBQUNBLElBQU1BLEtB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LWJhYmVsLXdlYnBhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8g44Kv44Kk44K6XG5pbXBvcnQgeyBxdWl6IH0gZnJvbSBcIi4vc2FtcGxlLmpzXCI7XG4vLyDmraPnrZTmlbDjgavjgojjgovntZDmnpxcbmNvbnN0IHRpdGxlID0gW1xuXHRcIuaui+W/te+8geWLieW8t+OBl+OBpuOCguOBhuS4gOW6pu+8gVwiLFxuXHRcIuOBguOBquOBn+OBr+OCreODs+OCsOODjOODvOimi+e/kuOBhOOBp+OBme+8gVwiLFxuXHRcIuOBguOBquOBn+OBr+OCreODs+OCsOODjOODvOOCqOODquODvOODiOOBp+OBme+8gVwiLFxuXHRcIuOBguOBquOBn+OBr+OCreODs+OCsOODjOODvOODnuOCueOCv+ODvOOBp+OBme+8gVwiLFxuXTtcblxuLy8g5YaN44OB44Oj44Os44Oz44K444Oc44K/44Oz77yI5pyA5b6M44Gr6KGo56S644Gu44Gf44KB5pyA5Yid44Gv6Z2e6KGo56S677yJXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlQ2hhbGxlbmdlXCIpLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuXG4vLyDlh7rpoYzllY/poYzmlbBcbmNvbnN0IHF1ZXN0aW9uTnVtYmVyID0gMztcbi8vIOeUqOaEj+OBl+OBpuOBhOOCi+WVj+mhjOaVsFxuY29uc3QgcXVpekxlbmd0aCA9IHF1aXoubGVuZ3RoO1xubGV0IHF1aXpJbmRleCA9IDA7XG5sZXQgcHJvYmxlbU51bWJlciA9IDE7XG5sZXQgc2NvcmUgPSAwO1xuY29uc3QgZXhwbGFuYXRpb24gPSBbXG5cdFwi44Kt44Oz44Kw44OM44O844Kv44Kk44K644Gv5YWo6YOo44GnXCIgK1xuXHRcdHF1aXpMZW5ndGggK1xuXHRcdFwi5ZWP44GC44KK44CB5q+O5Zue44Op44Oz44OA44Og44GnM+WVj+WHuumhjOOBl+OBvuOBmSFcIixcblx0XCLjgoLjgYYx5bqm6YGK44Gz44Gf44GE5Lq644Gv5LiL44Gu44Oc44K/44Oz44KS44Kv44Oq44OD44Kv77yBXCIsXG5dO1xuXG4vLyBjb25zdCBxdWVzdGlvbiA9ICfjgrLjg7zjg6DluILloLTjgIHmnIDjgoLlo7LjgozjgZ/jgrLjg7zjg6DmqZ/jga/mrKHjga7jgYbjgaHjganjgozvvJ8nO1xuLy8gY29uc3QgYW5zd2VycyA9IFtcbi8vICAgICAn44K544O844OR44O844OV44Kh44Of44Kz44OzJyxcbi8vICAgICAn44OX44Os44Kk44K544Os44O844K344On44OzMicsXG4vLyAgICAgJ+ODi+ODs+ODhuODs+ODieODvOOCueOCpOODg+ODgScsXG4vLyAgICAgJ+ODi+ODs+ODhuODs+ODieODvERTJ1xuLy8gICAgIF07XG4vLyAgICAgY29uc3QgY29ycmVjdCA9ICfjg4vjg7Pjg4bjg7Pjg4njg7xEUyc7XG5cbi8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1xdWVzdGlvbicpLnRleHRDb250ZW50KTtcblxuLy8gJOOBp0hUTUzjga7jgqrjg5bjgrjjgqfjgq/jg4jjgafjgYLjgovjgajjgo/jgYvjgorjgoTjgZnjgY/jgZnjgovjga7jgYzmsbrjgb7jgopcbmNvbnN0ICRidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImpzLWJ0blwiKTtcbmNvbnN0ICRwcm9ibGVtTnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkZXJcIik7XG5jb25zdCAkY29ycmVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtY29ycmVjdEFuc3dlcnNcIik7XG5jb25zdCAkdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGl0bGVcIilbMF07XG5sZXQgYnV0dG9uTGVuZ3RoID0gJGJ1dHRvbi5sZW5ndGg7XG5cbi8vIOaVtOaVsOOBruODqeODs+ODgOODoOeUn+aIkFxuZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XG5cdG1pbiA9IE1hdGguY2VpbChtaW4pO1xuXHRtYXggPSBNYXRoLmZsb29yKG1heCk7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pOyAvL1RoZSBtYXhpbXVtIGlzIGluY2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG59XG4vLyDjgq/jgqTjgrrllY/poYzjgpLjg6njg7Pjg4Djg6Djgafpgbjmip5cbmxldCBxdWVzdGlvbiA9IFtdO1xuY29uc3QgcmFuZG9tMiA9ICgpID0+IHtcblx0Y29uc3QgbWluID0gMDtcblx0Y29uc3QgbWF4ID0gcXVpekxlbmd0aCAtIDE7XG5cblx0bGV0IHJhbmRvbU51bWJlciA9IHJhbmRvbShtaW4sIG1heCk7XG5cdGxldCByZXN1bHQgPSBxdWVzdGlvbi5pbmRleE9mKHJhbmRvbU51bWJlcik7XG5cdGlmIChyZXN1bHQgPT0gLTEpIHtcblx0XHRxdWVzdGlvbi5wdXNoKHJhbmRvbU51bWJlcik7XG5cdH0gZWxzZSB7XG5cdFx0cmFuZG9tMigpO1xuXHR9XG59O1xubGV0IHByb2JsZW1pbmRleCA9IDA7XG53aGlsZSAocHJvYmxlbWluZGV4IDwgcXVlc3Rpb25OdW1iZXIpIHtcblx0cmFuZG9tMigpO1xuXHRwcm9ibGVtaW5kZXgrKztcbn1cbi8vIGNvbnNvbGUubG9nKHF1ZXN0aW9uKTtcblxuLy8g44Kv44Kk44K644Gu5ZWP6aGM44CB6YG45oqe6IKi44KS5a6a576pXG5jb25zdCBzZXR1cFF1aXogPSAoKSA9PiB7XG5cdC8vIOOCv+ODluOBruODhuOCreOCueODiOaMh+WumlxuXHQkcHJvYmxlbU51bWJlclswXS50ZXh0Q29udGVudCA9IFwi56ysXCIgKyBwcm9ibGVtTnVtYmVyICsgXCLllY9cIjtcblx0ZG9jdW1lbnQudGl0bGUgPSBcIuOCreODs+OCsOODjOODvOOCr+OCpOOCuu+8muesrFwiICsgcHJvYmxlbU51bWJlciArIFwi5ZWPXCI7XG5cdC8vIGNvbnNvbGUubG9nKCRwcm9ibGVtTnVtYmVyLnRleHRDb250ZW50KTtcblx0Ly8gY29uc29sZS5sb2coJHByb2JsZW1OdW1iZXIpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXF1ZXN0aW9uXCIpLnRleHRDb250ZW50ID1cblx0XHRxdWl6W3F1ZXN0aW9uW3F1aXpJbmRleF1dLnF1ZXN0aW9uO1xuXHQkY29ycmVjdC50ZXh0Q29udGVudCA9IFwi54++5ZyoXCIgKyBzY29yZSArIFwi5ZWP5q2j6KejXCI7XG5cdGxldCBidXR0b25JbmRleCA9IDA7XG5cdHdoaWxlIChidXR0b25JbmRleCA8IGJ1dHRvbkxlbmd0aCkge1xuXHRcdCRidXR0b25bYnV0dG9uSW5kZXhdLnRleHRDb250ZW50ID1cblx0XHRcdHF1aXpbcXVlc3Rpb25bcXVpekluZGV4XV0uYW5zd2Vyc1tidXR0b25JbmRleF07XG5cdFx0YnV0dG9uSW5kZXgrKztcblx0fVxufTtcblxuc2V0dXBRdWl6KCk7XG5cbi8vIOOCr+ODquODg+OCr+OCpOODmeODs+ODiFxuY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcblx0aWYgKHF1aXpbcXVlc3Rpb25bcXVpekluZGV4XV0uY29ycmVjdCA9PT0gZS50YXJnZXQudGV4dENvbnRlbnQpIHtcblx0XHR3aW5kb3cuYWxlcnQoXCLmraPop6PvvIFcXG5cIiArIHF1aXpbcXVlc3Rpb25bcXVpekluZGV4XV0uZXhwbGEpO1xuXHRcdHNjb3JlKys7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmFsZXJ0KFxuXHRcdFx0XCLkuI3mraPop6PvvIHmraPop6Pjga/jgIxcIiArXG5cdFx0XHRcdHF1aXpbcXVlc3Rpb25bcXVpekluZGV4XV0uY29ycmVjdCArXG5cdFx0XHRcdFwi44CN44Gn44GZ44CCXFxuXCIgK1xuXHRcdFx0XHRxdWl6W3F1ZXN0aW9uW3F1aXpJbmRleF1dLmV4cGxhXG5cdFx0KTtcblx0fVxuXHQvLyBzY3JvbGxUbygwLCAwKTtcblx0d2luZG93LnNjcm9sbFRvKHtcblx0XHR0b3A6IDAsXG5cdFx0YmVoYXZpb3I6IFwiYXV0b1wiLFxuXHR9KTtcblx0cXVpekluZGV4Kys7XG5cdHByb2JsZW1OdW1iZXIrKztcblxuXHRpZiAocXVpekluZGV4IDwgcXVlc3Rpb25OdW1iZXIpIHtcblx0XHRzZXR1cFF1aXooKTtcblx0XHQvLyBjb25zb2xlLmxvZyhxdWVzdGlvbk51bWJlcjIpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIOe1kOaenOeZuuihqFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlua1wiKS5ocmVmID0gXCJpbmRleDMuY3NzXCI7XG5cdFx0JHByb2JsZW1OdW1iZXJbMF0udGV4dENvbnRlbnQgPSBcIue1kOaenOeZuuihqFwiO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianMtcXVlc3Rpb25cIikucmVtb3ZlKCk7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqcy1pdGVtc1wiKS5yZW1vdmUoKTtcblx0XHQkY29ycmVjdC50ZXh0Q29udGVudCA9IHF1ZXN0aW9uTnVtYmVyICsgXCLllY/kuK1cIiArIHNjb3JlICsgXCLllY/mraPop6PvvIFcIjtcblx0XHQkdGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVtzY29yZV07XG5cdFx0aWYgKHNjb3JlID09IDEpIHtcblx0XHRcdCR0aXRsZS5zdHlsZS5jb2xvciA9IFwiI0M0NzAyMlwiO1xuXHRcdH0gZWxzZSBpZiAoc2NvcmUgPT0gMikge1xuXHRcdFx0JHRpdGxlLnN0eWxlLmNvbG9yID0gXCJzaWx2ZXJcIjtcblx0XHR9IGVsc2UgaWYgKHNjb3JlID09IDMpIHtcblx0XHRcdCR0aXRsZS5zdHlsZS5jb2xvciA9IFwiZ29sZFwiO1xuXHRcdH1cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXhwbGFuYXRpb25cIilbMF0udGV4dENvbnRlbnQgPVxuXHRcdFx0ZXhwbGFuYXRpb25bMF07XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImV4cGxhbmF0aW9uXCIpWzFdLnRleHRDb250ZW50ID1cblx0XHRcdGV4cGxhbmF0aW9uWzFdO1xuXHRcdC8vIOWGjeODgeODo+ODrOODs+OCuOODnOOCv+ODs+ihqOekulxuXHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVDaGFsbGVuZ2VcIikuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiXG5cdH1cbn07XG5cbmxldCBoYW5kbGVySW5kZXggPSAwO1xud2hpbGUgKGhhbmRsZXJJbmRleCA8IGJ1dHRvbkxlbmd0aCkge1xuXHQkYnV0dG9uW2hhbmRsZXJJbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdFx0Y2xpY2tIYW5kbGVyKGUpO1xuXHR9KTtcblx0aGFuZGxlckluZGV4Kys7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9