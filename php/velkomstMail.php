<?php
header('Content-Type: text/html; charset=utf-8'); 
// /// form variabler
$form = $_POST['form'];


$response = 4;

/////json
$formData = json_decode($form, true);

$Navn = $formData["Navn"];
$testemail = $formData["Email"];


$recipients = array(
  "nicholas.kevin96@gmail.com, $testemail"// email fra login
  
);

$to = implode(',', $recipients); 



$provider = 'webdev@kevinnicholas.eu';

// Subject
$subject = 'Test af php';



// Message
$message = '

<!DOCTYPE html>
<html lang="da">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body class="body" style="padding:0; margin:0; display:block; width: 100%; background:#fffffff7; -webkit-text-size-adjust:none">
    <section>
          <div class="hero-text" style="text-align:center;position: relative;width:100%;transform:translate(0,0);color:rgb(0, 0, 0);">
            <h1 style=" text-align:center; font-size:50px; display: block;"> Hej! '.$Navn.' Velkommen til team EasyFit!</h1>
            <p style="  transform:translate(-0%,-0%); font-family:calibri;font-size: 22px; display: block; font-weight: bold;">Vi er super glade for at have dig med på holdet!</p>
            <p style="  transform:translate(-0%,-0%);font-family:calibri;font-size: 20px; display: block; font-weight: bold;">Du kan se eller oprette din nye profil her!</p>
            <button style=" transform:translate(-5%,-0%); font-size:large;border:none; border-radius:25px; outline: 0;display: inline-block;padding: 10px 25px;color: black;background-color: #d0b85e;text-align: center;cursor: pointer; margin-bottom: 3%;"><a href="https://kevinnicholas.eu/#ProfilPage" style="text-decoration: none; color:black;"><b>Se Profil</b></a></button>
            <h1  style=" font-family:calibri;transform:translate(-0%,-0%);font-family:calibri;font-size: 20px; display: block; font-weight:bolder; "> Hos EasyFit tilbyder vi dig altid</h1>
                <table style="width:40%; margin-left:auto; margin-right:auto; margin-top:40px; position: relative; margin-bottom: 200px;">
                <tr>
                <td style=" height:400px; font-family:calibri;border-radius: 10px; width:50%; background-color: yellow; background-image: url(https://kevinnicholas.eu/assets/forside.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;position: relative;">
                    <p style=" font-family:calibri; display: block;font-size: 28px; text-align:center;position: relative;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);color:rgb(255, 254, 254);">Fleksible og Personlige <br>Træningsplaner</p></td>
                <td style=" height:400px; font-family:calibri;border-radius: 10px; width:50%; background-color: yellow; background-image: url(https://kevinnicholas.eu/assets/imgs/mad.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;position: relative;">
                    <p style=" transform:translate(0px, -50px);font-family:calibri; display: block;font-size: 28px; text-align:center;position: relative;;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);color:rgb(255, 254, 254);">Varierede og Personlige<br> Kosplaner</p></td>
                </tr>
                </table>
            
          </div> 
         
    </section>
    <div class="footer" style=" position: fixed; display:inline-block; left: 0;bottom: 0;width: 100%;background-color: rgb(14, 13, 13);color: white;text-align: left; height: 100px;">
    <table style="width: 90%; border-collapse: collapse; text-align:center;">
    <tr>
      <th><p style="font-family:calibri; color:white; text-align:left margin-left:5%; font-size:20px;"><b>Kontakt os gerne! </b><br> <p style="color:#d0b85e!important;">"easyfit.kostvejledning@gmail.com"</p></p></th>
      
      <th>
       <p style="font-family:calibri margin-bottom:-2%; color:white; font-size:18px;"><b>Følg os på Facebook!</b></p>
      <a style="float-right; margin-right:5%;" href="https://www.facebook.com/easyfit.kostvejledning" style="text-decoration:none;">
      <img src="https://kevinnicholas.eu/assets/imgs/facebook.png" height="40px" width="40px"/></a>
      </th>
    </tr>
    <tr>    
  </table>
        
      </div>
</body>
</html>


';

// To send HTML mail, the Content-type header must be set

    $headers = array(
      "From: webdev@kevinnicholas.eu",
      'Content-type: text/html; charset=uft-8'
  );

  //$headers = "From: webdev@kevinnicholas.eu\r\n";
  

// send
mail($to, $subject, $message, implode("\r\n",$headers), $provider);

echo $response;


?>