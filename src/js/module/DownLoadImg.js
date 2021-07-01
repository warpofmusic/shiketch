let DownLoadImg = {
	shiketch : {},
	run:function(){
		html2canvas(DownLoadImg.shiketch).then(canvas => { 
	       let downloadEle = document.createElement("a");
	       downloadEle.href = canvas.toDataURL("image/png");
	       downloadEle.download = "shiketchImg.png";
	       downloadEle.click();
	   });
	},
	eventListener:function(shiketch){
		DownLoadImg.shiketch = shiketch;
		let btn = document.getElementById("btnExportImg");
		btn.addEventListener("click",() => {
			DownLoadImg.run();
		})
	}
};

export default DownLoadImg;
