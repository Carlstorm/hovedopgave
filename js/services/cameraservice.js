

let imagePreview = [];




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



  lukcamera(img) {



    this.htmlTemplate = `
    <div id="imagePreview" class="image-preview">
      <span onclick="onclickCross();" class="close">&times;</span>
      <div id="camereholderDiv"></div>
  <input type="file" id="img" accept="image/*" onchange="previewImage(this.files[0])">
  <div id="profileimagePreview" class="image-preview" style="hieght:400px"></div>
  <button type="button" name="button" onclick="Opencamera()">
    Tag med Webcam
  </button>

  <button type="button" name="button" onclick="gembillede();">
  Gem!
 </button>`;

    document.getElementById("modal-content").innerHTML = this.htmlTemplate;

    document.getElementById("profileimagePreview").style.background = "url(" + img + ")";
    document.getElementById("profileimagePreview").style.height = "400px";

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
      this.savedimgurl = canvas.toDataURL("image/webp")

      for (let i = 0; i < imagePreview.length; i++) {

        imagePreview[i].style.background =

          "url(" + this.savedimgurl + ")";

      }

      //

      this.tagbiledknap.innerHTML = "Nyt billede?";

      this.tagbiledknap.style.background = "#5e4747";

      //accept knap
      document.getElementById("accepterbilledeknap").style.display = "inline-block"


      //

      this.takepicmode = 1;


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


  acceptbillede(canvas) {


    canvas = document.getElementById("canvas");

    this.profileimagePreviewFunk(canvas.toDataURL("image/webp"));


    this.videoStream.getTracks().forEach(function(track) {

      track.stop();

    });

   
    this.lukcamera(canvas.toDataURL("image/webp"));
    

    return  this.savedimgurl;
    
  

  

  }






  uploadFileImg(file) {
    console.log(file)
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


  
  Gemurl(userId){

        this.saveImg(userId);
      }



  saveImg(user){

    console.log(user.uid);


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

