let DownLoadImg = {
	shiketch : {},
	board : {},
	run:function(){
		html2canvas(DownLoadImg.board).then(canvas => { 
	       let downloadEle = document.createElement("a");
	       downloadEle.href = canvas.toDataURL("image/png");
	       downloadEle.download = "shiketchImg.png";
	       downloadEle.click();
	   });
	},
	eventListener:function(shiketch,board){
		DownLoadImg.shiketch = shiketch;
		DownLoadImg.board = board;
		let btn = document.getElementById("btnExportImg");
		btn.addEventListener("click",() => {
			DownLoadImg.run();
		})
	}
};

export default DownLoadImg;
