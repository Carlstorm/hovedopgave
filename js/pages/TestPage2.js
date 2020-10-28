export default class TestPage2 {
  constructor() {
    this.template();
  }

  template() {
      document.getElementById("root").innerHTML += /*html*/ `
      <section id="TestPage2" class="page">
      <p>TestPage2</p>
      <input id="FormInput"></input>
      <button onclick="SendUserData()">send</button>
      </section>`
  }

  GetValue() {
    return document.getElementById("FormInput").value;
  }
}