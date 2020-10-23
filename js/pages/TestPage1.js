export default class TestPage1 {
    constructor() {
      this.template();
    }
  
    template() {
        document.getElementById("root").innerHTML += /*html*/ `
        <section id="TestPage1" class="page">
        <p>TestPage1</p>
        </section>`
    }
}