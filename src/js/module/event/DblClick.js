let DblClick = {
	elms:[],
	em:{},
	/**
	 * ダブルクリックした時に、何処でダブルクリックしたかを取って、
	 * ダブルクリックしたelmのdata-elmtype.dbclickイベントを発火する
	 * @param  {[type]} em       [description]
	 */
	eventListener:function(em){
		DblClick.em = em;
		document.addEventListener('dblclick',function(e){
			let targElm = e.path[0];
			DblClick.em.emit('dblClick.destroy',targElm);
			DblClick.em.emit(targElm.getAttribute('data-elmtype')+'.dblClick',targElm);
		})
	}
};

export default DblClick;
