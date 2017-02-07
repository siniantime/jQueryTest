$(document).ready(function(){
	(function(){
		var oUlLi=$(".img").find("li");
		var iNow=0;
		var timer;

		fnFade();
		autoPlay();

		function autoPlay(){
			timer=setInterval(function(){
				iNow++;
				iNow%=4;
				fnFade();
			},2000);
		}

		function fnFade(){
			oUlLi.each(function(i){
				if(i!=iNow){
					oUlLi.eq(i).fadeOut().css('zlndex',1);
				}else{
					oUlLi.eq(i).fadeIn().css('zlndex',2);
				}
			});
		}
	})();
});