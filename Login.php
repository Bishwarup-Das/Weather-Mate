<?php
    $username = $_POST["username"];
    $password = $_POST["password"];

    //Database Connection
    $conn = new mysqli("localhost", "root", "", "Weather");
    if($conn->connect_error){
        die("Connection Failed :".$conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {


        $query = "SELECT * FROM Admin_Login WHERE username = '$username' AND password = '$password'";
        $result = $conn->query($query);

        if ($result->num_rows==1) { 
            session_start();
            $_SESSION['AdminLoginId']=$_POST['username'];
            header("location: Admin_Panel.php");
            exit;
        } 
        else {
            echo "<script>
                    alert('Wrong! Username or Password');
                    window.location.href = 'Admin.html'
                 </script>";
        }
    }
 ?>