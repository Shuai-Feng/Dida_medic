
<?php 
    $action=$_GET['action'];
    if($action=="res"){
        include("conn.php");
        @$digresult=$_POST['digresult'];
        @$diano=$_POST['diano'];
        $flag=mysql_query('update diagnose set digresult="'.$digresult.'" where diano="'.$diano.'"');
        if($flag){
            echo '{"status":"100001","msg":"success"}';
        }else{
            echo '{"status":"200001","msg":"failed"}';
        }
    }
?>