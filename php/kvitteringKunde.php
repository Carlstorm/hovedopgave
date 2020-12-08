<?php


$form = $_POST['form'];
$response = 1;

/////
$formData = json_decode($form, true);


$testemail = $formData["Email"];

$recipients = array(
    "nicholas.kevin96@gmail.com, $testemail"// email fra login
    
  );

  $to = implode(',', $recipients); 
  


$provider = 'webdev@kevinnicholas.eu';

// Subject
$subject = 'Test af php';



// /// form variabler
$navnKvit = $formData["Navn"];
$email = $testemail;






// Message
$message = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=320, initial-scale=1" />
  <title>Cleave Progress</title>
  <style type="text/css" media="screen">
  
  <head>
      <meta charset="utf-8">
      <title>Invoice fra easyfit</title>
      
      <style>
      .invoice-box {
          max-width: 800px;
          margin: auto;
          padding: 30px;
          border: 1px solid #eee;
          box-shadow: 0 0 10px rgba(0, 0, 0, .15);
          font-size: 16px;
          line-height: 24px;
          color: #555;
      }
      
      .invoice-box table {
          width: 100%;
          line-height: inherit;
          text-align: left;
      }
  
      .signature{
          display: flex;
          flex-wrap: wrap;
          width: 70%;
      }
      
      .invoice-box table td {
          padding: 5px;
          vertical-align: top;
      }
      
      .invoice-box table tr td:nth-child(2) {
          text-align: right;
      }
      
      .invoice-box table tr.top table td {
          padding-bottom: 20px;
      }
      
      .invoice-box table tr.top table td.title {
          font-size: 45px;
          line-height: 45px;
          color: #333;
      }
      
      .invoice-box table tr.information table td {
          padding-bottom: 40px;
      }
      
      .invoice-box table tr.heading td {
          background: #eee;
          border-bottom: 1px solid #ddd;
          font-weight: bold;
      }
      
      .invoice-box table tr.details td {
          padding-bottom: 20px;
      }
      
      .invoice-box table tr.item td{
          border-bottom: 1px solid #eee;
      }
      
      .invoice-box table tr.item.last td {
          border-bottom: none;
      }
      
      .invoice-box table tr.total td:nth-child(2) {
          border-top: 2px solid #eee;
          font-weight: bold;
      }
      
      @media only screen and (max-width: 600px) {
          .invoice-box table tr.top table td {
              width: 100%;
              display: block;
              text-align: center;
          }
          
          .invoice-box table tr.information table td {
              width: 100%;
              display: block;
              text-align: center;
          }
      }
      
      /** RTL **/
      .rtl {
          direction: rtl;
          
      }
      
      .rtl table {
          text-align: right;
      }
      
      .rtl table tr td:nth-child(2) {
          text-align: left;
      }
      </style>
  </head>
  
  <body>
      <div class="invoice-box">
          <table cellpadding="0" cellspacing="0">
              <tr class="top">
                  <td colspan="2">
                      <table>
                          <tr>
                              <td class="title">
                                  <img src="https://kevinnicholas.eu/assets/logo/main.png" style="width:30%; max-width:300px;">
                              </td>
                              
                              <td>
                                  EasyFit<br>
                                  Sendt: January 1, 2015<br>
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              
              <tr class="information">
                  <td colspan="2">
                      <table>
                          <tr>
                              <td>
                                  Saltum, Region Nordjylland
                              </td>
                              
                              <td>
                                  Tlf:  28-85-06123<br>
                            easyfit.kostvejledning@gmail.com
                              </td>
                          </tr>
                      </table>
                  </td>
              </tr>
              
              <tr class="heading">
                  <td>
                     Dine Bestilte planer
                  </td>
                  
                  <td>
                      Antal 
                  </td>
              </tr>
              
              <tr class="details">
                  <td>
                      Kost -og træningsplan
                  </td>
                  
                  <td>
                      1
                  </td>
              </tr>
              
              <tr class="heading">
                  <td>
                      Indhold
                  </td>
                  
                  <td>
                      Pris
                  </td>
              </tr>
              
              <tr class="item">
                  <td>
                      Første betaling
                  </td>
                  
                  <td>
                     1499 Kr
                  </td>
              </tr>
              
              <tr class="item">
                  <td>
                      Pr. Måned
                  </td>
                  
                  <td>
                      1000 Kr
                  </td>
              </tr>
              <tr class="total">
                  <td></td>
                  
                  <td>
                     Total: 2499 Kr
                  </td>
              </tr>
          </table>
  
          <tr class="information">
              <td colspan="2">
                  <table>
                      <tr>
                          <td>
                              <h1>Hej '.$navnKvit.' tak for din bestilling</h1>
                              Du kan se status på din plan inde på din profil, Statusen ændre sig når vi har godkendt og når vi sender dig helt nye personlige plan!
                              
                             <br> Venlig hilsen
                              
                             <br> <b> EasyFit</b>
                          </td>
                          
                      </tr>
                  </table>
              </td>
          </tr>
          <div class="signature">
              <div style="width:50%;transform: translateX(-40%);">
                  <img src="https://kevinnicholas.eu/assets/pradeep.png" style="width:100%;">
              </div>
              <div style="width:50%; transform: translateX(-100%);">
                  <img src="https://kevinnicholas.eu/assets/linda.png" style="width:100%;">
              </div>
          </div>
      </div>
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