export default class ProfilPage {
    constructor() {
      this.Navitem
      this.ContentWrap
      this.DatabaseContent
      this.navitem()
      this.contentWrap()
    }

    async databaseContent(userID, userdata) {
     return userdata.get("user", userID)
      .then(res => {
        return `<p>${res.data}</p>`
      })
    }

    navitem() {
      let Navitem = document.createElement("A")
      Navitem.innerHTML = "ProfilPage"
      Navitem.href = "#ProfilPage";
      this.Navitem = Navitem;
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

    async update(userID, userdata) {
      document.getElementById("userdata").innerHTML = "<p>Loading...</p>"
      document.getElementById("userdata").innerHTML = await this.databaseContent(userID, userdata)
    }
  
    init(userID, userdata) {
      document.getElementById("navbar").appendChild(this.Navitem)
      document.getElementById("root").appendChild(this.ContentWrap)
      this.update(userID, userdata)
    }

    unInit() {
      document.getElementById("navbar").removeChild(this.Navitem)
      document.getElementById("root").removeChild(this.ContentWrap)
    }
  }
  // await userdata.get("user", userID)
  // .then(res => console.log(res.data))


  // ${

  // <p>${testvalue.data}</p>