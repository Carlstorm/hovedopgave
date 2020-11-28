

let imagePreview = [];

imagePreview = document.getElementsByClassName("image-preview");



class CameraService {

  constructor() {
    this.takepicmode;
    this.canvas;
    this.savedimgurl;
 

  }



  // CAMERA

  Opencamera() {
 

    this.htmlTemplate = `
  

  <section id="camerawrap">
  <canvas id="canvas" style="height:0px"></canvas>
  <video autoplay></video>

  <div id="butwrapcamera">

    <button id="stopcaneraknap" onclick="lukcamera()">Luk</button>

    <button id="tagbilledeknap" onclick="tagbillede()">Tag billede</button>

    <button id="accepterbilledeknap" style="display:none;" onclick="acceptbillede()">Accepter billede</button>

  </div>

  <div id="darkbg"></div>

</section>

  `;

    document.getElementById("modal-content").innerHTML = this.htmlTemplate;

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

    this.htmlTemplate = `
    <div id="imagePreview" class="image-preview">
      <span onclick="onclickCross();" class="close">&times;</span>
      <div id="camereholderDiv"></div>
  <input type="file" id="img" accept="image/*" onchange="previewImage(this.files[0])">
  <div id="profileimagePreview" class="image-preview"></div>
  <button type="button" name="button" onclick="Opencamera()">
    Tag med Webcam
  </button>`;

    document.getElementById("modal-content").innerHTML = this.htmlTemplate;

    this.videoStream.getTracks().forEach(function(track) {

      track.stop();

    });

  }



  // var takepicmode

  tagbillede(canvas) {

    canvas = document.getElementById("canvas");


    if (this.takepicmode != 1) {

      this.video.pause();

      canvas.width = this.video.videoWidth;

      canvas.height = this.video.videoHeight;

      canvas.getContext("2d").drawImage(this.video, 0, 0);

      for (let i = 0; i < imagePreview.length; i++) {

        imagePreview[0].style.background =

          "url(" + canvas.toDataURL("image/webp") + ")";

      }

      //

      this.tagbiledknap.innerHTML = "Nyt billede?";

      this.tagbiledknap.style.background = "#5e4747";

      //accept knap
      document.getElementById("accepterbilledeknap").style.display = "inline-block"


      //

      this.takepicmode = 1;

      console.log(canvas);

      return canvas;


    } else {

      this.video.play();

      this.tagbiledknap.innerHTML = "Tag billede";

      this.tagbiledknap.style.background = "#5e4747";

      this.takepicmode = 2;

       //accept knap
       document.getElementById("accepterbilledeknap").style.display = "none"

    }
 
  }


  acceptbillede(userId, canvas) {
    canvas = document.getElementById("canvas");

    this.profileimagePreviewFunk(canvas.toDataURL("image/webp"));


    this.videoStream.getTracks().forEach(function(track) {

      track.stop();

    });

    this.lukcamera();
    this.saveImg(canvas.toDataURL("image/webp"), userId);
    console.log(canvas + "saved file");

  }



  uploadFileImg(file) {


    let reader = new FileReader();

    reader.onload = () => {

      this.savedimgurl = reader.result;
      console.log(this.savedimgurl);
      this.profileimagePreviewFunk(this.savedimgurl);

    };

    if (file) {

     reader.readAsDataURL(file);


    }
   

  }




  profileimagePreviewFunk(dispic) {

    

    for (let i = 0; i < imagePreview.length; i++) {

      imagePreview[i].style.background = "url(" + dispic + ")";



    }

  }



  saveImg(profileImage, user){

    alert("billede gemt")

    
    firebase.database().ref('/users/' + user.uid).update({img: profileImage});


  }




}



export let savedimgurl;


export default CameraService;

