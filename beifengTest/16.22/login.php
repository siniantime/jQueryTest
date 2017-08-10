<?php
	require 'config.php';

	$_pass = sha1($_POST['password']);

	//echo "$_pass";die();

	$query = mysql_query("SELECT user,password FROM user WHERE
	user='{$_POST['user']}' AND password='{$_pass}'") or die('SQL 错误！');

	if (mysql_fetch_array($query, MYSQL_ASSOC)) {
		echo 'true';
	} else {
		echo 'false';
	}
	mysql_close();
?>