$(document).ready(function(){
	(function(){
		var oUlLi=$('.img').find('li');
		var timer;
		var iNow=0;//计数器

		timer=setInterval(function(){
			iNow++;
			iNow%=4;
			fnFade();
		},2000);

		function fnFade(){
			oUlLi.each(function(i){
				if(i!=iNow){
					oUlLi.eq(i).fadeOut().css('z-index','1');
				}else{
					oUlLi.eq(i).fadeIn().css('z-index','2');
				}
			});
		}
	})();
});