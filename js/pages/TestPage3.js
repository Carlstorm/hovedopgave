export default class TestPage3 {
  constructor() {
    this.template();
  }

  template() {
      document.getElementById("root").innerHTML += /*html*/ `
      <section id="TestPage3" class="page">
      <p>TestPage3</p>
      </section>`
  }
}