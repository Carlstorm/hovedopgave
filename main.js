
// import Pages
import TestPage1 from "./js/pages/TestPage1.js";
import PlanPage from "./js/pages/PlanPage.js";
import ProfilPage from "./js/pages/ProfilPage.js"
import AdminPage from "./js/pages/AdminPage.js";

// import Services
import SpaService from "./js/services/spa.js";
import Firebase from "./js/services/firebase.js";
import Login from "./js/services/login.js";
import UserData from "./js/services/UserData.js"
import Upload from "./js/services/upload.js"

// variables
let Currentuser = null;
let IsAdmin = null;


// inits 
    // Main pages
    let testpage1 = new TestPage1();
    let planPage = new PlanPage();
    let profilPage = new ProfilPage();
    let adminPage = new AdminPage();

    // Services
    new Firebase();
    let userdata = new UserData();
    let spaService = new SpaService();
    let upload = new Upload();
    let login = new Login();


// calls
window.SendUserData = () => userdata.send(Currentuser, planPage.GetValue())
window.pageChange = () => {
    spaService.pageChange();
    if (window.location.hash != "#AdminPage" && window.location.hash != "#ProfilPage") {
        document.getElementById("navbar").classList.remove("tabbar-black")
    } else {
        document.getElementById("navbar").classList.add("tabbar-black")
    }
}
window.logout = () => login.logout();
window.login = () => login.login();
window.toggleShowHide = () => adminPage.toggleShowHide();
window.closeLogin = () => 
    {
        if (event.target == document.getElementById("loginScreen")) {
        login.closeLogin();
        }
    }
window.uploadPDF = (userID, FormName, Fileindex) => upload.uploadPDF(userID, FormName, Fileindex, userdata);
window.AddsliderController = () => planPage.AddsliderController();
window.setActive = (nr) => planPage.setActive(nr);

window.setObjectValues = (val, type, abonnement) => planPage.setObjectValues(val, type, abonnement);



window.acceptRequest = (userID, FormName) => adminPage.acceptRequest(userID, FormName, userdata);


window.popupForm = (index) => adminPage.popupForm(index);
window.removePopupForm = () => adminPage.removePopupForm();



window.changeChosenFIle = (da) => adminPage.changeChosenFIle(da);


// Watchers --> after login specifiks
firebase.auth().onAuthStateChanged(user => {
    // logged in
    if (user) {
        Currentuser = user;

        // let admins = firebase.database().ref('/users/' + user.uid);
        // admins.once('value', (snapshot) => {
        //     if (!snapshot) {
        //         console.log("first time")
        //         login.FirstTimelogin(user)
        //     } else {
        //         console.log("old boi time")
        //     }
        // })

        document.getElementById("horizontalBLhidden").classList.add("horizontalBreakLine")

        document.getElementById("loginButtWrap").innerHTML = `<a class="tabbar--item loginButt" onclick="logout()">Log ud</a>`
        login.closeLogin();

        let admins = firebase.database().ref('/admins/');
        admins.once('value', (snapshot) => {
            let admins = snapshot.val().split(",")
            if (admins.includes(user.email)) {
                adminPage.init(admins)
                IsAdmin = true;
            }
            profilPage.init(user.uid)
            spaService.init();
        })
    // ikke logged in
    } else {

        document.getElementById("loginButtWrap").innerHTML = `<a class="tabbar--item loginButt" onclick="login()">log in</a>`

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
