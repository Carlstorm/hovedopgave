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
    <div id="logo"><img src="./assets/logo/main.png"></div>
    </div>
    <div class="adminstration--contentWrap">

    <div class="popupFormWrap" id="popupForm" onclick="removePopupForm()">
      <div class="popupFormWrap--content">
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
            <h2>Loading...</h2>
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
    <div class="adminstration--contentContainer" id="CompletedRequests"></div> 
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
      <div id="${requestData.id}/${requestData.formName}/" class="PendingRequests PendingRequestElement a" onclick="popupForm()">
      <div class="PendingRequestElement--header">
        <div>
        <p class="PendingRequestElement-heading1">${requestData.plan.replace('&', '/')}</p>
        <p class="PendingRequestElement-heading2">${requestData.Type}</p>
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
        <p class="PendingRequestElement-heading1">${requestData.plan.replace('&', '/')}</p>
        <p class="PendingRequestElement-heading2">${requestData.Type}</p>
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
    <div id="${requestData.id}" class="CompletedRequestElement">
      <p>${requestData.formName}</p>
      <p>${requestData.name}</p>
      <p>${requestData.email}</p>
      <p class="testID">${requestData.request}</p>
      <h2>Svaret</h2>
    </div>
  `
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
      document.getElementById("CompletedRequests").innerHTML = "";
      let obj = requests.val();
      let ArrayUsers = Object.keys(obj).map((key) => obj[key]);
      ArrayUsers.map((ArrayUsersData) => {
        let ArrayRequests = Object.keys(ArrayUsersData).map((key) => ArrayUsersData[key]);
        ArrayRequests.map((requestData, index) => {
          htmlTemplate += this.CompletedRequest(requestData, index)
        }).join('')
      })
      document.getElementById("CompletedRequests").innerHTML = htmlTemplate;
    }
  } 


  AdminControls(admins) {
    admins.map((admins) => {
      document.getElementById("adminControls").innerHTML += `
        <p>${admins}</p>
      `
    })
  }

  navitem() {
    let Navitem = document.createElement("A")
    Navitem.innerHTML = "AdminPage"
    Navitem.href = "#AdminPage";
    Navitem.className = "tabbar--item"
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
    document.getElementById("popupForm").classList.add("popupFormWrap-shown")
    this.fillpopup(event.target, index);
  }

  removePopupForm() {
    console.log(event.target)
    if (event.target.id == "popupForm" || event.target.id.includes("popupForm")) {
      document.getElementById("popupForm").classList.remove("popupFormWrap-shown")
    }
  }


  fillpopup(element, index) {
    firebase.database().ref(`/${element.classList[0]}/${element.id}`).once('value', (snapshot) => {
      let requestObject = snapshot.val();
      console.log(requestObject)
      document.getElementById("PopprofileWrap").innerHTML = `
      <p>${requestObject.name}</p>
      <p>${requestObject.email}</p>
      <p>${requestObject.email}</p>
      `

      // 
      document.getElementById("PoprequestWrap").children[0].innerHTML = `
      ${requestObject.plan.replace('&', '/')} - ${requestObject.Type}
      `
      let HtTEMP = ""
      requestObject.request.BrugerData
      HtTEMP += `<h3>BrugerData:</h3>
      <p><span>Navn:</span> ${requestObject.request.BrugerData.Navn}</p>
      <p><span>Køn:</span> ${requestObject.request.BrugerData.Køn}</p>
      <p><span>Alder:</span> ${requestObject.request.BrugerData.Alder}</p>
      <p><span>By:</span> ${requestObject.request.BrugerData.By}</p>
      <p><span>Adresse:</span> ${requestObject.request.BrugerData.Adresse}</p>

      <h3>Aktivitet:</h3>
      <p><span>Aktivitet i arbejde:</span> ${requestObject.request.Aktivitet.AktivitetErhverv}</p>
      <p><span>Aktivitet i fritid:</span> ${requestObject.request.Aktivitet.AktivitetFritid}</p>
      <p><span>Andet:</span> ${requestObject.request.Aktivitet.AktivitetAndet}</p>

      <h3>Mål:</h3>
      <p><span>Mål:</span> ${requestObject.request.Mål.Mål}</p>
      <p><span>Mål i vægt:</span> ${requestObject.request.Mål.MålVægt}</p>
      
      
      <h3>KOSTPREFERENCER:</h3>
      <p><span>Kost Krav:</span> ${requestObject.request.pref.pref.join(', ')}</p>
      <p><span>Andet:</span> ${requestObject.request.pref.prefExtra}</p>
      
      <h3>trænning:</h3>
      <p><span>Kost Krav:</span> ${requestObject.request.Trænnings.TrænningErfaring}</p>
      <p><span>Andet:</span> ${requestObject.request.Trænnings.Trænninghyppighed}</p>
      
      <h3>Sygdomme:</h3>
      <p>${requestObject.request.Sygdomme}</p>

      <h3>Andet:</h3>
      <p>${requestObject.request.Andet}</p>

      <div style="height: 180px"></div>
      `

      console.log(element)
      if (element.classList.contains("AcceptedRequests")) {

        document.getElementById("popupFormWrap--bottom").innerHTML = `
        <input type="file" name="file" id="file${index}" onchange="changeChosenFIle(${`file${index}`})" hidden>
        <label for="file${index}">Vælg fil</label>
        <span id="file-chosen">No file chosen</span>
        <div class="popupFormWrap--button" id="popupForm-button" onclick="uploadPDF('${requestObject.id}', '${requestObject.formName}', 'file${index}')"><p>Send</p></div>
        `
      } else {
        document.getElementById("popupFormWrap--bottom").innerHTML = `
        <div class="popupFormWrap--button" id="popupForm-button" onclick="acceptRequest('${requestObject.id}', '${requestObject.formName}')"><p>Godkend</p></div>
        <div class="popupFormWrap--button-style2"><p>Afslag</p></div>
        `
      }
      document.getElementById("PoprequestWrap").children[1].innerHTML = HtTEMP;
    })
  }
}



