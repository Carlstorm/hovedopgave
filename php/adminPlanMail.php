<?php

$email = $_REQUEST['email'];
$navn = $_REQUEST['navn'];
$form = $_POST['form'];
$response = 2;

/////
$formData = json_decode($form, true);
// print $formData["køn"];
// print $formData["navn"];

$testemail = $formData["email"];

$recipients = array(
    "webdev@kevinnicholas.eu"// email fra login
    
  );

  $to = implode(',', $recipients); 
  


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
$email = $testemail;



// Message
$message = '

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=320, initial-scale=1" />
  <title>AdminPlanMail</title>
  <style type="text/css" media="screen">


<body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">

    <style>
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
    
    
    <h2>Informationer til Plan</h2>

    
    <p>Hej easyfit her er alle de Informationer i skal bruge til at lave en plan</p>
    
    <table>
      <tr>
        <th>Emne i plan</th>
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
        <td>Fødselsår</td>
        <td>'.$fødselsår.'</td>
      </tr>
      <tr>
        <td>Adresse</td>
        <td>'.$adresse.'</td>
      </tr>
      <tr>
        <td>By</td>
        <td>'.$by.'</td>
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
mail("webdev@kevinnicholas.eu", $subject, $message, implode("\r\n",$headers), $provider);

echo $response;


?>