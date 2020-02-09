<?php
        include("conn.php");
        $dno=$_POST['dno'];
        $pwd=$_POST['pwd'];
        $dname=$_POST['dname'];
        $rs=mysql_query("select * from doctor where dno='$dno'and pwd='$pwd' and  dname='$dname'");
        $num=mysql_num_rows($rs);
            if($num>0){
                echo '{"status":"100001","msg":"success","dno":"'.$dno.'"}';
            }else{
                echo '{"status":"200001","msg":"failed"}';
            }
?>