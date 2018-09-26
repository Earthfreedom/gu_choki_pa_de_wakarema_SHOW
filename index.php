
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/indexstyles.css">
    <title>わかれまSHOW！</title>
</head>
<body>
<div id="wrap">

<h1 data-shadow="Gu-Choki-Pa DE wakarema">SHOW!</h1>

<div class=form-box>
        <div>
            
            <!-- 分かれまSHOW!タイトル：
            <input type="text" id="username"> -->

        </div>

          <div class="button-box">
              QRコードを発行する</div>

        <div class="button-box2" style="display:none">わかれまSHOW!<br>
        START</div>


        


    </div>



<div id="output" style="display: flex;;justify-content: center;"></div>

<div id="qrcode"></div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!-- Firebase App is always required and must be first -->
    <script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-app.js"></script>

    <!-- Add additional services you want to use -->
    <script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-messaging.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.1/firebase-functions.js"></script>
    <script src="js/jquery.qrcode.min.js"></script>
    <script src="js/main.js"></script>

</body>
</html>

<style>

/*button*/

.button-box{
    padding: 10px;
    font-size: 21px;
    font-weight: bold;
	color: white;
	height: 60px;
	width: 300px;
	margin: 0 auto;
	text-align: center;
	background-color: #ffd700;
	box-shadow: 0px 10px #ccad00;
	cursor:pointer;
	margin-bottom: 48px;
	transition: .3s;

}

.button-box:active{
	background: #ccad00;
	box-shadow:none;
	position: relative;
	top:6px;
	left:10px;	
}
 
  /*ホバー時に透明度50%*/
.button-box:hover {
	opacity: 0.5;
  }

.button-box2{
    padding: 10px;
    font-size: 21px;
    font-weight: bold;
	color: white;
	height: 60px;
	width: 300px;
	margin: 0 auto;
	text-align: center;
	background-color: #00CC00;
	box-shadow: 0px 10px #009900;
	cursor:pointer;
	margin-bottom: 48px;
	transition: .3s;

}

.button-box2:active{
	background: #009900;
	box-shadow:none;
	position: relative;
	top:6px;
	left:10px;	
}
 
  /*ホバー時に透明度50%*/
.button-box2:hover {
	opacity: 0.5;
  }  

.hidden{
    display: none;
}



</style>