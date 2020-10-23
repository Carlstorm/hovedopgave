export default class TestPage2 {
  constructor() {
    this.template();
  }

  template() {
      document.getElementById("root").innerHTML += /*html*/ `
      <section id="TestPage2" class="page">
      <p>TestPage2</p>
      </section>`
  }
}