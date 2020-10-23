// Pages
import TestPage1 from "./js/pages/TestPage1.js";
import TestPage2 from "./js/pages/TestPage2.js";
import TestPage3 from "./js/pages/TestPage3.js";

// import your services
import SpaService from "./js/services/spa.js";


// inits 
    // pages
    let testPage1 = new TestPage1();
    let testPage2 = new TestPage2();
    let testPage3 = new TestPage3();
let spaService = new SpaService();


spaService.init();
window.pageChange = () => spaService.pageChange();
