<?php

header('Content-Type: text/html; charset=utf-8'); 
$form = $_POST['form'];
$response = 3;

//json decoder
$formData = json_decode($form, true);


// /// form variabler
$Køn = $formData["Køn"];
$Navn = $formData["Navn"];
$testemail = $formData["Email"];

$recipients = array(
    "Nicholas.kevin96@gmail.com, $testemail"// email fra login
    
  );

  $to = implode(',', $recipients); 
  


$provider = 'webdev@kevinnicholas.eu';

// Subject
$subject = 'Test af php';



// Message
$message = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=320, initial-scale=1" />
  <title>Kontakt fra Easyfit.dk</title>
  <style type="text/css" media="screen">
  
  

<body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">
 
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 50%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {
      background-color: #dddddd;
    }
    </style>
    </head>
    <body>
    
    <h2>Kontakt fra Easyfit.dk</h2>

    
    <p>Hej easyfit her er alle informationer i skal bruge for at kontakte personen</p>
    
    <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 50%;">
      <tr>
        <th>Emne i kontaktform</th>
        <th>Valgt</th>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Køn</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Køn.'</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Navn"</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Navn.'</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Email"</td>
        <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$testemail.'</td>
      </tr>
    </table>
    
    </body>
    </html>
    



';

// To send HTML mail, the Content-type header must be set

    $headers = array(
      "From: webdev@kevinnicholas.eu",
      "Content-type: text/html; charset=uft-8"
  );

  

// send
mail($to, $subject, $message, implode("\r\n",$headers), $provider);

echo $response;


?>