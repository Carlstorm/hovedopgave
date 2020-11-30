export default class ProfilPage {
  constructor() {
    this.Navitem
    this.ContentWrap
    this.requestPath
    this.completedRequestPath
    this.onValueChange
    this.onValueChangeCompleted
    this.navitem()
    this.contentWrap()
  }
  
  contentWrap() {
    let ContentWrap = document.createElement("SECTION")
    ContentWrap.innerHTML = `
    <div id="userdata"></div> 
    `
    ContentWrap.setAttribute("id", "ProfilPage");
    ContentWrap.classList.add("page")
    this.ContentWrap = ContentWrap;
  }

  CompletedRequest(requestData, userID) {
    document.getElementById("userdata").innerHTML = `<p>${requestData.request}</p>
    <a href="./UserForms/${userID}.pdf" target="_blank">PDF FORM HER!</a>
    `
  }

  // UpdateStates(requests, userID) {
  //   if (requests) {
  //     let requestData = requests.val();
  //         this.CompletedRequest(requestData, userID)
  //   } else {
  //     document.getElementById("userdata").innerHTML = "ingen ansøgninger"
  //   }
  // } 

  showRequests(ArrayMerged, user) {
    document.getElementById("userdata").innerHTML = ""
    let htmlTemplate = "";
    ArrayMerged.map(res => {
      if (res.responseState) {
        htmlTemplate += `
        <div class="requestElement">
        <div class="profilFlex">
        <div class="profilFlex--inner-1">
        <div class="profilImage">
        <img class="plusButton" onclick="onclickPlus();" src="./assets/icons/plus.svg"></img>
        </div>
        <div id="imageModal" class="modal">
          <div class="modal-content" id="modal-content">
            <span onclick="onclickCross();" class="close">&times;</span>
            <div style="height:400px" id="profileimagePreview" class="image-preview"></div>
            <div id="camereholderDiv"></div>
        <input type="file" id="img" accept="image/*" onchange="previewImage(this.files[0])">
        <button type="button" name="button" onclick="Opencamera()">
          Tag med Webcam
        </button>
        <button type="button" name="button" onclick="acceptbillede();">
        Gem!
       </button>
          </div>
        
        </div>
        <h2> ${user.displayName}'s Profil!</h2>
        </div>

        <div class="profilFlex--inner">
        <div class="profilCard">
        <h2>Hej ${user.displayName}</h2>
        <h3>Her kan du se DIN ${res.Type}!</h3>
        <hr>
        <p>${res.formName}</p>
        <p>${res.request}</p>
        <button style="width:200px;><a href="./UserForms/${user.uid}/${res.formName}.pdf" download="${res.formName}">Download</a></button>
        <br>
        <button style="width:200px;"><a href="./UserForms/${user.uid}/${res.formName}.pdf" target="_blank">Se PDF!</a></button>
        <p>Mvh. Easyfit</p>

        <hr>
        <div class="buttonFlex"> 
        <div class="buttonFlex--inner">
        <p> <b> Status:</b></p>
        </div>
        <div class="buttonFlex--inner">
        <button  style = "background:green"class="buttonPending">Klar</button>
        </div>
        <div class="buttonFlex--inner">
        <button class="buttonKontakt">Kontakt</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
      } else {
        htmlTemplate += `
        <div class="requestElement">
        <div class="profilFlex">
        <div class="profilFlex--inner-1">
        <div class="profilImage">
        <img class="plusButton" onclick="onclickPlus();" src="./assets/icons/plus.svg"></img>
        </div>
        <div id="imageModal" class="modal">
          <div class="modal-content" id="modal-content">
            <span onclick="onclickCross();" class="close">&times;</span>
            <div style="height:400px" id="profileimagePreview" class="image-preview"></div>
            <div id="camereholderDiv"></div>
        <input type="file" id="img" accept="image/*" onchange="previewImage(this.files[0])">
        <button type="button" name="button" onclick="Opencamera()">
          Tag med Webcam
        </button>
        <button type="button" name="button" onclick="saveImg();">
         Gem!
        </button>
     
          </div>
        
        </div>
        <h2> ${user.displayName}'s Profil!</h2>
        </div>

        <div class="profilFlex--inner">
        <div class="profilCard">
        <h2>Hej ${user.displayName}</h2>
        <h3>Her kan du se DIN ${res.Type}!</h3>
        <hr>
        <p>${res.formName}</p>
        <p>${res.request}</p>
        <p>WAITING FOR ANSWER....</p>
        <p>Din status ændres når planen er klar</p>
        <p>Mvh. Easyfit</p>

        <hr>
        <div class="buttonFlex"> 
        <div class="buttonFlex--inner">
        <p> <b> Status:</b></p>
        </div>
        <div class="buttonFlex--inner">
        <button class="buttonPending">Pending</button>
        </div>
        <div class="buttonFlex--inner">
        <button class="buttonKontakt">Kontakt</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
      }
    })
    document.getElementById("userdata").innerHTML = htmlTemplate;
  }

  UpdateStates(requests, user) {
    console.log(user.uid) 
    this.completedRequestPath.once('value', (snapshot) => {
      let objComp = snapshot.val();
      let objPend = requests.val();
      let ArrayCompleted, ArrayPending;
      if (snapshot.exists()) {
      ArrayCompleted = Object.keys(objComp).map((key) => objComp[key]);
      } else {
        ArrayCompleted = []
      }
      if (requests.exists()) {
      ArrayPending = Object.keys(objPend).map((key) => objPend[key]);
    } else {
      ArrayPending = []
    }
      let ArrayMerged = ArrayPending.concat(ArrayCompleted)
      if (ArrayMerged.length > 0) {
        this.showRequests(ArrayMerged, user);
      } else {
        document.getElementById("userdata").innerHTML = "ingen ansøgninger"
      }
    })
  } 


  navitem() {
    let Navitem = document.createElement("A")
    Navitem.innerHTML = "ProfilPage"
    Navitem.href = "#ProfilPage";
    Navitem.className = "tabbar--item directanies"
    this.Navitem = Navitem;
  }

  load(user) {
    console.log(user)
    document.getElementById("userdata").innerHTML = "<p>Loading...</p>"
    this.onValueChange = this.requestPath.on('value', (snapshot) => {
      this.UpdateStates(snapshot, user)
    })
  }

  init(user) {
    document.getElementsByClassName("navbarItems")[0].insertBefore(this.Navitem, document.getElementsByClassName("navbarItems")[0].children[3])
    console.log(this.Navitem, document.getElementsByClassName("navbarItems")[0])
    document.getElementById("root").appendChild(this.ContentWrap)
    this.requestPath = firebase.database().ref('/PendingRequests/'+ user.uid);
    this.completedRequestPath = firebase.database().ref('/CompletedRequests/'+ user.uid);
    this.load(user)
  }

  unInit() {
    document.getElementById("navbar").removeChild(this.Navitem)
    document.getElementById("root").removeChild(this.ContentWrap)
    this.requestPath.off('value', this.onValueChange);
  }


////modal camera

onclickPlus = function() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "block";
}


onclickCross = function() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";
}


onclickWindowClose = function(event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



}



//////