let ArtBoard = {
	shiketch : {},
	board : {},
	moveable:null,
	/**
	 * アートボードのリサイズをコントロールする
	 */
	controle:function(){
		if(ArtBoard.moveable == null){
			//moveableを起動
			ArtBoard.setMoveable();
		}else{
			//moveableを終了
			ArtBoard.moveable.destroy();
			ArtBoard.moveable = null;
		}
	},
	destroy:function(){
		if(ArtBoard.moveable != null){
			ArtBoard.moveable.destroy();
			ArtBoard.moveable = null;
		}
	},
	/**
	 * moveableを起動する
	 * メモリを軽くする為に起動する度に毎回moveableを作成する。
	 */
	setMoveable:function(){
		//アートボードをリサイズできるようにする
	 	ArtBoard.moveable = new Moveable(ArtBoard.shiketch, {
			resizable: true,
			draggable: true,
			edgeDraggable:true,
		});
		ArtBoard.moveable.target = ArtBoard.board;
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
	/**
	 * アートボードのイベント受付と初期化
	 * @param  elm shiketch
	 * @param  elm board    アートボード
	 * @param  EventEmitter em
	 */
	eventListener:function(shiketch,board,em){
		ArtBoard.board = board;
		ArtBoard.shiketch = shiketch;
		ArtBoard.em = em;
		em.on('shiketch.dblClick',function(){
			ArtBoard.controle();
		});
		em.on('dblClick.destroy',function(){
			ArtBoard.destroy();
		})
	},
};

export default ArtBoard;
