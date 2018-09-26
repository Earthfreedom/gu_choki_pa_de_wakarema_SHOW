<?php

$RoomID = $_GET['RoomID'];           


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>@import url(https://fonts.googleapis.com/css?family=Righteous);</style>
    <link rel="stylesheet" href="css/styles.css">

    <title></title>
</head>
<body>

<div id="wrap">

<h1 data-shadow="What's Your Hand?"></h1>

<div class=form-box>
        <div class= name style="font-size: 30px;font-weight: bold; color:#ffd700;" >
            名前を入れてね！
            <input type="text" id="username" style="font-size: 30px;border: solid 6px #ffd700;margin-right: 3px;">
            <button id="send" style="font-size: 23px;border: solid 6px #ffd700;margin-right: 3px;color:#ffd700;font-weight: bold;">送信</button>
        </div>


        


    </div>
    
    <div id="result"><h1>Your team is...</h1></div>
    
    <div class="loader">Loading...</div>

    

    

    


    <div id="output"></div>
<input type="hidden" name="room_id" value="<?= $RoomID; ?>" id="room_id">
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- 以下Firebase -->

 <!-- Firebase App is always required and must be first -->
<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-app.js"></script>

<!-- Add additional services you want to use -->
<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-firestore.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-functions.js"></script>
<script src="js/user.js"></script>
</body>
<style>
form-box{
    
}

username{
    border:0;
    padding:10px;
    font-size:1.3em;
    font-family:Arial, sans-serif;
    color:#aaa;
    border:solid 5px #ccc;
    margin:0 0 20px;
    width:300px;
}




</style>
</html>