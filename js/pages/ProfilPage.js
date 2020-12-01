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
      <div class="plusButton" onclick="onclickPlus();" >
       <p>+</p>
      </div>
    </div>
    <div class="siderUserInfo">
    <p id="SideDisplayName">Navn</p>
    <p id="SideDisplayEmail">Email</p>
    <p id="SideDisplayTlf">Tlf:</p>
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


    <div>
    <div class="adminstration--headerwrap adminstration--headerwrap-shown" onclick="toggleShowHide()">
    <div class="adminstration--headerwrap-main">
    <h3 id="PendingRequestsHeading">Planer</h3>
    <div><img src="./assets/icons/arrow.svg" ></div> 
    </div>
    <div class="adminstration--headerwrap-bottomBar" ></div>
    </div>
    <div class="adminstration--contentContainer adminstration--contentContainer-shown" id="CompletedRequest"></div> 
    </div>
    <br>


    <div>
    <div class="adminstration--headerwrap adminstration--headerwrap-shown" onclick="toggleShowHide()">
    <div class="adminstration--headerwrap-main">
    <h3 id="AcceptedRequestsHeading">Godkendte Ansøgninger</h3>
    <div><img src="./assets/icons/arrow.svg" ></div> 
    </div>
    <div class="adminstration--headerwrap-bottomBar" ></div>
    </div>
    <div class="adminstration--contentContainer adminstration--contentContainer-shown" id="AcceptedRequest"></div> 
    </div>
    <br>


    <div>
    <div class="adminstration--headerwrap adminstration--headerwrap-shown" onclick="toggleShowHide()">
    <div class="adminstration--headerwrap-main">
    <h3 id="AcceptedRequestsHeading">Ansøgninger</h3>
    <div><img src="./assets/icons/arrow.svg" ></div> 
    </div>
    <div class="adminstration--headerwrap-bottomBar" ></div>
    </div>
    <div class="adminstration--contentContainer adminstration--contentContainer-shown" id="PendingRequest"></div> 
    </div>
    <br>
    </div>

    
    </div>
    `
    ContentWrap.setAttribute("id", "ProfilPage");
    ContentWrap.classList.add("page")
    this.ContentWrap = ContentWrap;
  }

  PendingRequest(requestData,user) {
    let htmlTemplate = `
    <div class="PendingRequestElementWrap">
      <div id="${requestData.id}/${requestData.formName}/" class="PendingRequests PendingRequestElement" onclick="popupForm()">
      <div class="PendingRequestElement--header">
        <div>
        <p class="PendingRequestElement-heading1">${requestData.request.plan.replace('&', '/')}</p>
        <p class="PendingRequestElement-heading2">${requestData.request.type}</p>
        <p class="PendingRequestElement-heading3">${requestData.date}</p>
        </div>
        </div>
        <div class="PendingRequestElement-contentWrap-special">
            <img src="./assets/icons/clock.svg">
            <p>Afventer svar</p>
        </div>
      </div>
    </div>
  </div>
  `
  return htmlTemplate;

//     let htmlTemplate = `
//     <div class="RequestProfile">
     
// <div class="profilCard">
// <div class="profilCard--inner">
// <h3>Her kan du se din ${requestData.plan} plan!</h3>
// <hr>
// <p>${requestData.formName}</p>
// <button style="width:200px;><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" download="${requestData.formName}">Download</a></button>
// <br>
// <button style="width:200px;"><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" target="_blank">Se PDF!</a></button>
// <p>Mvh. Easyfit</p>

// <hr>
// <div class="buttonFlex"> 
// <div class="buttonFlex--inner">
// <p> <b> Status:</b></p>
// </div>
// <div class="buttonFlex--inner">
// <button  style = "background:yellow"class="buttonPending">pending</button>
// </div>
// <div class="buttonFlex--inner">
// <button class="buttonKontakt">Kontakt</button>
// </div>
// </div>
// </div>
// </div>
//   </div>
//   `
//   return htmlTemplate;
  }

  AcceptedRequest(requestData,user) {
    let htmlTemplate = `
    <div class="PendingRequestElementWrap">
      <div id="${requestData.id}/${requestData.formName}/" class="PendingRequests PendingRequestElement" onclick="popupForm()">
      <div class="PendingRequestElement--header">
        <div>
        <p class="PendingRequestElement-heading1">${requestData.request.plan.replace('&', '/')}</p>
        <p class="PendingRequestElement-heading2">${requestData.request.type}</p>
        <p class="PendingRequestElement-heading3">${requestData.date}</p>
        </div>
        </div>
        <div class="PendingRequestElement-contentWrap-special">
            <img src="./assets/icons/check.svg">
            <p class="greem">Godkendt</p>
        </div>
    </div>
  </div>
  `
  return htmlTemplate;
//     let htmlTemplate = `
//     <div class="RequestProfile">
    
// <div class="profilCard">
// <div class="profilCard--inner">
// <h3>Her kan du se DIN ${requestData.Type}!</h3>
// <hr>
// <p>${requestData.formName}</p>
// <button style="width:200px;><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" download="${requestData.formName}">Download</a></button>
// <br>
// <button style="width:200px;"><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" target="_blank">Se PDF!</a></button>
// <p>Mvh. Easyfit</p>

// <hr>
// <div class="buttonFlex"> 
// <div class="buttonFlex--inner">
// <p> <b> Status:</b></p>
// </div>
// <div class="buttonFlex--inner">
// <button  style = "background:orange"class="buttonPending">Accepted</button>
// </div>
// <div class="buttonFlex--inner">
// <button class="buttonKontakt">Kontakt</button>
// </div>
// </div>
// </div>
// </div>
//  </div>
//  </div>
//   `
//   return htmlTemplate;
  }


  CompletedRequest(requestData,user) {
    let htmlTemplate = `
    <div class="PendingRequestElementWrap">
      <div id="${requestData.id}/${requestData.formName}/" class="PendingRequests PendingRequestElement" onclick="popupForm()">
      <div class="PendingRequestElement--header">
        <div>
        <p class="PendingRequestElement-heading1">${requestData.request.plan.replace('&', '/')}</p>
        <p class="PendingRequestElement-heading2">${requestData.request.type}</p>
        <p class="PendingRequestElement-heading3">${requestData.date}</p>
        </div>
        </div>
        <div class="PendingRequestElement-contentWrap-special">
            <div class="butbut"><p>Se PdF</p></div>
            <div class="butbut"><p>Download</p></div>
        </div>
    </div>
  </div>
  `
  return htmlTemplate;
    
//     let htmlTemplate = `
//     <div class="RequestProfile">
    
// <div class="profilCard">
// <div class="profilCard--inner">
// <h2>Hej navnDADADA</h2>
// <h3>Her kan du se DIN ${requestData.type}!</h3>
// <hr>
// <p>${requestData.formName}</p>
// <button style="width:200px;"> <a href="./UserForms/${user.uid}/${requestData.formName}.pdf" download="${requestData.formName}">Download</a></button>
// <br>
// <button style="width:200px;"><a href="./UserForms/${user.uid}/${requestData.formName}.pdf" target="_blank">Se PDF!</a></button>
// <p>Mvh. Easyfit</p>

// <hr>
// <div class="buttonFlex"> 
// <div class="buttonFlex--inner">
// <p> <b> Status:</b></p>
// </div>
// <div class="buttonFlex--inner">
// <button  style = "background:green"class="buttonPending">completed</button>
// </div>
// <div class="buttonFlex--inner">
// <button class="buttonKontakt">Kontakt</button>
// </div>
// </div>
// </div>
// </div>
//  </div>
//  </div>
//   `

//   return htmlTemplate;
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
    this.onAcceptedValueChange = this.AcceptedrequestPath.on('value', (snapshot) => {
      if (snapshot.exists()) {
      this.UpdateRequestsAccepted(snapshot,user)
      }
    })

      // completed
    this.onCompletedValueChange = this.CompletedrequestPath.on('value', (snapshot) => {
      if (snapshot.exists()) {
        this.UpdateRequestsCOMPLETED(snapshot,user)
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
    this.updateUserDataShow(user);
  }

  unInit() {
    document.getElementById("navbar").children[0].removeChild(this.Navitem)
    document.getElementById("root").removeChild(this.ContentWrap)
    this.PendingrequestPath.off('value', this.onPendingValueChange);
    this.AcceptedrequestPath.off('value', this.onAcceptedValueChange);
    this.CompletedrequestPath.off('value', this.onCompletedValueChange);
  }

  updateUserDataShow(user) {
    firebase.database().ref('/users/'+ user.uid).once('value', (snapshot) => {
      let userObject = snapshot.val();
      document.getElementById("SideDisplayName").innerHTML = userObject.navn
      document.getElementById("SideDisplayEmail").innerHTML = userObject.email
      if (userObject.Tlf) {
        document.getElementById("SideDisplayTlf").innerHTML = userObject.Tlf
      } else {
        document.getElementById("SideDisplayTlf").innerHTML += "<img class='addPhoneNr' src='./assets/icons/plus.svg'>"
      }
      })
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