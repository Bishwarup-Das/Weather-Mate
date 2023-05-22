<?php
    $FirstName = $_POST["fname"];
    $LastName = $_POST["lname"];
    $Name = $FirstName." ".$LastName;
    $Email = $_POST["email"];
    $Phone_Number = $_POST["mob"];
    $DOB = date('Y-m-d', strtotime($_POST["date"]));
    $Gender = $_POST["gen"];
    $Message = $_POST["ans"];

    //Database Connection
    $conn = new mysqli("localhost", "root", "", "Weather");
    if($conn->connect_error){
        die("Connection Failed :".$conn->connect_error);
    }
    
    
    $sql = "INSERT INTO Customer_Details(Name, Email, Phone_Number, Date_of_Birth, Gender, Message) VALUES ('$Name', '$Email', '$Phone_Number', '$DOB', '$Gender', '$Message')";

    $sqlquery = "SELECT * FROM Customer_Details WHERE Email = '$Email'";
    $result = $conn->query($sqlquery);
        
    if ($result->num_rows > 0) {
        echo "<script>
                alert('User already registered! Please try with another Email.');
                window.location.href = 'Form.html';
              </script>";


    } 
    else {
        if ($conn->query($sql) === true) {
            echo "<script>
                    alert('Submitted Successfully');
                    window.location.href = 'Thanks.html';
                 </script>";
        } 
        else {
                echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    //mail

    $to = $Email;
    $subject = "Thank You for Joining Weather Mate!";
    $message = "Dear $Name,

    We wanted to take a moment to express our heartfelt gratitude for choosing Weather Mate as your go-to weather app. We truly appreciate your trust and support.\n
    
    At Weather Mate, our mission is to provide you with accurate and up-to-date weather information, helping you stay prepared and informed about the ever-changing weather conditions. We are delighted that you have found value in our app and made it a part of your daily routine.\n
    
    Your satisfaction is our top priority, and we are continuously working to enhance your experience with new features, improved accuracy, and user-friendly updates. We value your feedback, so please don't hesitate to reach out to us if you have any suggestions or ideas for further improvements.\n
    
    Once again, thank you for choosing Weather Mate. We are honored to be your trusted companion in keeping you informed about the weather. You'll be getting updates intermittently.\n

    Weather Mate - Your Reliable Guide to Every Skies\n

    Warm regards,
    Weather Mate Owner
    Bishwarup Das";
    $from = "myweathermate@gmail.com";
    $header = "From: $from";

    mail($to, $subject, $message, $header);
    
    $conn->close();

 ?>
