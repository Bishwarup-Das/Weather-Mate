<?php
    session_start();
    if (!isset($_SESSION['AdminLoginId'])) {
        header("location: Admin.html");
        exit;
    }


    $conn = new mysqli("localhost", "root", "", "Weather");

    if (!$conn) {
        die("Connection Error");
    }

    $query = "select * from Customer_Details";
    $result = mysqli_query($conn, $query);

?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Panel</title>
    <link rel="icon" href="Images/icon.jpeg" type="image/jpeg">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <style>
        body {
            background-color: black;
        }

        #button {
            position: relative;
            right: 3%;
        }

        .navbar-nav .nav-link {
            color: #fff;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
            color: rgb(255, 255, 255);
        }

        #brand {
            color: yellow
        }

        .text {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-primary bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="Images/icon.jpeg" alt="icon" height="40px" width="40px"
                    style="border-radius: 10px;"></a>
            <a class="navbar-brand" id="brand" href="#">Weather Mate</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </div>
    </nav>
    <form method="post">
        <div class="container">
            <div class="row mt-5">
                <div class="col">
                    <div class="card mt-5">
                        <div class="card-header">
                            <h2 class="display-6 text-center">Customer Details</h2>
                        </div>
                        <div class="card-body">
                            <table class="table table-bordered text-center">
                                <tr class="bg-dark text-white">
                                    <th> ID </th>
                                    <th> Name </th>
                                    <th> Email </th>
                                    <th> Phone Number </th>
                                    <th> Date of Birth </th>
                                    <td> Gender </td>
                                    <td> Message </td>
                                </tr>
                                <tr>
                                    <?php

                                        while ($row = mysqli_fetch_assoc($result)) {
                                            ?>
                                            <td>
                                                <?php echo $row['ID']; ?>
                                            </td>
                                            <td>
                                                <?php echo $row['Name']; ?>
                                            </td>
                                            <td>
                                                <?php echo $row['Email']; ?>
                                            </td>
                                            <td>
                                                <?php echo $row['Phone_Number']; ?>
                                            </td>
                                            <td>
                                                <?php echo $row['Date_of_Birth']; ?>
                                            </td>
                                            <td>
                                                <?php echo $row['Gender']; ?>
                                            </td>
                                            <td>
                                                <?php echo $row['Message']; ?>
                                            </td>
                                        </tr>
                                    <?php
                                        }
                                    ?>
                                </tr>
                            </table>
                            <button class="w-40 btn btn-lg btn-outline-dark" name="logout">LOGOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <div class="text-muted text-left small text-warning text">
      Presented by- Bishwarup Das <br>Copyright © 2023 My Company. All rights reserved.
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
<?php
    if (isset($_POST['logout'])) {
        unset($_SESSION['AdminLoginId']);
        session_destroy();
        header("location: Admin.html");
        exit;
    }
 ?>        
</body>
</html>