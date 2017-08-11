$(function () {
	//添加提交按钮样式
	$('#search-btn').button({
		icons:{
			primary:'ui-icon-search',
		}
	});
	
	$('#question-btn').button({

	}).click(function(event) {
		/* Act on the event */
		if ($.cookie('user')) {

		}else{
			$('#error').dialog('open');
			setTimeout(function (argument) {
				// body...
				$('#error').dialog('close');
				$('#login').dialog('open');
			},1000);
		}
	});;

	$('#error').dialog({
		autoOpen:false,
		modal:true,
		closeOnEscape:false,
		resizable:false,
		draggable:false,
		width:180,
		height:80,
	})

	//cookie测试
	//$.cookie('user','bbs',{
	//	expires:7,
	//});

	$('#member,#logout').hide();
	if($.cookie('user')){
		$('#member,#logout').show();
		$('#reg-a,#login-a').hide();
		$('#member').html($.cookie('user'));
	}else{
		$('#member,#logout').hide();
		$('#reg-a,#login-a').show();
	}

	$('#logout').click(function(event) {
		/* Act on the event */
		$.removeCookie('user');
		window.location.href = '/jQueryTest/beifengTest/16.20/'
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
							//设置cookie数据
							$.cookie('user',$('#user').val(),{
								expires:7,
							});
							setTimeout(function(){
								$('#loading').dialog('close');
								$('#reg').dialog('close');
								$('#reg').resetForm();
								$('#member,#logout').show();
								$('#reg-a,#login-a').hide();
								$('#member').html($.cookie('user'));
							},1000);
						}
						
					}
				})
			}
		}
	})
	
	//创建登录对话
	$('#login').dialog({
		autoOpen:false,
		modal:true,
		resizable:false,
		buttons:{
			'登录':function(){
				$(this).ajaxSubmit({
					url:'login.php',
					type:'POST',
					beforeSubmit:function(){
						$('#loading').dialog('open');
						$('#login').dialog('widget').find('button').eq(1).button('disable');
					},
					success:function(responseText,statusText){
						$('#loading').html('登录成功');
						if ($('expires').is(':checked')) {
							$.cookie('user',$('#login_user').val(),{
								expires:7,
							});
						}else{
							$.cookie('user',$('#login_user').val())
						};
						
						setTimeout(function(){
							$('#loading').dialog('close');
							$('#login').dialog('close');
							$('#login').resetForm();
							$('#member,#logout').show();
							$('#reg-a,#login-a').hide();
							$('#member').html($.cookie('user'));
						},1000);
					}
				})
			}
		}
	})

	$('#login-a').click(function(event) {
		/* Act on the event */
		$('#login').dialog('open');
	});

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

	//切换选项卡

	$('#tabs').tabs({
		load:function(){
			
		},
		beforeLoad:function(){
		
		}
	});

	//折叠菜单
	$('#accordion').accordion();
})