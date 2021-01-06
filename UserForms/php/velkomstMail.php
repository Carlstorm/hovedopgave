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
                    <p style=" font-family:calibri; display: block;font-size: 28px; text-align:center;position: relative;;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);color:rgb(255, 254, 254);">Varierede og Personlige<br> Kosplaner</p></td>
                </tr>
                </table>
            
          </div> 
         
    </section>
    <div class="footer" style=" position: fixed; display:inline-block; left: 0;bottom: 0;width: 100%;background-color: rgb(14, 13, 13);color: white;text-align: center; height: 100px;">
        <p style=" font-family:calibri; display: block;font-size: 15px; text-align:center;position:relative;width:100%;top:0%;left:-30%; color:rgb(255, 255, 255);"><b>Kontakt os gerne </b><br> easyfit.kostvejledning@gmail.com</p>
        <p style=" font-family:calibri; transform:translate(-0%,-200%);display: block;font-size: 15px; text-align:center;position:relative;width:15%;top:50%;left:70%; color:rgb(255, 255, 255);"> <b>Følg os på Facebook </b><br> Kom endelig ind på vores facebookside og sig hej!</p>
        <a href="https://www.facebook.com/easyfit.kostvejledning" style="text-decoration:none;"><p style=" height:30px; width: 30px; transform:translate(76vw,-230%); background-image: url(https://kevinnicholas.eu/assets/imgs/facebook.png);background-position:center;background-repeat:no-repeat;background-size:cover;position: absolute;"></p></a> 
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