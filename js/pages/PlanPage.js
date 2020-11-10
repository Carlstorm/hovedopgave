export default class PlanPage {
  constructor() {
    this.template();
  }

  template() {
      document.getElementById("root").innerHTML += /*html*/ `
      <section id="Plan" class="page">

      <header>
      <nav class="tabbar" id="navbar">
        <a class="tabbar--item" href="#TestPage1">TestPage1</a>
        <a href="#Plan">Plan</a>
      </nav>
      </header>

      <p>TestPage2</p>
        <section></section>
        <input id="FormInput"></input>
        <button onclick="SendUserData()">send</button>
      </section>`
  }

  GetValue() {
    return document.getElementById("FormInput").value;
  }

  OnInput() {

  }
}