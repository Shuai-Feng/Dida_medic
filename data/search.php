<?php
            include('conn.php');
            $dname=$_GET['dname'];
            $rs=mysql_query("select * from doctor where dname='$dname'");
            $num=mysql_num_rows($rs);
            if($num>0){
                echo '{"status":"100001","msg":"success"}';
            }else{
                echo '{"status":"200001","msg":"failed"}';
            }
?>