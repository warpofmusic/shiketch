let Click = {
	elms:[],
	em:{},
	/**
	 * クリックした時に、何処でダブルクリックしたかを取って、
	 * クリックしたelmのdata-elmtype.dbclickイベントを発火する
	 * @param  {[type]} em       [description]
	 */
	eventListener:function(em){
		Click.em = em;
		document.addEventListener('click',function(e){
			let targElm = e.path[0];
			Click.em.emit(targElm.getAttribute('data-elmtype')+'.click',targElm);
		})
	}
};

export default Click;
