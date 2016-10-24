<?php
//连接服务器。
$connection=mysqli_connect("localhost","root","")or die("连接服务器失败！");
mysqli_query($connection,"set names utf8")or die("设置字符集失败！");
//选择数据库。
mysqli_select_db($connection,'fytpy'/*"madsoapn_main"*/)or die("选择数据库失败！");
?>