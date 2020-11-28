export default class TestPage1 {
  constructor() {
    this.template();
  }
  
  template() {
      document.getElementById("root").innerHTML += /*html*/ `
      <section id="TestPage1" class="page">
      <div class="hero"></div>
      <p>TestPage1</p>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>

      </section>`
  }
}