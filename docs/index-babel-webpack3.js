/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
  !*** ./src/index1.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quiz": () => (/* binding */ quiz),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
// クイズ
var quiz = [{
  question: "キングヌーの曲「McDonald Romance」のMVロケ地はどこ？",
  answers: ["日本", "アメリカ", "ドイツ", "イギリス"],
  correct: "アメリカ",
  expla: "McDonald RomanceのMVはアメリカのイベントSXSW（サウス・バイ・サウスウエスト）に参加し、ツアーを行ったときに撮影されました。とてもエモい曲です！"
}, {
  question: "映画「太陽は動かない」の主題歌に抜擢されたキングヌーの曲は何？",
  answers: ["三文小説", "白日", "あなたは蜃気楼", "泡"],
  correct: "泡",
  expla: "「泡」のMVはYou Tubeで視聴することができ、俳優の森山未來が出演しています。曲と森山さんのパフォーマンスがマッチしていて素晴らしいMVです！"
}, {
  question: "キングヌーは自らの音楽をなんと呼んでいる？",
  answers: ["トーキョー・ニュー・ミクスチャー・スタイル", "ジャパン・ニュー・ミクスチャー・スタイル", "トーキョー・ニュー・ロック・スタイル", "トーキョー・ニュー・ミクスチャー・ロック"],
  correct: "トーキョー・ニュー・ミクスチャー・スタイル",
  expla: "メンバーそれぞれが多方面の音楽から影響を受けそこから新たな音楽を作り上げたことから、自分達の音楽を「トーキョー・ニュー・ミクスチャー・スタイル」と称しています。"
}, {
  question: "メンバーの中で1人だけ年齢が違うのは誰？",
  answers: ["常田大希", "勢喜遊", "新井和輝", "井口理"],
  correct: "井口理",
  expla: "ボーカルの井口理だけ年齢が１つ下ですが、年齢の壁は感じられないほど仲がいいです。"
}, {
  question: "キングヌーの改名前の名前は？",
  answers: ["おせちピッチャー", "Srv.Vinci", "タイムワープス", "初任給パーティー"],
  correct: "Srv.Vinci",
  expla: "他の選択肢はSrv.Vinciから改名する際に、実際に改名案として上がったものです（おせちピッチャーと初任給パーティーはネタらしいですw）。"
}, {
  question: "メンバーの中で「井口理のオールナイトニッポン0」に一番多くゲスト出演したのは誰？",
  answers: ["常田大希", "勢喜遊", "新井和輝", "皆同じ回数出演"],
  correct: "新井和輝",
  expla: "ラジオにはメンバー全員参加したことがあります。四人全員でラジオに参加した回もありました。"
}, {
  question: "常田大希が率いる「millennium parade」に一度も参加していないキングヌーのメンバーは？",
  answers: ["井口理", "勢喜遊", "新井和輝", "全員参加"],
  correct: "全員参加",
  expla: "ドラムの勢喜遊とベースの新井和輝は高頻度で参加しています。井口は常田にミレパに誘われた際、自分が参加するとKing Gnuと変わらないと考え自ら断ったそうです。しかしミレパの曲「FAMILIA」でボーカルを務め話題になりました。"
}, {
  question: "メンバーの中で同じ大学出身の2人は誰？",
  answers: ["井口と常田", "勢喜と常田", "新井と井口", "勢喜と新井"],
  correct: "井口と常田",
  expla: "井口理と常田大希は共に東京藝術大学出身で、井口理は声楽科、常田大希は器楽科チェロ専攻でした。"
}, {
  question: "キングヌーの2ndアルバムはどれ？",
  answers: ["Tokyo Rendez-Vous", "CEREMONY", "Sympa", "三文小説/千両役者"],
  correct: "Sympa",
  expla: "Tokyo Rendez-Vousは1stアルバム、CEREMONYは3rdアルバムです。ちなみにSympaでおすすめの曲はPlayer Xです！"
}, {
  question: "キングヌーのミュージックビデオを制作しているチームはどれ？",
  answers: ["millennium parade", "Daiki Tuneta", "PERIMETRON", "ermhoi"],
  correct: "PERIMETRON",
  expla: "PERIMETRONは常田大希が主宰するクリエイティブレーベルです。常田さんはキングヌーのMVの映像制作にも関わっているそうです。"
}, {
  question: "井口理は歌舞伎町でぼったくられたことがあるが、その額は？",
  answers: ["10万円", "12万円", "16万円", "20万円"],
  correct: "10万円",
  expla: "大人のお店でぼったくられたそうですw当初は16万円請求されたそうですが、交渉により10万円に下げられたそうです。"
}, {
  question: "キングヌーの曲「ロウラブ」のMVは誰の家で撮影された？",
  answers: ["常田大希", "勢喜遊", "新井和輝", "井口理"],
  correct: "常田大希",
  expla: "正確には常田大希の祖母の家です。一時期祖母の家で2人暮らしをしていたそうです。"
}, {
  question: "2018年に米津玄師が「この曲邦楽で今年一番好き。」とツイートしたキングヌーの曲は？",
  answers: ["白日", "Flash!!", "The hole", "Player X"],
  correct: "Player X",
  expla: "Player Xは中毒性のあるとてもいい曲です。MVがYou Tubeで公開されているのでぜひ見てください！"
}, {
  question: "メンバーの中で一時期、有名人にTwitterでクソリプしてたのは誰？",
  answers: ["常田大希", "勢喜遊", "新井和輝", "井口理"],
  correct: "井口理",
  expla: "井口は一度も会ったことがない有名人に、「聴いてくれ！」とKing Gnuの音源のリンクを送り付ける行為を頻繁にしていました。ちなみにアジカンのゴッチ（後藤正文）にクソリプを送った際はブロックされたそうですw"
}, {
  question: "キングヌーは2019年にMステ初出演を果たしたが、曲「Slumberland」を披露している際の井口が話題となった。なぜ？",
  answers: ["進撃の巨人の「奇行種」のように階段を降りたから", "歌ってる時の顔がヤバかったから", "衣装を急に破り出したから", "掛けていた眼鏡をわざと破壊したから"],
  correct: "歌ってる時の顔がヤバかったから",
  expla: "爪痕を残すためにやったそうですw何かに取り憑かれたような表情をしてますw「キングヌー 井口 mステ」でググるとその写真が出てきますw"
}]; // 正答数による結果

var title = ["残念！勉強してもう一度！", "あなたはキングヌー見習いです！", "あなたはキングヌーエリートです！", "あなたはキングヌーマスターです！"];

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYmFiZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJhYmVsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1iYWJlbC8uL3NyYy9pbmRleDEuanMiXSwibmFtZXMiOlsicXVpeiIsInF1ZXN0aW9uIiwiYW5zd2VycyIsImNvcnJlY3QiLCJleHBsYSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWjtBQUNDQyxVQUFRLEVBQUUscUNBRFg7QUFFQ0MsU0FBTyxFQUFFLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxLQUFmLEVBQXNCLE1BQXRCLENBRlY7QUFHQ0MsU0FBTyxFQUFFLE1BSFY7QUFJQ0MsT0FBSyxFQUNKO0FBTEYsQ0FEWSxFQVFaO0FBQ0NILFVBQVEsRUFBRSxpQ0FEWDtBQUVDQyxTQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLFNBQWYsRUFBMEIsR0FBMUIsQ0FGVjtBQUdDQyxTQUFPLEVBQUUsR0FIVjtBQUlDQyxPQUFLLEVBQ0o7QUFMRixDQVJZLEVBZVo7QUFDQ0gsVUFBUSxFQUFFLHVCQURYO0FBRUNDLFNBQU8sRUFBRSxDQUNSLHVC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LElBQU1DLEtBQUssR0FBRyxDQUNiLGNBRGEsRUFFYixpQkFGYSxFQUdiLGtCQUhhLEVBSWIsa0JBSmEsQ0FBZCIsImZpbGUiOiJpbmRleC1iYWJlbC13ZWJwYWNrMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8g44Kv44Kk44K6XG5jb25zdCBxdWl6ID0gW1xuXHR7XG5cdFx0cXVlc3Rpb246IFwi44Kt44Oz44Kw44OM44O844Gu5puy44CMTWNEb25hbGQgUm9tYW5jZeOAjeOBrk1W44Ot44Kx5Zyw44Gv44Gp44GT77yfXCIsXG5cdFx0YW5zd2VyczogW1wi5pel5pysXCIsIFwi44Ki44Oh44Oq44KrXCIsIFwi44OJ44Kk44OEXCIsIFwi44Kk44Ku44Oq44K5XCJdLFxuXHRcdGNvcnJlY3Q6IFwi44Ki44Oh44Oq44KrXCIsXG5cdFx0ZXhwbGE6XG5cdFx0XHRcIk1jRG9uYWxkIFJvbWFuY2Xjga5NVuOBr+OCouODoeODquOCq+OBruOCpOODmeODs+ODiFNYU1fvvIjjgrXjgqbjgrnjg7vjg5DjgqTjg7vjgrXjgqbjgrnjgqbjgqjjgrnjg4jvvInjgavlj4LliqDjgZfjgIHjg4TjgqLjg7zjgpLooYzjgaPjgZ/jgajjgY3jgavmkq7lvbHjgZXjgozjgb7jgZfjgZ/jgILjgajjgabjgoLjgqjjg6LjgYTmm7LjgafjgZnvvIFcIixcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiBcIuaYoOeUu+OAjOWkqumZveOBr+WLleOBi+OBquOBhOOAjeOBruS4u+mhjOatjOOBq+aKnOaTouOBleOCjOOBn+OCreODs+OCsOODjOODvOOBruabsuOBr+S9le+8n1wiLFxuXHRcdGFuc3dlcnM6IFtcIuS4ieaWh+Wwj+iqrFwiLCBcIueZveaXpVwiLCBcIuOBguOBquOBn+OBr+icg+awl+alvFwiLCBcIuazoVwiXSxcblx0XHRjb3JyZWN0OiBcIuazoVwiLFxuXHRcdGV4cGxhOlxuXHRcdFx0XCLjgIzms6HjgI3jga5NVuOBr1lvdSBUdWJl44Gn6KaW6IG044GZ44KL44GT44Go44GM44Gn44GN44CB5L+z5YSq44Gu5qOu5bGx5pyq5L6G44GM5Ye65ryU44GX44Gm44GE44G+44GZ44CC5puy44Go5qOu5bGx44GV44KT44Gu44OR44OV44Kp44O844Oe44Oz44K544GM44Oe44OD44OB44GX44Gm44GE44Gm57Sg5pm044KJ44GX44GETVbjgafjgZnvvIFcIixcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiBcIuOCreODs+OCsOODjOODvOOBr+iHquOCieOBrumfs+alveOCkuOBquOCk+OBqOWRvOOCk+OBp+OBhOOCi++8n1wiLFxuXHRcdGFuc3dlcnM6IFtcblx0XHRcdFwi44OI44O844Kt44On44O844O744OL44Ol44O844O744Of44Kv44K544OB44Oj44O844O744K544K/44Kk44OrXCIsXG5cdFx0XHRcIuOCuOODo+ODkeODs+ODu+ODi+ODpeODvOODu+ODn+OCr+OCueODgeODo+ODvOODu+OCueOCv+OCpOODq1wiLFxuXHRcdFx0XCLjg4jjg7zjgq3jg6fjg7zjg7vjg4vjg6Xjg7zjg7vjg63jg4Pjgq/jg7vjgrnjgr/jgqTjg6tcIixcblx0XHRcdFwi44OI44O844Kt44On44O844O744OL44Ol44O844O744Of44Kv44K544OB44Oj44O844O744Ot44OD44KvXCIsXG5cdFx0XSxcblx0XHRjb3JyZWN0OiBcIuODiOODvOOCreODp+ODvOODu+ODi+ODpeODvOODu+ODn+OCr+OCueODgeODo+ODvOODu+OCueOCv+OCpOODq1wiLFxuXHRcdGV4cGxhOlxuXHRcdFx0XCLjg6Hjg7Pjg5Djg7zjgZ3jgozjgZ7jgozjgYzlpJrmlrnpnaLjga7pn7Pmpb3jgYvjgonlvbHpn7/jgpLlj5fjgZHjgZ3jgZPjgYvjgonmlrDjgZ/jgarpn7Pmpb3jgpLkvZzjgorkuIrjgZLjgZ/jgZPjgajjgYvjgonjgIHoh6rliIbpgZTjga7pn7Pmpb3jgpLjgIzjg4jjg7zjgq3jg6fjg7zjg7vjg4vjg6Xjg7zjg7vjg5/jgq/jgrnjg4Hjg6Pjg7zjg7vjgrnjgr/jgqTjg6vjgI3jgajnp7DjgZfjgabjgYTjgb7jgZnjgIJcIixcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiBcIuODoeODs+ODkOODvOOBruS4reOBpzHkurrjgaDjgZHlubTpvaLjgYzpgZXjgYbjga7jga/oqrDvvJ9cIixcblx0XHRhbnN3ZXJzOiBbXCLluLjnlLDlpKfluIxcIiwgXCLli6LllpzpgYpcIiwgXCLmlrDkupXlkozovJ1cIiwgXCLkupXlj6PnkIZcIl0sXG5cdFx0Y29ycmVjdDogXCLkupXlj6PnkIZcIixcblx0XHRleHBsYTpcblx0XHRcdFwi44Oc44O844Kr44Or44Gu5LqV5Y+j55CG44Gg44GR5bm06b2i44GM77yR44Gk5LiL44Gn44GZ44GM44CB5bm06b2i44Gu5aOB44Gv5oSf44GY44KJ44KM44Gq44GE44G744Gp5Luy44GM44GE44GE44Gn44GZ44CCXCIsXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogXCLjgq3jg7PjgrDjg4zjg7zjga7mlLnlkI3liY3jga7lkI3liY3jga/vvJ9cIixcblx0XHRhbnN3ZXJzOiBbXG5cdFx0XHRcIuOBiuOBm+OBoeODlOODg+ODgeODo+ODvFwiLFxuXHRcdFx0XCJTcnYuVmluY2lcIixcblx0XHRcdFwi44K/44Kk44Og44Ov44O844OX44K5XCIsXG5cdFx0XHRcIuWIneS7u+e1puODkeODvOODhuOCo+ODvFwiLFxuXHRcdF0sXG5cdFx0Y29ycmVjdDogXCJTcnYuVmluY2lcIixcblx0XHRleHBsYTpcblx0XHRcdFwi5LuW44Gu6YG45oqe6IKi44GvU3J2LlZpbmNp44GL44KJ5pS55ZCN44GZ44KL6Zqb44Gr44CB5a6f6Zqb44Gr5pS55ZCN5qGI44Go44GX44Gm5LiK44GM44Gj44Gf44KC44Gu44Gn44GZ77yI44GK44Gb44Gh44OU44OD44OB44Oj44O844Go5Yid5Lu757Wm44OR44O844OG44Kj44O844Gv44ON44K/44KJ44GX44GE44Gn44GZd++8ieOAglwiLFxuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246XG5cdFx0XHRcIuODoeODs+ODkOODvOOBruS4reOBp+OAjOS6leWPo+eQhuOBruOCquODvOODq+ODiuOCpOODiOODi+ODg+ODneODszDjgI3jgavkuIDnlarlpJrjgY/jgrLjgrnjg4jlh7rmvJTjgZfjgZ/jga7jga/oqrDvvJ9cIixcblx0XHRhbnN3ZXJzOiBbXCLluLjnlLDlpKfluIxcIiwgXCLli6LllpzpgYpcIiwgXCLmlrDkupXlkozovJ1cIiwgXCLnmoblkIzjgZjlm57mlbDlh7rmvJRcIl0sXG5cdFx0Y29ycmVjdDogXCLmlrDkupXlkozovJ1cIixcblx0XHRleHBsYTpcblx0XHRcdFwi44Op44K444Kq44Gr44Gv44Oh44Oz44OQ44O85YWo5ZOh5Y+C5Yqg44GX44Gf44GT44Go44GM44GC44KK44G+44GZ44CC5Zub5Lq65YWo5ZOh44Gn44Op44K444Kq44Gr5Y+C5Yqg44GX44Gf5Zue44KC44GC44KK44G+44GX44Gf44CCXCIsXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjpcblx0XHRcdFwi5bi455Sw5aSn5biM44GM546H44GE44KL44CMbWlsbGVubml1bSBwYXJhZGXjgI3jgavkuIDluqbjgoLlj4LliqDjgZfjgabjgYTjgarjgYTjgq3jg7PjgrDjg4zjg7zjga7jg6Hjg7Pjg5Djg7zjga/vvJ9cIixcblx0XHRhbnN3ZXJzOiBbXCLkupXlj6PnkIZcIiwgXCLli6LllpzpgYpcIiwgXCLmlrDkupXlkozovJ1cIiwgXCLlhajlk6Hlj4LliqBcIl0sXG5cdFx0Y29ycmVjdDogXCLlhajlk6Hlj4LliqBcIixcblx0XHRleHBsYTpcblx0XHRcdFwi44OJ44Op44Og44Gu5Yui5Zac6YGK44Go44OZ44O844K544Gu5paw5LqV5ZKM6Lyd44Gv6auY6aC75bqm44Gn5Y+C5Yqg44GX44Gm44GE44G+44GZ44CC5LqV5Y+j44Gv5bi455Sw44Gr44Of44Os44OR44Gr6KqY44KP44KM44Gf6Zqb44CB6Ieq5YiG44GM5Y+C5Yqg44GZ44KL44GoS2luZyBHbnXjgajlpInjgo/jgonjgarjgYTjgajogIPjgYjoh6rjgonmlq3jgaPjgZ/jgZ3jgYbjgafjgZnjgILjgZfjgYvjgZfjg5/jg6zjg5Hjga7mm7LjgIxGQU1JTElB44CN44Gn44Oc44O844Kr44Or44KS5YuZ44KB6Kmx6aGM44Gr44Gq44KK44G+44GX44Gf44CCXCIsXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogXCLjg6Hjg7Pjg5Djg7zjga7kuK3jgaflkIzjgZjlpKflrablh7rouqvjga4y5Lq644Gv6Kqw77yfXCIsXG5cdFx0YW5zd2VyczogW1wi5LqV5Y+j44Go5bi455SwXCIsIFwi5Yui5Zac44Go5bi455SwXCIsIFwi5paw5LqV44Go5LqV5Y+jXCIsIFwi5Yui5Zac44Go5paw5LqVXCJdLFxuXHRcdGNvcnJlY3Q6IFwi5LqV5Y+j44Go5bi455SwXCIsXG5cdFx0ZXhwbGE6XG5cdFx0XHRcIuS6leWPo+eQhuOBqOW4uOeUsOWkp+W4jOOBr+WFseOBq+adseS6rOiXneihk+Wkp+WtpuWHuui6q+OBp+OAgeS6leWPo+eQhuOBr+WjsOalveenkeOAgeW4uOeUsOWkp+W4jOOBr+WZqOalveenkeODgeOCp+ODreWwguaUu+OBp+OBl+OBn+OAglwiLFxuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246IFwi44Kt44Oz44Kw44OM44O844GuMm5k44Ki44Or44OQ44Og44Gv44Gp44KM77yfXCIsXG5cdFx0YW5zd2VyczogW1wiVG9reW8gUmVuZGV6LVZvdXNcIiwgXCJDRVJFTU9OWVwiLCBcIlN5bXBhXCIsIFwi5LiJ5paH5bCP6KqsL+WNg+S4oeW9ueiAhVwiXSxcblx0XHRjb3JyZWN0OiBcIlN5bXBhXCIsXG5cdFx0ZXhwbGE6XG5cdFx0XHRcIlRva3lvIFJlbmRlei1Wb3Vz44GvMXN044Ki44Or44OQ44Og44CBQ0VSRU1PTlnjga8zcmTjgqLjg6vjg5Djg6DjgafjgZnjgILjgaHjgarjgb/jgatTeW1wYeOBp+OBiuOBmeOBmeOCgeOBruabsuOBr1BsYXllciBY44Gn44GZ77yBXCIsXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogXCLjgq3jg7PjgrDjg4zjg7zjga7jg5/jg6Xjg7zjgrjjg4Pjgq/jg5Pjg4fjgqrjgpLliLbkvZzjgZfjgabjgYTjgovjg4Hjg7zjg6Djga/jganjgozvvJ9cIixcblx0XHRhbnN3ZXJzOiBbXCJtaWxsZW5uaXVtIHBhcmFkZVwiLCBcIkRhaWtpIFR1bmV0YVwiLCBcIlBFUklNRVRST05cIiwgXCJlcm1ob2lcIl0sXG5cdFx0Y29ycmVjdDogXCJQRVJJTUVUUk9OXCIsXG5cdFx0ZXhwbGE6XG5cdFx0XHRcIlBFUklNRVRST07jga/luLjnlLDlpKfluIzjgYzkuLvlrrDjgZnjgovjgq/jg6rjgqjjgqTjg4bjgqPjg5bjg6zjg7zjg5njg6vjgafjgZnjgILluLjnlLDjgZXjgpPjga/jgq3jg7PjgrDjg4zjg7zjga5NVuOBruaYoOWDj+WItuS9nOOBq+OCgumWouOCj+OBo+OBpuOBhOOCi+OBneOBhuOBp+OBmeOAglwiLFxuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246IFwi5LqV5Y+j55CG44Gv5q2M6Iie5LyO55S644Gn44G844Gj44Gf44GP44KJ44KM44Gf44GT44Go44GM44GC44KL44GM44CB44Gd44Gu6aGN44Gv77yfXCIsXG5cdFx0YW5zd2VyczogW1wiMTDkuIflhoZcIiwgXCIxMuS4h+WGhlwiLCBcIjE25LiH5YaGXCIsIFwiMjDkuIflhoZcIl0sXG5cdFx0Y29ycmVjdDogXCIxMOS4h+WGhlwiLFxuXHRcdGV4cGxhOlxuXHRcdFx0XCLlpKfkurrjga7jgYrlupfjgafjgbzjgaPjgZ/jgY/jgonjgozjgZ/jgZ3jgYbjgafjgZl35b2T5Yid44GvMTbkuIflhoboq4vmsYLjgZXjgozjgZ/jgZ3jgYbjgafjgZnjgYzjgIHkuqTmuInjgavjgojjgooxMOS4h+WGhuOBq+S4i+OBkuOCieOCjOOBn+OBneOBhuOBp+OBmeOAglwiLFxuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246IFwi44Kt44Oz44Kw44OM44O844Gu5puy44CM44Ot44Km44Op44OW44CN44GuTVbjga/oqrDjga7lrrbjgafmkq7lvbHjgZXjgozjgZ/vvJ9cIixcblx0XHRhbnN3ZXJzOiBbXCLluLjnlLDlpKfluIxcIiwgXCLli6LllpzpgYpcIiwgXCLmlrDkupXlkozovJ1cIiwgXCLkupXlj6PnkIZcIl0sXG5cdFx0Y29ycmVjdDogXCLluLjnlLDlpKfluIxcIixcblx0XHRleHBsYTpcblx0XHRcdFwi5q2j56K644Gr44Gv5bi455Sw5aSn5biM44Gu56WW5q+N44Gu5a6244Gn44GZ44CC5LiA5pmC5pyf56WW5q+N44Gu5a6244GnMuS6uuaaruOCieOBl+OCkuOBl+OBpuOBhOOBn+OBneOBhuOBp+OBmeOAglwiLFxuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246XG5cdFx0XHRcIjIwMTjlubTjgavnsbPmtKXnjoTluKvjgYzjgIzjgZPjga7mm7Lpgqbmpb3jgafku4rlubTkuIDnlarlpb3jgY3jgILjgI3jgajjg4TjgqTjg7zjg4jjgZfjgZ/jgq3jg7PjgrDjg4zjg7zjga7mm7Ljga/vvJ9cIixcblx0XHRhbnN3ZXJzOiBbXCLnmb3ml6VcIiwgXCJGbGFzaCEhXCIsIFwiVGhlIGhvbGVcIiwgXCJQbGF5ZXIgWFwiXSxcblx0XHRjb3JyZWN0OiBcIlBsYXllciBYXCIsXG5cdFx0ZXhwbGE6XG5cdFx0XHRcIlBsYXllciBY44Gv5Lit5q+S5oCn44Gu44GC44KL44Go44Gm44KC44GE44GE5puy44Gn44GZ44CCTVbjgYxZb3UgVHViZeOBp+WFrOmWi+OBleOCjOOBpuOBhOOCi+OBruOBp+OBnOOBsuimi+OBpuOBj+OBoOOBleOBhO+8gVwiLFxuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246IFwi44Oh44Oz44OQ44O844Gu5Lit44Gn5LiA5pmC5pyf44CB5pyJ5ZCN5Lq644GrVHdpdHRlcuOBp+OCr+OCveODquODl+OBl+OBpuOBn+OBruOBr+iqsO+8n1wiLFxuXHRcdGFuc3dlcnM6IFtcIuW4uOeUsOWkp+W4jFwiLCBcIuWLouWWnOmBilwiLCBcIuaWsOS6leWSjOi8nVwiLCBcIuS6leWPo+eQhlwiXSxcblx0XHRjb3JyZWN0OiBcIuS6leWPo+eQhlwiLFxuXHRcdGV4cGxhOlxuXHRcdFx0XCLkupXlj6Pjga/kuIDluqbjgoLkvJrjgaPjgZ/jgZPjgajjgYzjgarjgYTmnInlkI3kurrjgavjgIHjgIzogbTjgYTjgabjgY/jgozvvIHjgI3jgahLaW5nIEdudeOBrumfs+a6kOOBruODquODs+OCr+OCkumAgeOCiuS7mOOBkeOCi+ihjOeCuuOCkumgu+e5geOBq+OBl+OBpuOBhOOBvuOBl+OBn+OAguOBoeOBquOBv+OBq+OCouOCuOOCq+ODs+OBruOCtOODg+ODge+8iOW+jOiXpOato+aWh++8ieOBq+OCr+OCveODquODl+OCkumAgeOBo+OBn+mam+OBr+ODluODreODg+OCr+OBleOCjOOBn+OBneOBhuOBp+OBmXdcIixcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOlxuXHRcdFx0XCLjgq3jg7PjgrDjg4zjg7zjga8yMDE55bm044GrTeOCueODhuWIneWHuua8lOOCkuaenOOBn+OBl+OBn+OBjOOAgeabsuOAjFNsdW1iZXJsYW5k44CN44KS5oqr6Zyy44GX44Gm44GE44KL6Zqb44Gu5LqV5Y+j44GM6Kmx6aGM44Go44Gq44Gj44Gf44CC44Gq44Gc77yfXCIsXG5cdFx0YW5zd2VyczogW1xuXHRcdFx0XCLpgLLmkoPjga7lt6jkurrjga7jgIzlpYfooYznqK7jgI3jga7jgojjgYbjgavpmo7mrrXjgpLpmY3jgorjgZ/jgYvjgolcIixcblx0XHRcdFwi5q2M44Gj44Gm44KL5pmC44Gu6aGU44GM44Ok44OQ44GL44Gj44Gf44GL44KJXCIsXG5cdFx0XHRcIuiho+ijheOCkuaApeOBq+egtOOCiuWHuuOBl+OBn+OBi+OCiVwiLFxuXHRcdFx0XCLmjpvjgZHjgabjgYTjgZ/nnLzpj6HjgpLjgo/jgZbjgajnoLTlo4rjgZfjgZ/jgYvjgolcIixcblx0XHRdLFxuXHRcdGNvcnJlY3Q6IFwi5q2M44Gj44Gm44KL5pmC44Gu6aGU44GM44Ok44OQ44GL44Gj44Gf44GL44KJXCIsXG5cdFx0ZXhwbGE6XG5cdFx0XHRcIueIqueXleOCkuaui+OBmeOBn+OCgeOBq+OChOOBo+OBn+OBneOBhuOBp+OBmXfkvZXjgYvjgavlj5bjgormhpHjgYvjgozjgZ/jgojjgYbjgarooajmg4XjgpLjgZfjgabjgb7jgZl344CM44Kt44Oz44Kw44OM44O8IOS6leWPoyBt44K544OG44CN44Gn44Kw44Kw44KL44Go44Gd44Gu5YaZ55yf44GM5Ye644Gm44GN44G+44GZd1wiLFxuXHR9LFxuXTtcblxuLy8g5q2j562U5pWw44Gr44KI44KL57WQ5p6cXG5jb25zdCB0aXRsZSA9IFtcblx0XCLmrovlv7XvvIHli4nlvLfjgZfjgabjgoLjgYbkuIDluqbvvIFcIixcblx0XCLjgYLjgarjgZ/jga/jgq3jg7PjgrDjg4zjg7zopovnv5LjgYTjgafjgZnvvIFcIixcblx0XCLjgYLjgarjgZ/jga/jgq3jg7PjgrDjg4zjg7zjgqjjg6rjg7zjg4jjgafjgZnvvIFcIixcblx0XCLjgYLjgarjgZ/jga/jgq3jg7PjgrDjg4zjg7zjg57jgrnjgr/jg7zjgafjgZnvvIFcIixcbl07XG5cbmV4cG9ydCB7IHF1aXosIHRpdGxlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9