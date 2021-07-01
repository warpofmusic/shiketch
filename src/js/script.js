import downLoadImg from './module/DownLoadImg.js';

const shiketch = document.getElementById("shiketch");

downLoadImg.eventListener(shiketch);

var toolBorderBtn = document.getElementById('toolBorder');
toolBorderBtn.addEventListener("click",() => {
	 let span = document.createElement("span");
	 span.classList.add('shiketch_elm_border');
	 shiketch.appendChild(span);
})
