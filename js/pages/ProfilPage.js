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
    <div class="adminstration--pageWrap">
    <div class="adminstration--siderbar">
      <div class="adminstration--siderbarforshow anies-slide">
    <div id="profilImage">
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
    <button type="button" name="button" onclick="gembillede()">
    Gem!
   </button>
      </div>

    </div>
      </div>
    </div>
    <div class="adminstration--contentWrap anies">
    <div id="PendingRequest"></div>
    <div id="AcceptedRequest"></div>
    <div id="CompletedRequest"></div>

    </div>
    `
    ContentWrap.setAttribute("id", "ProfilPage");
    ContentWrap.classList.add("page")
    this.ContentWrap = ContentWrap;
  }

  PendingRequest(requestData,user) {

    let htmlTemplate = `
    <div class="RequestProfile">
     
<div class="profilCard">
<div class="profilCard--inner">
<h3>Her kan du se din ${requestData.plan} plan!</h3>
<hr>
<p>${requestData.formName}</p>
<button style="width:200px;><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" download="${requestData.formName}">Download</a></button>
<br>
<button style="width:200px;"><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" target="_blank">Se PDF!</a></button>
<p>Mvh. Easyfit</p>

<hr>
<div class="buttonFlex"> 
<div class="buttonFlex--inner">
<p> <b> Status:</b></p>
</div>
<div class="buttonFlex--inner">
<button  style = "background:yellow"class="buttonPending">pending</button>
</div>
<div class="buttonFlex--inner">
<button class="buttonKontakt">Kontakt</button>
</div>
</div>
</div>
</div>
  </div>
  `
  return htmlTemplate;
  }

  AcceptedRequest(requestData,user) {
    let htmlTemplate = `
    <div class="RequestProfile">
    
<div class="profilCard">
<div class="profilCard--inner">
<h3>Her kan du se DIN ${requestData.Type}!</h3>
<hr>
<p>${requestData.formName}</p>
<button style="width:200px;><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" download="${requestData.formName}">Download</a></button>
<br>
<button style="width:200px;"><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" target="_blank">Se PDF!</a></button>
<p>Mvh. Easyfit</p>

<hr>
<div class="buttonFlex"> 
<div class="buttonFlex--inner">
<p> <b> Status:</b></p>
</div>
<div class="buttonFlex--inner">
<button  style = "background:orange"class="buttonPending">Accepted</button>
</div>
<div class="buttonFlex--inner">
<button class="buttonKontakt">Kontakt</button>
</div>
</div>
</div>
</div>
 </div>
 </div>
  `
  return htmlTemplate;
  }


  CompletedRequest(requestData,user) {
    
    let htmlTemplate = `
    <div class="RequestProfile">
    
<div class="profilCard">
<div class="profilCard--inner">
<h2>Hej navn</h2>
<h3>Her kan du se DIN ${requestData.Type}!</h3>
<hr>
<p>${requestData.formName}</p>
<button style="width:200px;><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" download="${requestData.formName}">Download</a></button>
<br>
<button style="width:200px;"><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" target="_blank">Se PDF!</a></button>
<p>Mvh. Easyfit</p>

<hr>
<div class="buttonFlex"> 
<div class="buttonFlex--inner">
<p> <b> Status:</b></p>
</div>
<div class="buttonFlex--inner">
<button  style = "background:green"class="buttonPending">completed</button>
</div>
<div class="buttonFlex--inner">
<button class="buttonKontakt">Kontakt</button>
</div>
</div>
</div>
</div>
 </div>
 </div>
  `

  return htmlTemplate;
  }


  acceptRequest(requestData,user) {
    `
    <div class="PendingRequestProfile">
      <h2> hej acctedped </h2>
  </div> `

  }

 

  UpdateRequestsPending(requests,user) {
    let htmlTemplate = ""
    if (requests.exists()) {
      document.getElementById("PendingRequest").innerHTML = "";
let dataObject = requests.val();


      for (let [key,value] of Object.entries(dataObject)) {

        htmlTemplate += this.PendingRequest(value, user)
      }
      
    } else {
      htmlTemplate = "<p>Ingen aktive ansøgninger lige nu</p>"
    }
    document.getElementById("PendingRequest").innerHTML = htmlTemplate;
  } 


  
  UpdateRequestsCOMPLETED(requests,user) {
    let htmlTemplate = ""
    if (requests.exists()) {
      document.getElementById("CompletedRequest").innerHTML = "";
let dataObject = requests.val();


      for (let [key,value] of Object.entries(dataObject)) {

        htmlTemplate += this.CompletedRequest(value, user)
      }
      
    } else {
      htmlTemplate = ""
    }
    document.getElementById("CompletedRequest").innerHTML = htmlTemplate;
  } 
  





  UpdateRequestsAccepted(requests,user) {
    let htmlTemplate = ""
    if (requests.exists()) {
      document.getElementById("AcceptedRequest").innerHTML = "";
let dataObject = requests.val();


      for (let [key,value] of Object.entries(dataObject)) {

        htmlTemplate += this.AcceptedRequest(value, user)
      }
      
    } else {
      htmlTemplate = ""
    }
    document.getElementById("AcceptedRequest").innerHTML = htmlTemplate;
  } 
  




  navitem() {
    let Navitem = document.createElement("A")
    Navitem.innerHTML = "ProfilPage"
    Navitem.href = "#ProfilPage";
    Navitem.className = "tabbar--item directanies"
    this.Navitem = Navitem;
  }

  load(user) {


  
    // pending
    document.getElementById("PendingRequests").innerHTML = "<p>Loading...</p>"
    this.onPendingValueChange = this.PendingrequestPath.on('value', (snapshot) => {
      this.UpdateRequestsPending(snapshot,user)
    })

      // accepted
    document.getElementById("AcceptedRequests").innerHTML = "<p>Loading...</p>"
    this.onAcceptedValueChange = this.AcceptedrequestPath.on('value', (snapshot) => {
      if (snapshot.exists()) {
      this.UpdateRequestsAccepted(snapshot,user)
      } else {
        document.getElementById("AcceptedRequests").innerHTML = "<p>Ingen aktive ansøgninger lige nu</p>"
      }
    })

      // completed
    this.onCompletedValueChange = this.CompletedrequestPath.on('value', (snapshot) => {
      if (snapshot.exists()) {
        this.UpdateRequestsCOMPLETED(snapshot,user)
      } else {
        document.getElementById("CompletedRequests").innerHTML = "<p>Ingen Færdige Ansøginger</p>"
      }
    })
 
  }

  init(user) {
  
    document.getElementsByClassName("navbarItems")[0].insertBefore(this.Navitem, document.getElementsByClassName("navbarItems")[0].children[3])
    document.getElementById("root").appendChild(this.ContentWrap)
    this.PendingrequestPath = firebase.database().ref('/PendingRequests/' + user.uid);
    this.AcceptedrequestPath = firebase.database().ref('/AcceptedRequests/'+ user.uid);
    this.CompletedrequestPath = firebase.database().ref('/CompletedRequests/'+ user.uid);
    this.load(user);
  }

  unInit() {
    document.getElementById("navbar").removeChild(this.Navitem)
    document.getElementById("root").removeChild(this.ContentWrap)
    this.PendingrequestPath.off('value', this.onPendingValueChange);
    this.AcceptedrequestPath.off('value', this.onAcceptedValueChange);
    this.CompletedrequestPath.off('value', this.onCompletedValueChange);
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