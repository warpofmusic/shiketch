let Square = {
	board : {},
	moveable:null,
	setting:{
		span:{
			css :'shiketch_elm_square',
			elmType:'square',
			click:'resize_drag'
		},
	},
	targElm : {},
	controle:function(targElm){
		Square.targElm = targElm;
		if(targElm.classList.contains(Square.setting.span.click)){
			Square.moveable.destroy();
			Square.moveable = null;
			targElm.classList.remove(Square.setting.span.click)
		}else{
			//moveableを起動
			Square.setMoveable(targElm);			
		}
	},
	destroy:function(targElm){
		if(Square.moveable != null && Square.targElm != targElm){
			Square.moveable.destroy();
			Square.moveable = null;
			let movebleSquare = document.querySelectorAll('.'+Square.setting.span.click);
			for(let i =0;i < movebleSquare.length;i++){
				movebleSquare[i].classList.remove(Square.setting.span.click);
			}
		}
	},
	/**
	* moveableを起動する
	* メモリを軽くする為に起動する度に毎回moveableを作成する。
	*/
	setMoveable:function(targElm){
		targElm.classList.add(Square.setting.span.click);
		//アートボードをリサイズできるようにする
		Square.moveable = new Moveable(Square.board, {
			resizable: true,
			draggable: true,
		});
		Square.moveable.target = targElm;
		const frame = {
			translate: [0, 0],
		};
		Square.moveable.on("resize", (e) => {
			let target = e.target;
			let width = e.width;
			let height = e.height;
			let drag = e.drag;
			target.style.width = `${width}px`;
			target.style.height = `${height}px`;
			target.style.transform = `translate(${drag.beforeTranslate[0]}px, ${drag.beforeTranslate[1]}px)`;
		}).on("drag", ({target, transform,}) => {
			target.style.transform = transform;
		});
	},
	create:function(){
		let span = document.createElement("span");
		span.classList.add(Square.setting.span.css);
		span.setAttribute('data-elmtype',Square.setting.span.elmType);
		console.log(span);
		Square.board.appendChild(span);
	},
	/**
	* 四角のイベント受付と初期化
	* @param  elm board    アートボード
	* @param  EventEmitter em
	*/
	eventListener:function(board,em){
		
		Square.board = board;
		Square.em = em;
		em.on('square.dblClick',function(targElm){
			Square.controle(targElm);
		});
		em.on('dblClick.destroy',function(){
			Square.destroy();
		})
		em.on('create_square.click',function(){
			Square.create();
		})
	},
};

export default Square;
