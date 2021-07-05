import downLoadImg from './module/DownLoadImg.js';
import EventEmitter from 'events'

//イベント
import dblClick from './module/event/DblClick.js';
import click from './module/event/Click.js';
import paste from './module/event/Paste.js';
//エレメント
import artBoard from './module/element/ArtBoard.js';
import image from './module/element/Image.js';

const em = new EventEmitter();

//メインの要素を取得しておく
const shiketch = document.getElementById("shiketch");
const board = document.getElementById("board");

//アートボードのイベントを登録
artBoard.eventListener(shiketch,board,em);
image.eventListener(board,em);
//画像出力のイベント登録
downLoadImg.eventListener(shiketch,board);
//ダブルクリックイベントの登録
dblClick.eventListener(em);
click.eventListener(em);
//ペースト
paste.eventListener(em);

//ダブルクリックされた要素全てを格納　こいつが2個あったら
//アートボードをDBクリックされた事になるから、moveableを起動しない



var toolBorderBtn = document.getElementById('toolBorder');
toolBorderBtn.addEventListener("click",() => {
	let span = document.createElement("span");
	span.classList.add('shiketch_elm_border');
	board.appendChild(span);
})
