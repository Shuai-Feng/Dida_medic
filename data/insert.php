<?php
    header('content-type:text/html;charset=utf-8');
    include("conn.php");
    // $dno='0000001';
    // $pwd="111111";
    $pname=$_POST['pname'];
    $dept=$_POST['dept'];
    $dname=$_POST['dname'];
    $disintro=$_POST['disintro'];
    $pnumber=$_POST['pnumber'];
    $ptime=$_POST['ptime'];
    $sex=$_POST['sex'];
    $diano=time().rand(1,10000);


    $drs=mysql_query("select dno from doctor where dname='$dname'");
    while($info=mysql_fetch_array($drs)){
        $dno=$info[dno];
    }



    $rs=mysql_query("insert into dig value('$diano','$dno','$dname','$pname','$dept','$pnumber','$sex','$ptime','$disintro')");
    if($rs){
        echo '<script type="text/javascript">';
        echo 'alert("表单提交成功");';
        echo 'window.location.href="../patient.html"';  
        echo '</script>';
    }else{
        echo 'false';
    }
?>