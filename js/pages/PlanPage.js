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
        <section class="Abonnoment"></section>
        <section class="Pakker"></section>
        <section class="BasisInfo"></section>
        <section class="AktivitetsNivau"></section>
        <section class="Goal"></section>
        <section class="KostPreferencer"></section>
        <section class="TreaningsPreferencer"></section>
        <section class="Sygdomme"></section>
        <section class="Andet"></section>
        <input id="FormInput">
        <button onclick="SendUserData()">send</button>
      </section>`
  }

  GetValue() {
    return document.getElementById("FormInput").value;
  }

  OnInput() {

  }
}