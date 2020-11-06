class Upload {
    constructor() {
    }

    uploadPDF(userId, formName, Fileindex, userdata) {
    var files = document.getElementById(Fileindex).files;
    if(files.length > 0 ){
 
       var formData = new FormData();
       formData.append("ID", ""+userId+"");
       formData.append("formName", ""+formName+"");
       formData.append("file", files[0]);
 
       var xhttp = new XMLHttpRequest();
 
       // Set POST method and ajax file path
       xhttp.open("POST", "php/upload.php", true);
 
       // call on request changes state
       xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
 
            var response = this.responseText;
            if(response == 1){
               alert("Upload successfully.");
               userdata.MoveForm(userId, formName)
            }else{
               alert("File not uploaded.");
            }
          }
       };
 
       // Send request with data
       xhttp.send(formData);
 
    }else{
       alert("Please select a file");
    }
}
}

export default Upload;
