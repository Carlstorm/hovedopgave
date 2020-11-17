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
    
    <table>
      <tr>
        <th>Emne i kontaktform</th>
        <th>Valgt</th>
      </tr>
      <tr>
        <td>Navn</td>
        <td>'.$navnKvit.'</td>
      </tr>
      <tr>
        <td>Køn</td>
        <td>'.$køn.'</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>'.$email.'</td>
      </tr>
    </table>
    
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