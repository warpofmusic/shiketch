const EventEmitter = require("events");
let ArtBoard = {
	shiketch : {},
	bord : {},
	moveable:null,
	controle:function(){
		if(ArtBoard.moveable == null){
			ArtBoard.setMoveable();

		}else{
			ArtBoard.moveable.destroy();
			ArtBoard.moveable = null;
		}
	},
	setMoveable:function(){
		//アートボードをリサイズできるようにする
	 	ArtBoard.moveable = new Moveable(ArtBoard.shiketch, {
			resizable: true,
			draggable: true,
			edgeDraggable:true,
		});
		ArtBoard.moveable.target = ArtBoard.bord;
		const frame = {
		    translate: [0, 0],
		};
		ArtBoard.moveable.on("resizeStart", ({ target, set, setOrigin, dragStart }) => {
		    const style = window.getComputedStyle(target);
		    const cssWidth = parseFloat(style.width);
		    const cssHeight = parseFloat(style.height);
		    set([cssWidth, cssHeight]);
		}).on("resize", ({ target, width, height, drag }) => {
		    target.style.width = `${width}px`;
		    target.style.height = `${height}px`;
		    frame.translate = drag.beforeTranslate;
		    target.style.transform
		        = `translate(${drag.beforeTranslate[0]}px, ${drag.beforeTranslate[1]}px)`;
		}).on("drag", ({target, transform,}) => {
		    target.style.transform = transform;
		});
	},
	eventListener:function(shiketch,bord,em){
		ArtBoard.bord = bord;
		ArtBoard.shiketch = shiketch;
		ArtBoard.em = em;
		em.on('ArtBoard.controle',function(){
			ArtBoard.controle();
		});
	},
};

export default ArtBoard;
