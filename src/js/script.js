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
downLoadImg.eventListener(shiketch);
//ダブルクリックイベントの登録
dblClick.eventListener(em);

//ダブルクリックされた要素全てを格納　こいつが2個あったら
//アートボードをDBクリックされた事になるから、moveableを起動しない



var toolBorderBtn = document.getElementById('toolBorder');
toolBorderBtn.addEventListener("click",() => {
	let span = document.createElement("span");
	span.classList.add('shiketch_elm_border');
	board.appendChild(span);
})
