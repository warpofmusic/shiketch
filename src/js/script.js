import downLoadImg from './module/DownLoadImg.js';
import EventEmitter from 'events'

//イベント
import dblClick from './module/event/DblClick.js';
//エレメント
import artBoard from './module/element/ArtBoard.js';

const em = new EventEmitter();

//メインの要素を取得しておく
const shiketch = document.getElementById("shiketch");
const board = document.getElementById("board");

//アートボードのイベントを登録
artBoard.eventListener(shiketch,board,em);
//画像出力のイベント登録
downLoadImg.eventListener(shiketch,board);
//ダブルクリックイベントの登録
dblClick.eventListener(em);

//ダブルクリックされた要素全てを格納　こいつが2個あったら
//アートボードをDBクリックされた事になるから、moveableを起動しない

board.addEventListener('paste', (e) => {
	console.log(e.clipboardData.types);
	console.log(e.clipboardData.items[0].type);
	//テキストの場合
	//https://qiita.com/kwst/items/8d9cd40e181761085325
	e.clipboardData.items[0].getAsString(function(str){
		console.log(123);
	});
	//ファイルの場合
	//http://www.vettyofficer.com/2012/11/how-to-paste-image-from-clipboard-using.html
	//https://qiita.com/tatesuke/items/00de1c6be89bad2a6a72
	// let blob  = e.clipboardData.items[0].getAsFile();
	// var fr = new FileReader();
	// fr.onload = function(e) {
	// 	// onload内ではe.target.resultにbase64が入っているのであとは煮るなり焼くなり
	// 	var base64 = e.target.result;
	// 	console.log(base64)
	// };
	// fr.readAsDataURL(blob);
});

var toolBorderBtn = document.getElementById('toolBorder');
toolBorderBtn.addEventListener("click",() => {
	let span = document.createElement("span");
	span.classList.add('shiketch_elm_border');
	board.appendChild(span);
})
