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
<body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
    <section>
        <div class="hero-image" style="background-image: url(https://kevinnicholas.eu/assets/forside.jpg);height:100vh;background-position:center;background-repeat:no-repeat;background-size:cover;position: relative;">
          <div class="hero-text" style="text-align:center;position:absolute;width:100%;top:50%;left:50%;transform:translate(-50%,-50%);color:white;">
            <h1 style="font-size:50px"> Hej! '.$Navn.' Velkommen til team EasyFit!</h1>
            <p style="font-size: 25px;">Vi er super glade for at have dig med på holdet!</p>
            <p style="font-size: 25px;">Se eller oprette dine nye profil her!!</p>
            
            <button style="border: none;outline: 0;display: inline-block;padding: 10px 25px;color: black;background-color: #a38435;text-align: center;cursor: pointer;"><a href="https://kevinnicholas.eu/#ProfilPage"><b>Se Profil</b></a></button>
          </div>
        </div>
    </section>

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