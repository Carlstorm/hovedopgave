export default class AdminPage {
  constructor() {
    this.Navitem
    this.ContentWrap
    this.navitem()
    this.contentWrap()
  }

  async databaseContent(userdata) {
   return userdata.get("admin")
    .then(res => {
      return res.map((dada) => {
          return `<p>${dada.data}</p>`
          }).join('')
    })
  }

  navitem() {
    let Navitem = document.createElement("A")
    Navitem.innerHTML = "AdminPage"
    Navitem.href = "#AdminPage";
    this.Navitem = Navitem;
  }

  contentWrap() {
    let ContentWrap = document.createElement("SECTION")
    ContentWrap.innerHTML = `
    <p>Content:</p> 
    <div id="adminData"></div> 
    `
    ContentWrap.setAttribute("id", "AdminPage");
    ContentWrap.classList.add("page")
    this.ContentWrap = ContentWrap;
  }

  async update(userID, userdata) {
    document.getElementById("adminData").innerHTML = "<p>Loading...</p>"
    document.getElementById("adminData").innerHTML = await this.databaseContent(userID, userdata)
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


// ${alluserdata.map((dada) => {
//   return `<p>${dada.data}</p>`
//   }).join('')
// }