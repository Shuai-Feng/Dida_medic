
    <?php
        // header('content-type:text/html;charset=utf-8');

        include('conn.php');
        $dno=$_GET['dno'];
        if($dno=='admin'){
            $rs=mysql_query("select * from dig");
            $json='{"status":"10001","msg":"success","data":[';
            while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
                $json.=json_encode($info).",";
            }
            $json= substr($json,0,strlen($json)-1)."]}";
            echo $json;

        }else{
            $rs=mysql_query("select * from dig where dno='$dno'");
            $json='{"status":"10001","msg":"success","data":[';
                while($info=mysql_fetch_array($rs,MYSQL_ASSOC)){
                    $json.=json_encode($info).",";
                }
                $json= substr($json,0,strlen($json)-1)."]}";
            echo $json;
        }
        mysql_free_result($rs);
        mysql_close($conn);
    ?>