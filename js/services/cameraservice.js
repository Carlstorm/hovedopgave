

let imagePreview = [];




class CameraService {

  constructor() {
    this.takepicmode;
    this.canvas;
    this.savedimgurl;
 

  }



  // CAMERA

  Opencamera() {
    document.getElementById("video").style.display = "block";

    document.getElementById("btn-change").innerHTML = "";

    this.htmlTemplate = `
    <div class="uploadwrap">
    <input class="uploadinput" type="file" name="file" id="img" accept="image/*" onchange="previewImage(this.files[0])" hidden>
      <label for="img"><p>Vælg fil</p></label>
    </div>
    <button class="popupFormWrap--ImageContent-Kamerabut" id="tagbilledeknap" onclick="tagbillede()">Tag billede</button>
    </div>
    <div class="popupFormWrap--ImageContent-UploadBut" onclick="gembillede()"><p>Updater!</p></div>




  `;

    document.getElementById("btn-change").innerHTML = this.htmlTemplate;

    this.video = document.querySelector("video");

    this.tagbiledknap = document.querySelector("#tagbilledeknap");



    let constraints = {

      video: true

    };

    // let stream

    // let tracks

    this.videoStream;

    navigator.mediaDevices.getUserMedia(constraints).then(stream => {

      this.videoStream = stream;

      this.video.srcObject = this.videoStream;

    });


  }



  lukcamera() {

document.getElementById("btn-change").innerHTML = "";

    this.htmlTemplate = `
      <div class="uploadwrap">
      <input class="uploadinput" type="file" name="file" id="img" accept="image/*" onchange="previewImage(this.files[0])" hidden>
        <label for="img"><p>Vælg fil</p></label>
      </div>
      <div onclick="Opencamera()"><p class="popupFormWrap--ImageContent-Kamerabut">Kamera</p></div>
      </div>
      <div class="popupFormWrap--ImageContent-UploadBut" onclick="gembillede()"><p>Updater!</p></div>
 
 
 `;

    
 document.getElementById("btn-change").innerHTML = this.htmlTemplate;

    //document.getElementById("profileimagePreview").style.background = "url(" + img + ")";
    //document.getElementById("profileimagePreview").style.height = "400px";

    
   //finde video track og stop det hvis det er til stede
   var element = document.getElementById("video");
 
   if(typeof(element) != 'undefined' && element != null){
      
    this.videoStream.getTracks().forEach(function(track) {

      track.stop();


    });
   } 

  

  }

 



  // var takepicmode

  tagbillede(canvas) {
    let imagePreview = document.getElementsByClassName("image-preview");

    canvas = document.getElementById("canvas");


    if (this.takepicmode != 1) {

      this.video.pause();

      canvas.width = this.video.videoWidth;

      canvas.height = this.video.videoHeight;

      canvas.getContext("2d").drawImage(this.video, 0, 0);
      this.savedimgurl = canvas.toDataURL("image/webp")

      this.profileimagePreviewFunk(imagePreview);

    

      for (let i = 0; i < imagePreview.length; i++) {

        imagePreview[i].style.background =

          "url(" + this.savedimgurl + ")";

      }

      //

      this.tagbiledknap.innerHTML = "Nyt billede?";

      this.tagbiledknap.style.background = "#5e4747";




      //

      this.takepicmode = 1;


      return canvas;


    } else {

      this.video.play();

      this.tagbiledknap.innerHTML = "Tag billede";

      this.tagbiledknap.style.background = "#5e4747";

      this.takepicmode = 2;

  

    }
   
 
  }


  acceptbillede() {

    this.lukcamera();
 
  
    return  this.savedimgurl;
    
  

  

  }






  uploadFileImg(file) {
    
    document.getElementById("video").style.display = "none";
   // console.log(file)
    let imagePreview = document.getElementsByClassName("image-preview");
    let reader = new FileReader();

    reader.onload = () => {
      this.savedimgurl = reader.result;
      this.profileimagePreviewFunk(imagePreview);

    };

    if (file) {

     reader.readAsDataURL(file);


    }
   

  }



  profileimagePreviewFunk(imagePreview) {
    for (let i = 0; i < imagePreview.length; i++) {

      imagePreview[i].style.background = "url(" + this.savedimgurl + ")";

    }

  }


  
  Gemurl(userId)
  {
        this.saveImg(userId);
       this.acceptbillede();
      }



  saveImg(user){

    //console.log(user.uid);

    alert("billede gemt")

console.log(this.savedimgurl);
    

//update billede
    firebase.database().ref('/users/' + user.uid).update({img: this.savedimgurl});

    //hent nye billede


    firebase.database().ref('/users/' + user.uid).once("value", (snapShot) => {snapShot.img

      let userImg =  snapShot.val();

      document.getElementById("profilImage").style.background = "url(" + userImg.img + ")";


    });


  }


}



export let savedimgurl;


export default CameraService;

