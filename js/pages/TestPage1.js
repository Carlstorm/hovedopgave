export default class TestPage1 {
  constructor() {
    this.template();
  }
  
  template() {
      document.getElementById("root").innerHTML += /*html*/ `
      <section id="TestPage1" class="page">

      <header>
      <nav class="tabbar" id="navbar">
      <div id="logo"><img src="./assets/logo/main.png"></div>
      <div>
        <a class="tabbar--item" href="#TestPage1">TestPage1</a>
        <a class="tabbar--item" href="#Plan">Plan</a>
      </div>
      </nav>
      </header>

      <p>TestPage1</p>
      </section>`
  }
}