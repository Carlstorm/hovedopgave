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
    <p>Content:</p> 
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

  showRequests(ArrayMerged, userID) {
    document.getElementById("userdata").innerHTML = ""
    let htmlTemplate = "";
    ArrayMerged.map(res => {
      if (res.responseState) {
        htmlTemplate += `
        <div class="requestElement">
        <p>${res.formName}</p>
        <p>${res.request}</p>
        <a href="./UserForms/${userID}/${res.formName}.pdf" download="${res.formName}">Download</a>
        <br>
        <a href="./UserForms/${userID}/${res.formName}.pdf" target="_blank">Se PDF!</a>
        </div>
        `
      } else {
        htmlTemplate += `
        <div class="requestElement">
        <p>${res.formName}</p>
        <p>${res.request}</p>
        <p>WAITING FOR ANSWER....</p>
        </div>
        `
      }
    })
    document.getElementById("userdata").innerHTML = htmlTemplate;
  }

  UpdateStates(requests, userID) {
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
        this.showRequests(ArrayMerged, userID);
      } else {
        document.getElementById("userdata").innerHTML = "ingen ansøgninger"
      }
    })
  } 


  navitem() {
    let Navitem = document.createElement("A")
    Navitem.innerHTML = "ProfilPage"
    Navitem.href = "#ProfilPage";
    Navitem.className = "tabbar--item"
    this.Navitem = Navitem;
  }

  load(userID) {
    document.getElementById("userdata").innerHTML = "<p>Loading...</p>"
    this.onValueChange = this.requestPath.on('value', (snapshot) => {
      this.UpdateStates(snapshot, userID)
    })
  }

  init(userID) {
    document.getElementsByClassName("navbarItems")[0].insertBefore(this.Navitem, document.getElementsByClassName("navbarItems")[0].children[3])
    console.log(this.Navitem, document.getElementsByClassName("navbarItems")[0])
    document.getElementById("root").appendChild(this.ContentWrap)
    this.requestPath = firebase.database().ref('/PendingRequests/'+ userID);
    this.completedRequestPath = firebase.database().ref('/CompletedRequests/'+ userID);
    this.load(userID)
  }

  unInit() {
    document.getElementById("navbar").removeChild(this.Navitem)
    document.getElementById("root").removeChild(this.ContentWrap)
    this.requestPath.off('value', this.onValueChange);
  }
}
