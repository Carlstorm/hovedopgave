
// import Pages
import ForsidePage from "./js/pages/ForsidePage.js";
import PlanPage from "./js/pages/PlanPage.js";
import ProfilPage from "./js/pages/ProfilPage.js"
import AdminPage from "./js/pages/AdminPage.js";

// import Services
import SpaService from "./js/services/spa.js";
import Firebase from "./js/services/firebase.js";
import Login from "./js/services/login.js";
import UserData from "./js/services/UserData.js"
import Upload from "./js/services/upload.js"
import CameraService from "./js/services/cameraservice.js";

// variables
let Currentuser = null;
let IsAdmin = null;


// inits 
    // Main pages
    let forsidePage = new ForsidePage();
    let planPage = new PlanPage();
    let profilPage = new ProfilPage();
    let adminPage = new AdminPage();

    // Services
    new Firebase();
    let userdata = new UserData();
    let spaService = new SpaService();
    let upload = new Upload();
    let login = new Login();
    let cameraService = new CameraService();


// calls

window.formdataPreset = () => planPage.formdataPreset();
window.confirmCheck = () => adminPage.confirmCheck();
window.SletAnsøgning = () => adminPage.SletAnsøgning();


window.SendUserData = () => {
    userdata.send(Currentuser, planPage.GetValue())
    planPage.ChangePopUpForm();

    ///til email
    userdata.sendemail(Currentuser, planPage.GetValue())
}


///til email
window.forsideForm = () => {forsidePage.forsideEmailObject(Currentuser)}


window.Godkend = () => {
    planPage.Godkend(Currentuser, login)

} 





window.pageChange = () => {
    if (window.innerWidth < 800) {
        toggleBrugermenuFunk();
    }
    spaService.pageChange();
    if (window.location.hash != "#AdminPage" && window.location.hash != "#ProfilPage") {
        document.getElementById("navbar").classList.remove("tabbar-black")
        document.getElementById("footerfoot").classList.remove("footerfoot-Hide")
    } else {
        document.getElementById("navbar").classList.add("tabbar-black")
        document.getElementById("footerfoot").classList.add("footerfoot-Hide")
    }
}
window.logout = () => login.logout(planPage);
window.login = () => login.login();
window.toggleShowHide = () => adminPage.toggleShowHide();
// window.SendUserData = () => {
//     userdata.send(Currentuser, planPage.GetValue()) 
//     userdata.sendemail(Currentuser, planPage.GetValue())

// } 
window.onclickPlus = () => {profilPage.onclickPlus()}

window.onclickCross = () => {profilPage.onclickCross()}
window.onclick = (event) => { profilPage.onclickWindowClose(event)}
window.Opencamera = () => { cameraService.Opencamera()}
window.lukcamera = () => {cameraService.lukcamera()}
window.tagbillede = () => {cameraService.tagbillede()}
window.acceptbillede = () => {cameraService.acceptbillede(Currentuser)}
window.previewImage = (file) => {cameraService.uploadFileImg(file)}
window.closeLogin = () => 
    {
        if (event.target == document.getElementById("loginScreen")) {
        login.closeLogin();
        }
    }
window.gembillede = () => {cameraService.Gemurl(Currentuser)}


window.uploadPDF = (userID, FormName, Fileindex) => upload.uploadPDF(userID, FormName, Fileindex, userdata);
window.AddsliderController = (phone) => planPage.AddsliderController(phone);
window.setActive = (nr) => planPage.setActive(nr);

window.setObjectValues = (val, type, abonnement) => planPage.setObjectValues(val, type, abonnement);



window.acceptRequest = (userID, FormName) => adminPage.acceptRequest(userID, FormName, userdata);


window.popupForm = (index) => adminPage.popupForm(index);
window.popupForm3 = (index) => profilPage.popupForm3(index);
window.removePopupForm = () => adminPage.removePopupForm();
window.removePopupForm2 = () => planPage.removePopupForm2();
window.removePopupForm3 = () => profilPage.removePopupForm3();


window.setUserTlf = () => profilPage.setUserTlf(Currentuser);

window.setTlfNr = () => profilPage.setTlfNr();


window.changeChosenFIle = (da) => adminPage.changeChosenFIle(da);

window.setpage = (page) => spaService.setpage(page)





window.toggleBrugermenu = () => {
    toggleBrugermenuFunk();
}

function toggleBrugermenuFunk() {
    document.getElementById("navbar").classList.toggle("tabbar-active")
}

// Watchers --> after login specifiks
firebase.auth().onAuthStateChanged(user => {
    // logged in
    if (user) {
        Currentuser = user;

        let Users = firebase.database().ref('/users/' + user.uid);
        let admins = firebase.database().ref('/admins/');

        if (planPage.LoginIsPending()) {
            planPage.Godkend(Currentuser, login)
        }

        document.getElementById("loginButtWrap").innerHTML = `<a class="tabbar--item loginButt" onclick="logout()">Log ud</a>`
        login.closeLogin();

        admins.once('value', (snapshot) => {
            Users.once('value', (snapshotUser) => {
                let admins = snapshot.val().split(",")
                if (admins.includes(user.email)) {
                    adminPage.init(admins)
                    IsAdmin = true;
                }
                if (!snapshotUser.exists()) {
                    console.log("first time")
                    login.FirstTimelogin(user)
                } else {
                    console.log("old boi")
                }
                profilPage.init(user)
                spaService.init(true);
                document.getElementById("horizontalBLhidden").classList.add("horizontalBreakLine")
            })
        })
    // ikke logged in
    } else {

        for (let page of document.querySelectorAll(".page")) {
            page.classList.remove("pageActive")
          }
          spaService.setActiveTab(location.href)

        document.getElementById("loginButtWrap").innerHTML = `<a class="tabbar--item loginButt" onclick="login()">log in</a>`
        document.getElementById("horizontalBLhidden").classList.remove("horizontalBreakLine")
        login.startAuthUI();
        if (Currentuser) {
            profilPage.unInit()
            if (IsAdmin) {
                adminPage.unInit()
            }
        }
        Currentuser = null;
        IsAdmin = null;
    }
    spaService.init();
})
