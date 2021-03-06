$(function () {
	//添加提交按钮样式
	$('#search-btn').button({

	});
	
	$('#reg-a').click(function(event) {
		/* Act on the event */
		$('#reg').dialog('open');
	});

	//loading数据
	$('#loading').dialog({
		autoOpen:false,
		modal:true,
		closeOnEscape:false,
		resizable:false,
		draggable:false,
		width:180,
		height:80,
	}).parent().parent().find('.ui-widget-header').hide();
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
					beforeSubmit:function(){
						$('#loading').dialog('open');
						$('#reg').dialog('widget').find('button').eq(1).button('disable');
					},
					success:function(responseText,statusText){
						if (responseText) {
							$('#reg').dialog('widget').find('button').eq(1).button('enable');
							$('#loading').html('数据新增成功');
							setTimeout(function(){
								$('#loading').dialog('close');
								$('#reg').dialog('close');
								$('#reg').resetForm();
							},1000);
						}
						
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
		defaultDate:'1997-07-01',
		//appendText:'(yy-mm-dd)',
		dateFormat:'yy-mm-dd',
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