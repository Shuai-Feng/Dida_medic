<?php
    session_start();
    include("conn.php");
    // 用户登录
    @$pname=$_POST['pname'];
    @$pcell=$_POST['pcell'];
    $rs=mysql_query('select * from patient where pname="'.$pname.'" and pcell="'.$pcell.'"');
    // $rs=mysql_query("select * from patient where pname='".$pname."' and pcell='".$pcell."'");
    $num=mysql_num_rows($rs);
    if($num>0){
        while($info=mysql_fetch_array($rs)){
            $pno=$info['pno'];
        }
        echo '{"status":"100001","msg":"success","pno":"'.$pno.'"}';
    }else{
        echo '{"status":"200001","msg":"failed"}';
    }
?>