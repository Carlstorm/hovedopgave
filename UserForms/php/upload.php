<?php 
if(isset($_FILES['file']['name'])){
   // file name
   // $filename = $_FILES['file']['name'];
   $FormName = $_REQUEST['formName'];
   $UserID = $_REQUEST['ID'];
   $temp = explode(".", $_FILES["file"]["name"]);
   $newfilename = $FormName  . '.' . end($temp);

   if (!file_exists('../UserForms/'.$UserID)) {
      mkdir('../UserForms/'.$UserID, 0777, true);
  }

   // Location
   $location = "../UserForms/${UserID}/".$newfilename;

   // file extension
   $file_extension = pathinfo($location, PATHINFO_EXTENSION);
   $file_extension = strtolower($file_extension);

   // Valid extensions
   $valid_ext = array("pdf");

   $response = 0;
   if(in_array($file_extension,$valid_ext)){
      // Upload file
      if(move_uploaded_file($_FILES['file']['tmp_name'],$location)){
         $response = 1;
      } 
   }

   echo $response;
   exit;
}