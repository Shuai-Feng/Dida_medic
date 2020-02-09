<?php
    include("conn.php");
    @$dno=$_POST['dno'];
    @$pno=$_POST['pno'];
    @$action=$_GET['action'];
    if($action=="info"){
        $rs=mysql_query('select * from patient where pno="'.$pno.'"');
        $num=mysql_num_rows($rs);
        if($num>0){
            $json='{"status":"10001","msg":"success","data":[';
                while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
                    $json.=json_encode($info).",";
                }
                $json= substr($json,0,strlen($json)-1)."]}";
                echo $json;
        }else{
            echo '{"status":"20001","msg":"failed"}';
        }
    }
    if($action=="infodig"){
        $rs=mysql_query('select * from diagnose where pno="'.$pno.'" order by diadate desc');
        $num=mysql_num_rows($rs);
        if($num>0){
            $json='{"status":"10001","msg":"success","data":[';
                while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
                    $json.=json_encode($info).",";
                }
                $json= substr($json,0,strlen($json)-1)."]}";
                echo $json;
        }else{
            echo '{"status":"20001","msg":"failed"}';
        }
    }


    if($action=="docinfo"){
        $rs=mysql_query('select * from doctor where dno="'.$dno.'"');
        $num=mysql_num_rows($rs);
        if($num>0){
            $json='{"status":"10001","msg":"success","data":[';
                while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
                    $json.=json_encode($info).",";
                }
                $json= substr($json,0,strlen($json)-1)."]}";
                echo $json;
        }else{
            echo '{"status":"20001","msg":"failed"}';
        }
    }

    if($action=="docdig"){
        $rs=mysql_query('select * from diagnose where dno="'.$dno.'" order by diadate desc');
        $num=mysql_num_rows($rs);
        if($num>0){
            $json='{"status":"10001","msg":"success","data":[';
                while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
                    $json.=json_encode($info).",";
                }
                $json= substr($json,0,strlen($json)-1)."]}";
                echo $json;
        }else{
            echo '{"status":"20001","msg":"failed"}';
        }
    }
?>