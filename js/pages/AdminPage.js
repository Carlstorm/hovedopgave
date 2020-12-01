export default class AdminPage {
  constructor() {
    this.Navitem
    this.ContentWrap

    this.PendingrequestPath
    this.AcceptedrequestPath
    this.CompletedrequestPath

    this.onPendingValueChange
    this.onAcceptedValueChange
    this.onCompletedValueChange

    this.navitem()
    this.contentWrap()
  }

  contentWrap() {
    let ContentWrap = document.createElement("SECTION")
    ContentWrap.innerHTML = `
    <div class="adminstration--pageWrap">
    <div class="adminstration--siderbar">
      <div class="adminstration--siderbarforshow anies-slide">
      <h2>Adminstration</h2>
        <div class="sideHline"></div>
        <div class="sidebarButt">
        <p>PLANERARAR</p>
        </div>
        <div class="sideHline"></div>
        <div class="sidebarButt">
        <p>STatestics</p>
        </div>
        <div class="sideHline"></div>
      </div>
    </div>
    <div class="adminstration--contentWrap anies">

    <div class="popupFormWrap popupFormWrap-forAdmin" id="popupForm1" onclick="removePopupForm()">
      <div class="popupFormWrap--content">

        <div id="popUpconfirmWrap" class="popUpconfirmWrap" onclick="confirmCheck()">
          <div class="popUpconfirmWrap--content">
            <p>Er du sikker på du vil slette ansøgningen?</p>
            <div class="popUpconfirmWrap--butWrap">
            <div class="popUpconfirmWrap--butWrap-but1" onclick="SletAnsøgning()"><p>Ja</p></div>
            <div class="popUpconfirmWrap--butWrap-but2"><p>Nej</p></div>
            </div>
          </div>
        </div>

        <div class="popupFormWrap--side"> 
        <div class="popupFormWrap--imgWrap">
          <div class="popupFormWrap--imgWrap--image"></div>
        </div>
        <div class="popupFormWrap--userinfWrap" id="PopprofileWrap">
        <p>Loading...</p>
        <p>Loading...</p>
        <p>Loading...</p>
        </div>
        </div>
        <div class="popupFormWrap--main"> 
          <div class="popupFormWrap--main-content" id="PoprequestWrap">
            <div id="PoprequestWrapContent"></div>
          </div>
        
        
        </div>
         <div class="popupFormWrap--contentWrap"></div>
        <div class="popupFormWrap--bottom" id="popupFormWrap--bottom">
        </div>
      </div>
    </div>

    <div>
    <div class="adminstration--headerwrap adminstration--headerwrap-shown" onclick="toggleShowHide()">
    <div class="adminstration--headerwrap-main">
    <h3 id="PendingRequestsHeading">Ansøgninger</h3>
    <div><img src="./assets/icons/arrow.svg" ></div> 
    </div>
    <div class="adminstration--headerwrap-bottomBar" ></div>
    </div>
    <div class="adminstration--contentContainer adminstration--contentContainer-shown" id="PendingRequests"></div> 
    </div>
    <br>


    <div>
    <div class="adminstration--headerwrap adminstration--headerwrap" onclick="toggleShowHide()">
    <div class="adminstration--headerwrap-main">
    <h3 id="AcceptedRequestsHeading">Godkendte Ansøgninger</h3>
    <div><img src="./assets/icons/arrow.svg" ></div> 
    </div>
    <div class="adminstration--headerwrap-bottomBar" ></div>
    </div>
    <div class="adminstration--contentContainer adminstration--contentContainer" id="AcceptedRequests"></div> 
    </div>
    <br>


    <div>
    <div class="adminstration--headerwrap" onclick="toggleShowHide()">
    <div class="adminstration--headerwrap-main">
    <h3 id="RequestHeading">Færdige Ansøgninger</h3>
    <div><img src="./assets/icons/arrow.svg" ></div> 
    </div>
    <div class="adminstration--headerwrap-bottomBar" ></div>
    </div>
    <div class="adminstration--contentContainer" id="CompletedRequests">
      <table id="completedRequestTable" class="RequestTable">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
      </table>
    </div> 
    </div>
    <br>


    <div>
    <div class="adminstration--headerwrap" onclick="toggleShowHide()">
    <div class="adminstration--headerwrap-main">
    <h3 id="RequestHeading">Adminstratore</h3>
    <div><img src="./assets/icons/arrow.svg" ></div> 
    </div>
    <div class="adminstration--headerwrap-bottomBar" ></div>
    </div>


    <div class="adminstration--contentContainer" id="adminControls"></div> 
    </div>
    </div>
    </div>
    `
    ContentWrap.setAttribute("id", "AdminPage");
    ContentWrap.classList.add("page")
    this.ContentWrap = ContentWrap;
  }


  toggleShowHide() {
    event.target.classList.toggle("adminstration--headerwrap-shown")
    event.target.parentElement.children[1].classList.toggle("adminstration--contentContainer-shown")
  }

  PendingRequest(requestData) {


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
        <div class="PendingRequestElement-contentWrap">
          <div class="PendingRequestElement-text">
            <p>${requestData.email}</p>
          </div>
          <div class="PendingRequestElement-text2">
          <p>${requestData.email}</p>
        </div>
      </div>
    </div>
  </div>
  `
  return htmlTemplate;
  }

  AcceptedRequest(requestData, index) {
    let htmlTemplate = `
    <div class="PendingRequestElementWrap">
      <div id="${requestData.id}/${requestData.formName}/" class="AcceptedRequests PendingRequestElement" onclick="popupForm(${index})">
      <div class="PendingRequestElement--header">
        <div>
        <p class="PendingRequestElement-heading1">${requestData.request.plan.replace('&', '/')}</p>
        <p class="PendingRequestElement-heading2">${requestData.request.type}</p>
        <p class="PendingRequestElement-heading3">${requestData.date}</p>
        </div>
        </div>
        <div class="PendingRequestElement-contentWrap">
          <div class="PendingRequestElement-text">
            <p>${requestData.email}</p>
          </div>
          <div class="PendingRequestElement-text2">
          <p>${requestData.email}</p>
        </div>
      </div>
    </div>
  </div>
  `
  return htmlTemplate;
  }


  CompletedRequest(requestData) {
    let htmlTemplate = `
    <tr>
      <th>${requestData.date}</th>
      <th>${requestData.plan} - ${requestData.request.type}</th>
      <th>${requestData.name}</th>
      <th>${requestData.email}</th>
      <th class="buttonCell"><div class="CompletedRequests" id="${requestData.id}/${requestData.formName}/" onclick="popupForm()"><p>Se ansøgning</p></div></th>
    </tr>
  `
//   <div id="${requestData.id}" class="CompletedRequestElement">
//   <p>${requestData.formName}</p>
//   <p>${requestData.name}</p>
//   <p>${requestData.email}</p>
//   <p class="testID">${requestData.request}</p>
//   <h2>Svaret</h2>
// </div>
  return htmlTemplate;
  }

  changeChosenFIle(da) {
    let textbox = event.target.parentElement.children[2]
    textbox.innerHTML = da.files[0].name
  }


  acceptRequest(userID, FormName, userdata) {
    console.log("userID, FormName, userdata");
    userdata.MoveForm(userID, FormName, '/PendingRequests/')
    this.removePopupForm();
  }

  // <input type="button" id="btn_uploadfile" 
  // value="Upload" 
  // onclick="uploadPDF('${requestData.id}', '${requestData.formName}', 'file${index}')" >


  UpdateRequestsPending(requests) {
    let htmlTemplate = ""
    let allrequests = 0;
    if (requests.exists()) {
      document.getElementById("PendingRequests").innerHTML = "";
      let obj = requests.val();
      let ArrayUsers = Object.keys(obj).map((key) => obj[key]);
      ArrayUsers.map((ArrayUsersData) => {
        let ArrayRequests = Object.keys(ArrayUsersData).map((key) => ArrayUsersData[key]);
        ArrayRequests.map((requestData, index) => {
          htmlTemplate += this.PendingRequest(requestData, index)
          allrequests+=1
        }).join('')
      })
    } else {
      htmlTemplate = "<p>Ingen aktive ansøgninger lige nu</p>"
    }
    document.getElementById("PendingRequestsHeading").innerHTML = `Ansøgninger (${allrequests})`
    document.getElementById("PendingRequests").innerHTML = htmlTemplate;
  } 

  UpdateRequestsAccepted(requests) {
    let htmlTemplate = ""
    if (requests) {
      document.getElementById("AcceptedRequests").innerHTML = "";
      let allrequests = 0;
      let obj = requests.val();
      let ArrayUsers = Object.keys(obj).map((key) => obj[key]);
      ArrayUsers.map((ArrayUsersData) => {
        let ArrayRequests = Object.keys(ArrayUsersData).map((key) => ArrayUsersData[key]);
        ArrayRequests.map((requestData, index) => {
          htmlTemplate += this.AcceptedRequest(requestData, index)
          allrequests+=1
        }).join('')
      })
      document.getElementById("AcceptedRequestsHeading").innerHTML = `Godkendte ansøgninger (${allrequests})`
      document.getElementById("AcceptedRequests").innerHTML = htmlTemplate;
    }
  } 

  UpdateRequestsCOMPLETED(requests) {
    let htmlTemplate = ""
    if (requests) {
      htmlTemplate = `
      <tr class="TableHeader">
        <th>Dato</th>
        <th>Plan</th>
        <th>Navn</th>
        <th>Email</th>
        <th>Detaljer</th>
      </tr>
      `;
      let obj = requests.val();
      let ArrayUsers = Object.keys(obj).map((key) => obj[key]);
      ArrayUsers.map((ArrayUsersData) => {
        let ArrayRequests = Object.keys(ArrayUsersData).map((key) => ArrayUsersData[key]);
        ArrayRequests.map((requestData, index) => {
          htmlTemplate += this.CompletedRequest(requestData, index)
        }).join('')
      })
      document.getElementById("completedRequestTable").innerHTML = htmlTemplate;
    }
  } 

  // dato navn 
  // plan emeil    se form


  AdminControls(admins) {
    admins.map((admins) => {
      console.log(admins)
      document.getElementById("adminControls").innerHTML += `
      <div class="admincontainer">
        <p>${admins}</p>
      </div>
      `
    })
  }

  navitem() {
    let Navitem = document.createElement("A")
    Navitem.innerHTML = "AdminPage"
    Navitem.href = "#AdminPage";
    Navitem.className = "tabbar--item directanies"
    this.Navitem = Navitem;
  }

  load(admins) {
    // pending
    document.getElementById("PendingRequests").innerHTML = "<p>Loading...</p>"
    this.onPendingValueChange = this.PendingrequestPath.on('value', (snapshot) => {
      this.UpdateRequestsPending(snapshot)
    })

      // accepted
    document.getElementById("AcceptedRequests").innerHTML = "<p>Loading...</p>"
    this.onAcceptedValueChange = this.AcceptedrequestPath.on('value', (snapshot) => {
      if (snapshot.exists()) {
      this.UpdateRequestsAccepted(snapshot)
      } else {
        document.getElementById("AcceptedRequests").innerHTML = "<p>Ingen aktive ansøgninger lige nu</p>"
      }
    })

      // completed
    this.onCompletedValueChange = this.CompletedrequestPath.on('value', (snapshot) => {
      if (snapshot.exists()) {
        this.UpdateRequestsCOMPLETED(snapshot)
      } else {
        document.getElementById("CompletedRequests").innerHTML = "<p>Ingen Færdige Ansøginger</p>"
      }
    })
    this.AdminControls(admins);
  }

  init(admins) {
    document.getElementsByClassName("navbarItems")[0].insertBefore(this.Navitem, document.getElementsByClassName("navbarItems")[0].children[3])
    document.getElementById("root").appendChild(this.ContentWrap)
    this.PendingrequestPath = firebase.database().ref('/PendingRequests/');
    this.AcceptedrequestPath = firebase.database().ref('/AcceptedRequests/');
    this.CompletedrequestPath = firebase.database().ref('/CompletedRequests/');
    this.load(admins);
  }

  unInit() {
    document.getElementById("navbar").removeChild(this.Navitem)
    document.getElementById("root").removeChild(this.ContentWrap)
    this.PendingrequestPath.off('value', this.onPendingValueChange);
    this.AcceptedrequestPath.off('value', this.onAcceptedValueChange);
    this.CompletedrequestPath.off('value', this.onCompletedValueChange);
  }


  popupForm(index) {
    document.getElementById("popupForm1").classList.add("popupFormWrap-shown")
    this.fillpopup(event.target, index);
    console.log(event.target, index)
  }

  removePopupForm() {
    console.log(event.target)
    if (event.target.id == "popupForm1" || event.target.id.includes("popupForm")) {
      document.getElementById("popupForm1").classList.remove("popupFormWrap-shown")
    }
  }

  confirmCheck() {
    console.log(event.target)
    if (!event.target.classList.contains("popUpconfirmWrap--content") && !event.target.classList.contains("popUpconfirmWrap--butWrap")) {
      document.getElementById("popUpconfirmWrap").classList.toggle("popUpconfirmWrap-show")
    }
  }


  SletAnsøgning() {
    console.log("slet")
    firebase.database().ref(this.selectedPath).remove()
    document.getElementById("popupForm1").classList.remove("popupFormWrap-shown")
  }



  fillpopup(element, index) {
    this.selectedPath = `/${element.classList[0]}/${element.id}`
    firebase.database().ref(this.selectedPath).once('value', (snapshot) => {
    let requestObject = snapshot.val();
    document.getElementById("PopprofileWrap").innerHTML = `
    <p>${requestObject.name}</p>
    <p>${requestObject.email}</p>
    <p>${requestObject.email}</p>
    `
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

    if (element.classList.contains("AcceptedRequests")) {

      document.getElementById("popupFormWrap--bottom").innerHTML = `
      <div class="popupFormWrap--button" id="popupForm-button" onclick="uploadPDF('${requestObject.id}', '${requestObject.formName}', 'file${index}')"><p>Send</p></div>
      <div class="uploadwrap">
      <input class="uploadinput" type="file" name="file" id="file${index}" onchange="changeChosenFIle(${`file${index}`})" hidden>
        <label for="file${index}"><p>Vælg fil</p></label>
        <span id="file-chosen">No file chosen</span>
      </div>
      `
    } else if (element.classList.contains("PendingRequests")) {

      document.getElementById("popupFormWrap--bottom").innerHTML = `
      <div class="popupFormWrap--button" id="popupForm-button" onclick="acceptRequest('${requestObject.id}', '${requestObject.formName}')"><p>Godkend</p></div>
      <div class="popupFormWrap--button-style2" onclick="confirmCheck()"><p>Afslag</p></div>
      `

    } else {
      let newpath = element.id.slice(0,element.id.indexOf('/'))
      console.log(newpath)
      document.getElementById("popupFormWrap--bottom").innerHTML = `
      <a class="popupFormWrap--button-style2" href="./UserForms/${newpath}/${requestObject.formName}.pdf" download="${requestObject.formName}"><p>Download</p></a>
      <a class="popupFormWrap--button-style2" href="./UserForms/${newpath}/${requestObject.formName}.pdf" target="_blank"><p>Se PDF!</p></a>
      `
    }

      document.getElementById("PoprequestWrap").children[0].innerHTML = HtTEMP;
    })
  }
}
