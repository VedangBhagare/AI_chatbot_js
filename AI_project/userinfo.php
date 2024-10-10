<?php
$conn=new mysqli('localhost','root','','db_aiproject');
if($conn)
{
    echo"Connection Successfull..";
    
}
else
{
    echo"Connection Failled..";
}
$uname=$_POST['uname'];
$mail=$_POST['email'];
$mobile=$_POST['uno'];
$comment=$_POST['comment'];
$cmd="insert into userinfo(uname,mail,mobile,comment) values('$uname','$mail','$mobile','$comment')";

$sql_status=mysqli_query($conn,$cmd);
if($sql_status)
{
header('location:contactus.php');
}
else
{
    echo"Query Failled..";
}
// if($sql_status)
// {
//     echo" Successfully added into database..";

// }
// else
// {
//     echo" Query Failled..";
// }



?>
