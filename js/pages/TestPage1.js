export default class TestPage1 {
  constructor() {
    this.template();
  }
  
  template() {
      document.getElementById("root").innerHTML += /*html*/ `
      <section id="TestPage1" class="page">

      <header>
      <nav class="tabbar" id="navbar">
        <div id="logo"></div>
        <div>
        <a class="tabbar--item" href="#TestPage1">TestPage1</a>
        <a href="#Plan">Plan</a>
        </div>
      </nav>
      </header>

      <p>TestPage1</p>
      </section>`
  }
}