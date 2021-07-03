let DbClick = {
	elms:[],
	em:{},
	//ダブルクリックされた要素全てを格納　こいつが2個あったら
	//アートボードをDBクリックされた事になるから、moveableを起動しない
	controle:function (){
		if(DbClick.elms.length < 2){
			if(DbClick.elms[0] = 'shiketch'){
				//shiketch部分をダブルクリックしたのでArtBoardのmoveable
				DbClick.em.emit('ArtBoard.controle');
			}
		}else{
			//artbordをダブルクリックした。
		}
		DbClick.elms = [];
	},
	eventListener:function(shiketch,bord,em){
		DbClick.em = em;
		shiketch.addEventListener('dblclick', function(){
			DbClick.elms.push('shiketch');
			DbClick.controle();
		});
		bord.addEventListener('dblclick', function(){
			DbClick.elms.push('bord');
			DbClick.controle();
		});
	}
};

export default DbClick;
