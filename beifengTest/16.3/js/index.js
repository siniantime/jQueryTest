$(function () {
	//添加提交按钮样式
	$('#search-btn').button();
	//注册与登录弹窗
	$('#reg').dialog({
		title:'iSee 注册',
		buttons:{
			'提交':function(){
				alert('正在提交')
			},
			'取消':function(){
				$(this).dialog('close');
			}
		},
		//autoOpen:false,
		//resizable:false,//是否可以移动大小
		modal:true,
	});
	/*
	$('#reg-a').click(function(event) {
	
		$('#reg').dialog('open');
	});
	*/
	$('#login-a').click(function(event) {
		/* Act on the event */
		$('#login').dialog();
	});

})