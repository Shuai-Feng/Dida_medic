<?php
        // @header("Content-Type:text/html;charset=utf-8");
        $conn=mysql_connect("localhost","root","") or die("wrong");
        mysql_select_db("medic",$conn);
        mysql_query("set names utf8");
?>