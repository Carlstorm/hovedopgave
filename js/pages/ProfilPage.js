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
    </div>
    </div>
    <div class="adminstration--contentWrap anies">



    <div class="popupFormWrap popupFormWrap-forAdmin" id="popupForm3" onclick="removePopupForm3()">
    <div class="popupFormWrap--content popupFormWrap--FormContent popcont">

      <div id="popUpconfirmWrap" class="popUpconfirmWrap" onclick="confirmCheck()">
        <div class="popUpconfirmWrap--content">
          <p>Er du sikker på du vil slette ansøgningen?</p>
          <div class="popUpconfirmWrap--butWrap">
          <div class="popUpconfirmWrap--butWrap-but1" onclick="SletAnsøgning()"><p>Ja</p></div>
          <div class="popUpconfirmWrap--butWrap-but2"><p>Nej</p></div>
          </div>
        </div>
      </div>

      <div class="popupFormWrap--main"> 
        <div class="popupFormWrap--main-content" id="PoprequestWrap3">
          <div id="PoprequestWrapContent"></div>
        </div>
      </div>
      
      <div class="popupFormWrap--bottom">
      <div class="popupFormWrap--button-style2" id="lukKnap2" onclick="removePopupForm3()"><p>Luk</p></div>
      </div>
    </div>

    

    <div class="popupFormWrap--PhoneContent popcont">
    <p>TIlføj Tlf:</p>
    <div>
      <input></input>
      <div onclick="setUserTlf()"><p>Tilføj</p></div>
    </div>
    </div>


    <div class="popupFormWrap--ImageContent popcont">
      <div class="popupFormWrap--ImageContent-preview image-preview""></div>
      <div class="popupFormWrap--ImageContent-br"></div>
      <div class="popupFormWrap--ImageContent-UButWrap">
      <div class="uploadwrap">
      <input class="uploadinput" type="file" name="file" id="img" accept="image/*" onchange="previewImage(this.files[0])" hidden>
        <label for="img"><p>Vælg fil</p></label>
      </div>
      <div onclick="Opencamera()"><p class="popupFormWrap--ImageContent-Kamerabut">Kamera</p></div>
      </div>
      <div class="popupFormWrap--ImageContent-UploadBut" onclick="gembillede()"><p>Updater!</p></div>

    </div>





  </div>




























    


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
    <div class="adminstration--headerwrap-bottomBar"></div>
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
    <div class="PendingRequestElementWrap-special">
      <div id="${requestData.id}/${requestData.formName}/" class="PendingRequests PendingRequestElement" onclick="popupForm3()">
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
    <div class="PendingRequestElementWrap-special">
      <div id="${requestData.id}/${requestData.formName}/" class="PendingRequests PendingRequestElement" onclick="popupForm3()">
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
    <div class="PendingRequestElementWrap-special">
      <div id="${requestData.id}/${requestData.formName}/" class="PendingRequests PendingRequestElement" onclick="popupForm3()">
      <div class="PendingRequestElement--header">
        <div>
        <p class="PendingRequestElement-heading1">${requestData.request.plan.replace('&', '/')}</p>
        <p class="PendingRequestElement-heading2">${requestData.request.type}</p>
        <p class="PendingRequestElement-heading3">${requestData.date}</p>
        </div>
        </div>
        <div class="PendingRequestElement-contentWrap-special">
            <a href="./UserForms/${user.uid}/${requestData.formName}.pdf" target="_blank" class="butbut"><p>Se PdF</p></a>
            <a href="./UserForms/${user.uid}/${requestData.formName}.pdf" download="${requestData.formName}" class="butbut"><p>Download</p></a>
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
        document.getElementById("SideDisplayTlf").innerHTML = `${userObject.Tlf} <img onclick='setTlfNr()' class='addPhoneNr' src='./assets/icons/ChangeIcon.svg'>`
      } else {
        document.getElementById("SideDisplayTlf").innerHTML = "Tlf:<img onclick='setTlfNr()' class='addPhoneNr' src='./assets/icons/plus.svg'>"
      }
      })
  }


  





  

////modal camera

onclickPlus = function() {
  document.getElementById("popupForm3").classList.add("popupFormWrap-shown")
  this.popcontent("popupFormWrap--ImageContent")
  // var modal = document.getElementById("imageModal");
  // modal.style.display = "block";
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



setUserTlf(user) {
  let tlfnr = event.target.parentNode.children[0].value;
  console.log(tlfnr)
  firebase.database().ref('/users/' + user.uid)
  .update({
      Tlf: tlfnr
  });
  this.removePopupForm3(true)
  this.updateUserDataShow(user)
}



popcontent(CurrentPopup) {
  for (let popcont of document.getElementsByClassName("popcont")) {
    popcont.classList.add("popcont-Hidden")
  }
  document.getElementsByClassName(CurrentPopup)[0].classList.remove("popcont-Hidden")
}


setTlfNr() {
  document.getElementById("popupForm3").classList.add("popupFormWrap-shown")
  this.popcontent("popupFormWrap--PhoneContent")
}







popupForm3(index) {
  if (!event.target.classList.contains("butbut")) {
    document.getElementById("popupForm3").classList.add("popupFormWrap-shown")
  this.popcontent("popupFormWrap--FormContent")

  let element = event.target
  if (event.target.classList.contains("PendingRequestElement-contentWrap-special")) {
    element = event.target.parentNode
  }
  this.fillpopup(element, index);
  }
}

removePopupForm3(da) {
  console.log(event.target)
  if (event.target.id == "popupForm3" || event.target.id == "lukKnap2" || da) {
    document.getElementById("popupForm3").classList.remove("popupFormWrap-shown")
  }
}


fillpopup(element, index) {
  this.selectedPath = `/${element.classList[0]}/${element.id}`
  firebase.database().ref(this.selectedPath).once('value', (snapshot) => {
  let requestObject = snapshot.val();

    let HtTEMP = ""
    HtTEMP += `<h2>${requestObject.request.plan} - ${requestObject.request.type} </h2>`
    for (let [key, value] of Object.entries(requestObject.request)) {
      if (key != "plan" && key != "type" && key != "Sygdomme" && key != "Andet") {
      HtTEMP += `<h2>${key}</h2>`
      for (let [key2, value2] of Object.entries(value)) {
        HtTEMP += `<p><span>${key2}:</span> ${value2}</p>`
      }

      } else if (key == "Sygdomme" || key == "Andet") {
        HtTEMP += `<h2>${key}</h2>`
        HtTEMP += `<p>${value}</p>`
    }
  }
    document.getElementById("PoprequestWrap3").children[0].innerHTML = HtTEMP;
  })
}







}



//////