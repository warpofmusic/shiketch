let Image = {
	board : {},
	moveable:null,
	targElm : {},
	setting:{
		img:{
			css :'shiketch_elm_img_unit',
			elmType:'image'
		},
		figure:{
			css:'shiketch_elm_figure',
			elmType:'image',
			click:'resize_drag'
		}
	},
	/**
	* 画像をアートボードに配置する。
	* @param  {[type]} clipboard [description]
	*/
	paste:function(clipboard){
		//画像で無ければはじく
		let ary = clipboard.type.split('/');
		if (ary[0] != "image"){
			return true;
		}
		let blob  = clipboard.getAsFile();
		var fr = new FileReader();
		fr.onload = function(e) {
			// onload内ではe.target.resultにbase64が入っているのであとは煮るなり焼くなり
			var base64 = e.target.result;
			let img = document.createElement("img");
			img.src= base64;
			img.classList.add(Image.setting.img.css);
			img.setAttribute('data-elmtype',Image.setting.img.elmType);
			var figure = document.createElement("figure");
			figure.classList.add(Image.setting.figure.css);
			figure.setAttribute('data-elmtype',Image.setting.figure.elmType);
			figure.appendChild(img);
			board.appendChild(figure);
		};
		fr.readAsDataURL(blob);
	},
	/**
	* アートボードのリサイズをコントロールする
	*/
	click:function(targElm){
		Image.targElm = targElm;
		if(targElm.classList.contains(Image.setting.figure.click)){
			Image.moveable.destroy();
			Image.moveable = null;
			targElm.classList.remove(Image.setting.figure.click)
		}else{
			//moveableを起動
			Image.setMoveable(targElm);			
		}
	},
	destroy:function(targElm){
		if(Image.moveable != null && Image.targElm != targElm){
			Image.moveable.destroy();
			Image.moveable = null;
			let movebleImg = document.querySelectorAll('.'+Image.setting.figure.click);
			for(let i =0;i < movebleImg.length;i++){
				movebleImg[i].classList.remove(Image.setting.figure.click);
			}
		}
	},
	setMoveable:function(targElm){
		targElm.classList.add(Image.setting.figure.click);
		//アートボードをリサイズできるようにする
		Image.moveable = new Moveable(Image.board, {
			resizable: true,
			draggable: true,
		});
		Image.moveable.target = targElm;
		const frame = {
			translate: [0, 0],
		};
		Image.moveable.on("resize", (e) => {
			//TODO 画像の縦横比をそのままで、リサイズに対応刺せる
			let target = e.target;
			let width = e.width;
			let height = e.height;
			let drag = e.drag;
			target.style.width = `${width}px`;
			target.style.height = `${height}px`;
			// let img = target.querySelector('img');
			// img.style.width = `${width}px`;
			// img.style.height = `${height}px`;
			target.style.transform = `translate(${drag.beforeTranslate[0]}px, ${drag.beforeTranslate[1]}px)`;
		}).on("drag", ({target, transform,}) => {
			target.style.transform = transform;
		});
	},
	
	/**
	* アートボードのイベント受付と初期化
	* @param  elm board    アートボード
	* @param  EventEmitter em
	*/
	eventListener:function(board,em){
		Image.board = board;
		Image.em = em;
		em.on('image/png.paste',function(clipboard){
			Image.paste(clipboard);
		});
		em.on('image.dblClick',function(targElm){
			let figure = targElm.parentNode;
			Image.click(figure);
		});
		em.on('dblClick.destroy',function(targElm){
			let figure = targElm.parentNode;
			Image.destroy(figure);
		})
	},
};

export default Image;
