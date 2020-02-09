
    <?php
        // header('content-type:text/html;charset=utf-8');
        include('conn.php');
        $diano=$_GET['diano'];
        $rs=mysql_query("Delete  from dig where diano='$diano'");

        $rs=mysql_query("select * from dig diano='$diano' ");
        $json='{"status":"10001","msg":"success","data":[';
        while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
            $json.=json_encode($info).",";
        }
        $json= substr($json,0,strlen($json)-1)."]}";
        echo $json;
    ?>