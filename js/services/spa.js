class SpaService {
    constructor() {
      this.defaultPage = "#TestPage1";
      this.init();
    }
  
    init() {
      this.pages = document.querySelectorAll(".page");
      this.navItems = document.querySelectorAll(".tabbar a");
      this.setpage(this.defaultPage);
    }

    pageChange() {
      let page = window.location.hash.slice(1);
      this.showPage(page);
    }
  
    showPage(pageId) {
      this.hideAllPages();
      document.querySelector(`#${pageId}`).style.display = "block";
      this.setActiveTab(pageId);
    }

    hideAllPages() {
      for (let page of this.pages) {
        page.style.display = "none";
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
