$(document).ready(function(){
	(function(){
		var imgLi=$('.img').find('li');
		var spotLi=$('.spot').find('li');
		var iNow=0;
		var timer=null;

		autoPlay();

		spotLi.hover(function(){
			clearInterval(timer);
			iNow=$(this).index();
			fnFade();
		},function(){
			fnFade();
			autoPlay();
		});

		function autoPlay(){
			timer=setInterval(function(){
			iNow++;
			iNow %= 4;
			fnFade();
			},2000);
		}

		function fnFade(){
			imgLi.each(function(i){
				if(i!=iNow){
					imgLi.eq(i).stop().fadeOut().css('z-index','1');
					spotLi.eq(i).removeClass('native');
				}else{
					imgLi.eq(i).stop().fadeIn().css('z-index','2');
					spotLi.eq(i).addClass('native');
				}
			});
		}
	})();
});