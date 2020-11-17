<?php

$email = $_REQUEST['email'];
$navn = $_REQUEST['navn'];
$form = $_POST['form'];
$response = 1;

/////
$formData = json_decode($form, true);
// print $formData["køn"];
// print $formData["navn"];

$testemail = $formData["email"];

$recipients = array(
    "webdev@kevinnicholas.eu, $testemail"// email fra login
    
  );

  $to = implode(',', $recipients); 
  
print $to;



// mail('webdev@kevinnicholas.eu', 'the subject', 'the message',
//    'mailout.one.com');

$provider = 'webdev@kevinnicholas.eu';

// Subject
$subject = 'Test af php';


// /// form variabler
$køn = $formData["køn"];
$by = $formData["by"];
$navnKvit = $formData["navn"];
$adresse = $formData["adresse"];
$fødselsår = $formData["fødselsår"];



// Message
$message = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=320, initial-scale=1" />
  <style type="text/css" media="screen">
  <title>Velkommen</title>
 
  


<body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">

    .hero-image {
          background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://kevinnicholas.eu/assets/forside.jpg");
          height: 80vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }
        
        .hero-text {
          text-align: center;
          position: absolute;
          width:50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
        }
        
        .hero-text button {
          border: none;
          outline: 0;
          display: inline-block;
          padding: 10px 25px;
          color: black;
          background-color:  #a38435;
          text-align: center;
          cursor: pointer;
        }
        
        .hero-text button:hover {
          background-color: #dcb34c;
          color: white;
        }
    </style>
    
    
    <section>
        <div class="hero-image">
          <div class="hero-text">
            <h1 style="font-size:50px">Velkommen til team EasyFit!</h1>
            <p>Se dine nye profil her!</p>
            <button><b>Se Profil</b></button>
          </div>
        </div>
        <p>Page Content..</p>
    </section>
    
    </body>
    </html>
    





';

// To send HTML mail, the Content-type header must be set

    $headers = array(
      "From: webdev@kevinnicholas.eu",
      'Content-type: text/html; charset=uft-8',
      'MIME-Version: 1.0'
  );

  //$headers = "From: webdev@kevinnicholas.eu\r\n";
  

// send
mail($to, $subject, $message, implode("\r\n",$headers), $provider);

echo $response;


?>