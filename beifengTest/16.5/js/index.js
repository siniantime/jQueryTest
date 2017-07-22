$(function () {
	//添加提交按钮样式
	$('#search-btn').button({

	});
	

	//创建注册对话
	$('#reg').dialog({
		autoOpen:true,
		modal:true,
		resizable:false,
		width:320,
		height:340,
		buttons:{
			'提交':function(){

			}
		}
	})
	
	$('#reg').buttonset();
})