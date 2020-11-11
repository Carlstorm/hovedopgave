export default class AdminPage {
  constructor() {
    this.Navitem
    this.ContentWrap
    this.requestPath
    this.CompletedrequestPath
    this.onValueChange
    this.onValueChangeNEW
    this.navitem()
    this.contentWrap()
  }

  contentWrap() {
    let ContentWrap = document.createElement("SECTION")
    ContentWrap.innerHTML = `
    <h3>Ansøgninger:</h3> 
    <div id="Requests"></div> 
    <br>
    <h3>Færdige Ansøgninger:</h3> 
    <div id="CompletedRequests"></div> 
    <br>
    <h3>Admins:</h3>
    <div id="adminControls"></div> 
    `
    ContentWrap.setAttribute("id", "AdminPage");
    ContentWrap.classList.add("page")
    this.ContentWrap = ContentWrap;
  }


  CompletedRequest(requestData) {
    let htmlTemplate = `
    <div id="${requestData.id}" class="requestElement">
      <p>${requestData.formName}</p>
      <p>${requestData.name}</p>
      <p>${requestData.email}</p>
      <p class="testID">${requestData.request}</p>
      <h2>Svaret</h2>
    </div>
  `
  return htmlTemplate;
  }

  PendingRequest(requestData, index) {
    let htmlTemplate = `
    <div id="${requestData.id}" class="requestElement">
      <p>${requestData.Type}</p>
      <p>${requestData.date}</p>
      <p>${requestData.name}</p>
      <p>${requestData.email}</p>
      <p class="testID">${requestData.request}</p>
      <input type="file" name="file" id="file${index}">
      <input type="button" id="btn_uploadfile" 
         value="Upload" 
         onclick="uploadPDF('${requestData.id}', '${requestData.formName}', 'file${index}')" >
    </div>
  `
  return htmlTemplate;
  }


  UpdateRequests(requests) {
    let htmlTemplate = ""
    if (requests) {
      document.getElementById("Requests").innerHTML = "";
      let obj = requests.val();
      let ArrayUsers = Object.keys(obj).map((key) => obj[key]);
      ArrayUsers.map((ArrayUsersData) => {
        let ArrayRequests = Object.keys(ArrayUsersData).map((key) => ArrayUsersData[key]);
        ArrayRequests.map((requestData, index) => {
          htmlTemplate += this.PendingRequest(requestData, index)
        }).join('')
      })
      document.getElementById("Requests").innerHTML = htmlTemplate;
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
    this.Navitem = Navitem;
  }

  load(admins) {
    document.getElementById("Requests").innerHTML = "<p>Loading...</p>"
    this.onValueChange = this.requestPath.on('value', (snapshot) => {
      if (snapshot.exists()) {
      this.UpdateRequests(snapshot)
      } else {
        document.getElementById("Requests").innerHTML = "<p>Ingen aktive ansøgninger lige nu</p>"
      }
    })
    this.onValueChangeNEW = this.CompletedrequestPath.on('value', (snapshot) => {
      if (snapshot.exists()) {
        this.UpdateRequestsCOMPLETED(snapshot)
      } else {
        document.getElementById("CompletedRequests").innerHTML = "<p>Ingen Færdige Ansøginger</p>"
      }
    })
    this.AdminControls(admins);
  }

  init(admins) {
    document.getElementsByClassName("navbarItems")[0].appendChild(this.Navitem)
    document.getElementsByClassName("navbarItems")[1].appendChild(this.Navitem)
    document.getElementById("root").appendChild(this.ContentWrap)
    this.requestPath = firebase.database().ref('/PendingRequests/');
    this.CompletedrequestPath = firebase.database().ref('/CompletedRequests/');
    this.load(admins);
  }

  unInit() {
    document.getElementById("navbar").removeChild(this.Navitem)
    document.getElementById("root").removeChild(this.ContentWrap)
    this.requestPath.off('value', this.onValueChange);
    this.requestPath.off('value', this.onValueChangeNEW);
  }
}

