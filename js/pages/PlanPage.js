export default class PlanPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById("root").innerHTML += /*html*/ `
      <section id="Plan" class="page">

      <header>
      
      <nav class="tabbar" id="navbar">
      <div id="logo"><img src="./assets/logo/main.png"></div>
      <div>
        <a class="tabbar--item" href="#TestPage1">TestPage1</a>
        <a class="tabbar--item" href="#Plan">Plan</a>
      </div>
      </nav>
      </header>

      <div class="content">
      &{//ABONOMENT}
        <section class="Abonnoment">
        <h3>Abonnoment</h3>
          <div class="abonomentWrap">
            <div class="abonomentWrap--item">
              <div class="abonomentWrap--header"></div>
            </div>
            <div class="abonomentWrap--item abonomentWrap--item-golden">
              <div class="abonomentWrap--header abonomentWrap--header-golden"></div>
            </div>
            <div class="abonomentWrap--item">
              <div class="abonomentWrap--header"></div>
            </div>
          </div>
        </section>

        <section class="Pakker">
        <h3>Pakker</h3>
        <div class="PakkeWrap">
          <div class="PakkeWrap--item"></div>
          <div class="PakkeWrap--item"></div>
        </div>
        </section>

        //ajjw
        <section class="BasisInfo">
        <h3>USER INFO</h3>
        <div class="BasisInfoWrap">
          <input>
          <input>
          <input>
          <input>
          <input>
          <input>
        </div>
        </section>


        <section class="AktivitetsNivau"></section>


        <h3>Mål</h3>
        <section class="Goal">
         <div class="GoalWrapper">
             <div class="GoalWrapper--item" >
              	<h2> Skriv lidt om dine mål </h2>
               <textarea> </textarea>
            </div>
                <div class="GoalWrapper--item">
                   <h2> vægttabsmål </h2>
                   <input>
                </div>      
         </div>
        </section>


        <h3>KostPreferencer</h3>
        <section class="KostPreferencer">
          <div class="KostPreferencerWrapper">
            <div class="KostPreferencerWrapper--item">
              <div class="KostPreferencerWrapper--item--inner"></div>
              <div class="KostPreferencerWrapper--item--inner"></div>
              <div class="KostPreferencerWrapper--item--inner"></div>
              <div class="KostPreferencerWrapper--item--inner"></div>
              <div class="KostPreferencerWrapper--item--inner"></div>
              <div class="KostPreferencerWrapper--item--inner"></div>
              <div class="KostPreferencerWrapper--item--inner"></div>
              <div class="KostPreferencerWrapper--item--inner"></div>
           </div>
           <div class="KostPreferencerWrapper--item">
          	<h2> Skriv lidt om dine mål </h2>
               <textarea> </textarea>
               </div>
          </div>
        </section>



        <section class="TreaningsPreferencer"></section>

      <section class="Sygdomme">
        <div class="SygdommeWrapper">
          <div class ="SygdommeWrapper--item">
              <h2> Er du syg spasser </h2>
             <textarea></textarea>
           </div>
        </div>
      </section>

      <section class="Andet">
          <div class="AndetWrapper">
           <div class="AndetWrapper--item">
             <h2> Har du noget andet smukke?</h2>
              <textarea> </textarea>
          </div>
        </div>
      </section>
     

        <input id="FormInput">
        <button onclick="SendUserData()">send</button>
      </section>`;
  }

  GetValue() {
    return document.getElementById("FormInput").value;
  }

  OnInput() {}
}




