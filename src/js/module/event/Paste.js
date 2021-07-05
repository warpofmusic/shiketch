let Paste = {
	elms:[],
	em:{},
	/**
	 * ペーストした時にクリップボートに有る内容によって、
	 * クリップボードの1個目のデータしか見ない
	 * [fileType].pasteイベントを発火する
	 * @param  {[type]} em       [description]
	 */
	eventListener:function(em){
		Paste.em = em;
		document.addEventListener('paste', (e) => {
			let clipboard = e.clipboardData.items[0];
			Paste.em.emit(clipboard.type+'.paste',clipboard);
		});
	}
};

export default Paste;


// board.addEventListener('paste', (e) => {
// 	console.log(e.clipboardData.types);
// 	console.log(e.clipboardData.items[0].type);
// 	//テキストの場合
// 	//https://qiita.com/kwst/items/8d9cd40e181761085325
// 	e.clipboardData.items[0].getAsString(function(str){
// 		console.log(123);
// 	});
// 	//ファイルの場合
// 	//http://www.vettyofficer.com/2012/11/how-to-paste-image-from-clipboard-using.html
// 	//https://qiita.com/tatesuke/items/00de1c6be89bad2a6a72
// 	// let blob  = e.clipboardData.items[0].getAsFile();
// 	// var fr = new FileReader();
// 	// fr.onload = function(e) {
// 	// 	// onload内ではe.target.resultにbase64が入っているのであとは煮るなり焼くなり
// 	// 	var base64 = e.target.result;
// 	// 	console.log(base64)
// 	// };
// 	// fr.readAsDataURL(blob);
// });
