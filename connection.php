<?php
     $STUDENTNAME=$_POST['STUDENT NAME'];
     $ROLLNUMBER=$_POST['ROLL NUMBER'];
     $FATHERSNAME=$_POST['FATHER''S''NAME'];
     $MOTHERSNAME=$_POST['STUDENTNAME'];
     $DATEOFBIRTH=$_POST['STUDENTNAME'];
     $GENDER=$_POST['STUDENTNAME'];
     $BRANCH=$_POST['BRANCH'];
     $SECTION=$_POST['STUDENTNAME'];
     $YEAR=$_POST['STUDENTNAME'];
     $ADDRESS=$_POST['STUDENTNAME'];
     $PASSWORD=$_POST['STUDENTNAME'];

//database connection
$conn=new mysqli('localhost','root','','test');
if($conn->connect_error){
	die('Connection Failed :'.$conn->connect_error);
}else{
	$stmt=$conn->prepare("insert into registration(STUDENTNAME,ROLLNUMBER,FATHERSNAME,MOTHERSNAME,DATEOFBIRTH,GENDER,BRANCH,SECTION,YEAR,ADDRESS,PASSWORD)values(?,?,?,?,?,?,?,?,?,?,?)");
	$stmt->blind_param("sssssssssss",$STUDENTNAME,$ROLLNUMBER,$FATHERSNAME,$MOTHERSNAME,$DATEOFBIRTH,$GENDER,$BRANCH,$SECTION,$YEAR,$ADDRESS,$PASSWORD);
	$stmt->execute();
	echo "registration successfully...";
	$stmt->close();
	$conn->close();
}
?>
	

