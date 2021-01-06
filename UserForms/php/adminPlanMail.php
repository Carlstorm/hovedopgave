<?php

header('Content-Type: text/html; charset=utf-8'); 
//$email = $_REQUEST['email'];
//$navn = $_REQUEST['navn'];
$form = $_POST['form'];
$response = 2;

/////
$formData = json_decode($form, true);
//print $formData;
//print $formData['navn'];



// /// form variabler
$Køn = $formData["Køn"];
$By = $formData["By"];
$navnKvit = $formData["Navn"];
$Adresse = $formData["Adresse"];
$Fødselsår = $formData["Alder"];
$Andet = $formData["Andet"];
$BmiHøjde = $formData["BmiHøjde"];
$BmiVægt = $formData["BmiVægt"];
$KostKrav = $formData["KostKrav"];
$Sygdomme = $formData["Sygdomme"];
$Tlf = $formData["Tlf"];
$TrænningErfaring = $formData["TrænningErfaring"];
$TrænningHyppighed = $formData["TrænningHyppighed"];
$Plan = $formData["Plan"];
$Type = $formData["Type"];

$email = $testemail;


$testemail = $formData["Email"];

$recipients = array(
    "webdev@kevinnicholas.eu"// email admin
    
  );

  $to = implode(',', $recipients); 
  


// mail('webdev@kevinnicholas.eu', 'the subject', 'the message',
//    'mailout.one.com');

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
  <title>AdminPlanMail</title>

  <body class="body" style="padding:0; margin:0; display:block; background:#ffffff; -webkit-text-size-adjust:none">

  
  <h2>Informationer til Plan</h2>

  
  <p>Hej easyfit her er alle de Informationer i skal bruge til at lave en plan</p>
  
  <table style="font-family: arial, sans-serif;border-collapse: collapse;width: 50%;">
    <tr>
      <th style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Emne i plan</th>
      <th style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Valgt</th>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Navn</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$navnKvit.'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Køn</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Køn.'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Fødselsår</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Fødselsår.'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Adresse</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Adresse.'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Mail</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$testemail.'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Telfon</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Tlf.'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Plan</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Plan.'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Type</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Type.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">TræningErfaring</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$TrænningErfaring.'</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">TræningHyppighed</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$TrænningHyppighed.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Sygdomme</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Sygdomme.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Kostkrav</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$KostKrav.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Vægt</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$BmiVægt.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Højde</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$BmiHøjde.'</td>
    </tr>
     <tr>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">Andet</td>
      <td style="border: 1px solid #dddddd;text-align: left;padding: 8px;">'.$Andet.'</td>
    </tr>
    
    
  </table>
  
  </body>
  

';

// To send HTML mail, the Content-type header must be set

    $headers = array(
      "From: webdev@kevinnicholas.eu",
      "Content-type: text/html; charset=uft-8"
  );

  //$headers = "From: webdev@kevinnicholas.eu\r\n";
  

// send
mail("nicholas.kevin96@gmail.com", $subject, $message, implode("\r\n",$headers), $provider);

echo $response;


?>