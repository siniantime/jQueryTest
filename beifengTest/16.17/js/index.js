$(function () {
	//$('#reg').ajaxForm(function(){
	//	alert('提交成功');
	//})

	//js里用了submit()这个方法时，采用ajaxSubmit()提交
	//ajaxForm自动阻止了默认提交
	/*
	$('#reg').submit(
		function(){
			$(this).ajaxSubmit({
				url:'test.php',
				target:'#box',
				type:'GET',
				//clearForm:true,
				resetForm:true,
				data:{
					aaa:'aaa',
					bbb:'bbb',
				},
				beforeSubmit:function(){
					//提交之前执行，一般用于数据验证
					//数据验证不合格返回false
				},
				success:function(responseText, statusText){
					//alert('提交成功');
					alert(responseText + statusText);
				},
			});
			return false;
		});
	*/
	//submit方法没有组织默认提交
	alert($('#reg').formSerialize());
});