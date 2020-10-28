
// import Pages
import TestPage1 from "./js/pages/TestPage1.js";
import TestPage2 from "./js/pages/TestPage2.js";
import ProfilPage from "./js/pages/ProfilPage.js"
import AdminPage from "./js/pages/AdminPage.js";

// import Services
import SpaService from "./js/services/spa.js";
import Firebase from "./js/services/firebase.js";
import Login from "./js/services/login.js";
import UserData from "./js/services/UserData.js"

// variables
let Currentuser = null;
let IsAdmin = null;


// inits 
    // Main pages
    let testpage1 = new TestPage1();
    let testpage2 = new TestPage2();
    let profilPage = new ProfilPage();
    let adminPage = new AdminPage();

    // Services
    new Firebase();
    let userdata = new UserData();
    let spaService = new SpaService();

    let login = new Login();


// calls
window.SendUserData = () => userdata.send(Currentuser, testpage2.GetValue())
window.pageChange = () => spaService.pageChange();
window.logout = () => login.logout();


// Watchers
firebase.auth().onAuthStateChanged(user => {
    // logged in
    if (user) {
        Currentuser = user;
        login.login(user)

        if (login.isAdmin(user)) {
            IsAdmin = true;
            adminPage.init(userdata)
        }
        profilPage.init(user.uid, userdata)
    // ikke logged in
    } else {
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


