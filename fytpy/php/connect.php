<?php
//连接服务器。
$connection=mysql_connect("localhost","root","")or die("连接服务器失败！");
mysql_query("set names utf8")or die("设置字符集失败！");
//选择数据库。
mysql_select_db("fytpy",$connection)or die("选择数据库失败！");
?>