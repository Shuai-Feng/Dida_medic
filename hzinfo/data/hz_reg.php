<?php
    //用户注册
    if($_SERVER['REQUEST_METHOD']=="POST"){
        include("conn.php");
        $pname=$_POST['pname'];
        $psex=$_POST['psex'];
        $page=$_POST['page'];
        $pcell=$_POST['pcell'];
        $phis=$_POST['phis'];
        $pno=date('ymd',time()).rand(10,99).substr(time(),strlen(time())-3,3);
        $flag=mysql_query('INSERT into patient VALUES ('.$pno.',"'.$pname.'","'.$psex.'",'.$page.',"'.$pcell.'","'.$phis.'")');
        
        if($flag){
            echo '{"status":"100001","msg":"success"}';
        }else{
            echo '{"status":"200001","msg":"failed"}';
        }
    }else{
        header("location:error.php");
    }
?>