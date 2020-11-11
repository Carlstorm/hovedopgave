export default class PlanPage {
  constructor() {
    this.template();
    this.slidepercentage
<<<<<<< HEAD
=======
    this.formData = new Object();
    this.prefArray = new Array();
>>>>>>> carl
  }

  template() {
    document.getElementById("root").innerHTML += /*html*/ `
      <section id="Plan" class="page">

      <header>
      
      <nav class="tabbar" id="navbar">
      <div id="logo"><img src="./assets/logo/main.png"></div>
      <div class="navbarItems">
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
            <div class="abonomentWrap--item" onclick="(setObjectValues('kost abonnoment', 'planType'))">
              <div class="abonomentWrap--header"></div>
            </div>
            <div class="abonomentWrap--item abonomentWrap--item-golden" onclick="(setObjectValues('kost/trænning abonnoment', 'planType'))">
              <div class="abonomentWrap--header abonomentWrap--header-golden"></div>
            </div>
            <div class="abonomentWrap--item" onclick="(setObjectValues('trænning abonnoment', 'planType'))">
              <div class="abonomentWrap--header"></div>
            </div>
          </div>
        </section>

        <section class="Pakker">
        <h3>Pakker</h3>
        <div class="PakkeWrap">
          <div class="PakkeWrap--item" onclick="(setObjectValues('kost plan', 'planType'))"> </div>
          <div class="PakkeWrap--item" onclick="(setObjectValues('træning plan', 'planType'))"> </div>
        </div>
        </section>

        //ajjw
        <section class="BasisInfo">
        <h3>USER INFO</h3>
        <div class="BasisInfoWrap">
          <input onkeyup="(setObjectValues(this.value, 'UserInfo-1'))">
          <input onkeyup="(setObjectValues(this.value, 'UserInfo-2'))">
          <input onkeyup="(setObjectValues(this.value, 'UserInfo-3'))">
          <input onkeyup="(setObjectValues(this.value, 'UserInfo-4'))">
          <input onkeyup="(setObjectValues(this.value, 'UserInfo-5'))">
          <input onkeyup="(setObjectValues(this.value, 'UserInfo-6'))">
        </div>
        </section>


        <section class="AktivitetsNivau">
          <h3>AktivitetsNivau</h3>
          <div class="AktivitetsNivauWrap">
<<<<<<< HEAD
          <div class="AktivitetsNivauWrap--item slider">
            <div class="slider--mainText">
            <p>Text Text sometext dkow dk owkd wokd  dkow kdw</p>
=======
          <div slider-type="aktivitetErhverv" class="AktivitetsNivauWrap--item slider">
            <div class="slider--mainText">
            <p>aktivitet i arbejde?</p>
            <p data-text="text1,text2,text3,text4,text5">Some value</p>
>>>>>>> carl
            </div>
            <div class="slider--secondaryText">
            <p>low</p>
            <p>heigh</p>
            </div>
            <div class="slider--barWrap">
              <div class="slider--bar" id="sliderBar"></div>
              <div class="slider--barThing" id="theThing" onmousedown="AddsliderController()"></div>
            </div>
          </div>
          </div>

          <div class="AktivitetsNivauWrap">
<<<<<<< HEAD
          <div class="AktivitetsNivauWrap--item slider">
            <div class="slider--mainText">
            <p>Text Text sometext dkow dk owkd wokd  dkow kdw</p>
=======
          <div slider-type="aktivitetFritid" class="AktivitetsNivauWrap--item slider">
            <div class="slider--mainText">
            <p>aktivitiet i din fritid?</p>
            <p data-text="text1,text2,text3,text4,text9">Some value</p>
>>>>>>> carl
            </div>
            <div class="slider--secondaryText">
            <p>low</p>
            <p>heigh</p>
            </div>
            <div class="slider--barWrap">
              <div class="slider--bar" id="sliderBar"></div>
              <div class="slider--barThing" id="theThing" onmousedown="AddsliderController()"></div>
            </div>
          </div>
          </div>
        </section>


<<<<<<< HEAD
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
=======
        <section class="Goal">
        <h3>Mål</h3>
         <div class="GoalWrapper">
             <div class="GoalWrapper--item" >
              	<h2> Skriv lidt om dine mål </h2>
               <textarea onkeyup="(setObjectValues(this.value, 'goal'))"> </textarea>
            </div>
                <div class="GoalWrapper--item">
                   <h2> vægttabsmål </h2>
                   <input onkeyup="(setObjectValues(this.value, 'goalWeight'))">
>>>>>>> carl
                </div>      
         </div>
        </section>


<<<<<<< HEAD
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
=======
        <section class="KostPreferencer">
        <h3>KostPreferencer</h3>
          <div class="KostPreferencerWrapper">
            <div class="KostPreferencerWrapper--item">
              <div class="KostPreferencerWrapper--item--inner" onclick="(setObjectValues('Ingen fisk', 'pref'))"></div>
              <div class="KostPreferencerWrapper--item--inner" onclick="(setObjectValues('Ingen æg', 'pref'))"></div>
              <div class="KostPreferencerWrapper--item--inner" onclick="(setObjectValues('Ingen skaldyr', 'pref'))"></div>
              <div class="KostPreferencerWrapper--item--inner" onclick="(setObjectValues('Ingen gluten', 'pref'))"></div>
              <div class="KostPreferencerWrapper--item--inner" onclick="(setObjectValues('Ingen gris', 'pref'))"></div>
              <div class="KostPreferencerWrapper--item--inner" onclick="(setObjectValues('Ingen lactose', 'pref'))"></div>
              <div class="KostPreferencerWrapper--item--inner" onclick="(setObjectValues('vegetar', 'pref'))"></div>
              <div class="KostPreferencerWrapper--item--inner" onclick="(setObjectValues('veganer', 'pref'))"></div>
           </div>
           <div class="KostPreferencerWrapper--item">
          	<h2> Mere om din kost? </h2>
               <textarea onkeyup="(setObjectValues(this.value, 'prefExtra'))"> </textarea>
>>>>>>> carl
               </div>
          </div>
        </section>



<<<<<<< HEAD
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
     
=======
        <section class="TreaningsPreferencer">
        <h3>Treanings Preferencer</h3>
        <div class="AktivitetsNivauWrap">
        <div slider-type="experienceTraining" class="AktivitetsNivauWrap--item slider">
          <div class="slider--mainText">
          <p>trænings erfaring?</p>
          <p data-text="text1,text2,text3,text4,text9">Some value</p>
          </div>
          <div class="slider--secondaryText">
          <p>low</p>
          <p>heigh</p>
          </div>
          <div class="slider--barWrap">
            <div class="slider--bar" id="sliderBar"></div>
            <div class="slider--barThing" id="theThing" onmousedown="AddsliderController()"></div>
          </div>
        </div>
        </div>

        <div class="AktivitetsNivauWrap">
        <div slider-type="amountTraining" class="AktivitetsNivauWrap--item slider">
          <div class="slider--mainText">
          <p>hvor ofte træner du?</p>
          <p data-text="text1,text2,text3,text4,text9">Some value</p>
          </div>
          <div class="slider--secondaryText">
          <p>low</p>
          <p>heigh</p>
          </div>
          <div class="slider--barWrap">
            <div class="slider--bar" id="sliderBar"></div>
            <div class="slider--barThing" id="theThing" onmousedown="AddsliderController()"></div>
          </div>
        </div>
        </div>

        <div class="SygdommeWrapper">
          <div class ="SygdommeWrapper--item">
              <h2>Mere daglig motions informaton?</h2>
             <textarea onkeyup="(setObjectValues(this.value, 'aktivitetExtra'))"></textarea>
           </div>
        </div>
        </section>

      <section class="Sygdomme">
      <h3>Sygdomme</h3>
        <div class="SygdommeWrapper">
          <div class ="SygdommeWrapper--item">
              <h2> Er du syg spasser </h2>
             <textarea onkeyup="(setObjectValues(this.value, 'Sygdomme'))"></textarea>
           </div>
        </div>
      </section>
>>>>>>> carl

      <section class="Andet">
      <h3>Andet</h3>
          <div class="AndetWrapper">
           <div class="AndetWrapper--item">
             <h2> Har du noget andet smukke?</h2>
              <textarea onkeyup="(setObjectValues(this.value, 'Andet'))"></textarea>
          </div>
        </div>
      </section>
     
        <button onclick="SendUserData()">send</button>
      </section>`;
  }

  GetValue() {
    console.log(this.formData)
    return this.formData;
  }

  setObjectValues(val, type) {
    if (type == "pref") {
      if (!this.prefArray.includes(val)) {
        this.prefArray.push(val)
        this.formData[type] =  this.prefArray
      } else {
        this.prefArray.pop(val)
      }
    } else {
      this.formData[type] = val;
    }
  
    console.log(this.formData)
  }


  setSliderText(breakpointsArray, breakpoints, custTExt, textvalues, sliderType) {
    for (let i = 0; i<breakpointsArray.length; i++) {
      if (breakpoints == breakpointsArray[i] && custTExt.innerHTML != textvalues[i]) {
        custTExt.innerHTML = textvalues[i]
        setObjectValues(textvalues[i], sliderType)
      }
    }
  }

  AddsliderController() {
    let barthing = event.target;
    barthing.style.transition = "left 0s"
    let selectedSlider = barthing.parentElement.parentElement
    let sliderType = selectedSlider.getAttribute("slider-type");
    let custTExt = selectedSlider.children[0].children[1];
    let textvalues = custTExt.getAttribute("data-text").split(",");
    let breakpointBase = 100/(textvalues.length-1)
    let breakpoints;
    let breakpointsArray = []
    for (let i = 0; i<textvalues.length; i++) {
      breakpointsArray.push(breakpointBase*i)
    }

    let moveEvent = () => {
      this.movemouse(barthing)
      breakpoints = Math.round(this.slidepercentage / breakpointBase) * breakpointBase
      this.setSliderText(breakpointsArray, breakpoints, custTExt, textvalues, sliderType)
    }

    let upEvent = () => {
      window.removeEventListener("mousemove", moveEvent)
      window.removeEventListener("mouseup", upEvent)
      barthing.style.transition = "left 0.6s"
      barthing.style.left = ""+breakpoints+"%"
    }
    window.addEventListener("mousemove", moveEvent)
    window.addEventListener("mouseup", upEvent) 
  }

  movemouse(barthing) {
    let max = document.getElementById("sliderBar").clientWidth
    let difference = ((window.innerWidth) - max)/2
    let percentage = 50;
      percentage = (((event.clientX-difference)+8) / (max))*100
    if (percentage > 100) {
      percentage = 100
    } else if (percentage < 0) {
      percentage = 0;
    }
    this.slidepercentage = percentage;
    barthing.style.left = `${percentage}%`
  }
<<<<<<< HEAD



  AddsliderController() {
    let barthing = event.target;
    barthing.style.transition = "left 0s"
    let moveEvent = () => {
      this.movemouse(barthing)
    }
    let upEvent = () => {
      window.removeEventListener("mousemove", moveEvent)
      window.removeEventListener("mouseup", upEvent)
      barthing.style.transition = "left 0.6s"
      let da = Math.round(this.slidepercentage / 10) * 10
      barthing.style.left = ""+da+"%"
    }
    window.addEventListener("mousemove", moveEvent)
    window.addEventListener("mouseup", upEvent) 
  }

  movemouse(barthing) {
    let max = document.getElementById("sliderBar").clientWidth
    let difference = ((window.innerWidth) - max)/2
    let percentage = 50;
      percentage = (((event.clientX-difference)+8) / (max))*100
    if (percentage > 100) {
      percentage = 100
    } else if (percentage < 0) {
      percentage = 0;
    }
    this.slidepercentage = percentage;
    barthing.style.left = `${percentage}%`
  }
=======
>>>>>>> carl
}


