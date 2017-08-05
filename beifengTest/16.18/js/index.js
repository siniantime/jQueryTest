$(function () {
	//添加提交按钮样式
	$('#search-btn').button({

	});
	
	$('#reg-a').click(function(event) {
		/* Act on the event */
		$('#reg').dialog('open');
	});

	//创建注册对话
	$('#reg').dialog({
		autoOpen:false,//默认打开
		modal:true,//遮罩
		resizable:false,//大小拖动
		width:320,
		height:340,
		buttons:{
			'提交':function(){
				//alert(1);
				$(this).ajaxSubmit({
					url:'add.php',
					type : 'POST',
					success:function(responseText,statusText){
						alert(responseText + statusText);
					}
				})
			}
		}
	})
	
	$('#reg').buttonset();

	//$('#date').datepicker('show');

	$('#date').datepicker({
		//autoSize:true,
		changeMonth:true,
		changeYear:true,
		showButtonPanel:true,
		closeText:'关闭',
		currentText:'今天',
		maxDate:0,
		defaultDate:'7/1/1997',
	});//日历调用


	$('#reg input[title]').tooltip({
		position:{
			my:'left top',
			at:'right+10 top-5',
		},
		show:false,
		hide:false,
		/*
		create:function(){
			alert('创建触发！');
		}
		*/
	});
})