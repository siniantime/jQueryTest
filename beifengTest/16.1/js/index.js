$(function () {
	//添加提交按钮样式
	$('#search-btn').button();
	//注册与登录弹窗
	$('#reg-a').click(function(event) {
		/* Act on the event */
		$('#reg').dialog();
	});

})