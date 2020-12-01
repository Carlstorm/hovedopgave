class SpaService {
    constructor() {
      this.defaultPage = "#Plan";
      this.init();
    }
  
    init(dada) {
      this.pages = document.querySelectorAll(".page");
      this.navItems = document.querySelectorAll(".tabbar a");
      if (!dada) {
        this.setpage(this.defaultPage);
      }
    }

    pageChange() {
      let page = window.location.hash.slice(1);
      if (page == "AdminPage") {
        document.getElementsByClassName("logo")[0].style.display = "none"
      } else {
        document.getElementsByClassName("logo")[0].style.display = "initial"
      }
      this.showPage(page);
    }
  
    showPage(pageId) {
      this.hideAllPages();
      document.querySelector(`#${pageId}`).classList.add("pageActive")
      this.setActiveTab(pageId);
    }

    hideAllPages() {
      for (let page of this.pages) {
        page.classList.remove("pageActive")
      }
    }
  
    setActiveTab(pageId) {
      for (let navItem of this.navItems) {
        if (`#${pageId}` === navItem.getAttribute("href")) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      }
    }

    setpage(page) {
      location.href = page
      this.pageChange()
    }
  }
  export default SpaService;
