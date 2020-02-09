
    <?php
        // header('content-type:text/html;charset=utf-8');
        include('conn.php');
        $rs=mysql_query("select * from doctor");
        $json='{"status":"10001","msg":"success","data":[';
        while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
            $json.=json_encode($info).",";
        }
        $json= substr($json,0,strlen($json)-1)."]}";
        echo $json;
        mysql_close($conn);
    ?>