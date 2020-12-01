export default class PlanPage {
  constructor() {
    this.slidepercentage
    this.formData = new Object();
    this.prefArray = new Array();
    this.brugerData = new Object();
    this.Aktivitet = new Object();
    this.Mål = new Object();
    this.Pref = new Object();
    this.Trænning = new Object();
    this.template();
  }
  

  template() {
    document.getElementById("root").innerHTML += /*html*/ `
      <section id="Plan" class="page">
      <div class="hero">
      </div>
      <div class="content anies">
        <div class="kvitering"></div>
        <section class="Abonnoment">
        <h3 class="standardHeading">Abonnoment</h3>
          <div class="forløbWrap">
            <div>
            <div class="forløbWrap--item" onclick="setObjectValues(['Kost', 'abonnoment'], ['plan', 'type']); setActive();">
              <div class="forløbWrap--header">
                <div class="forløbWrap--priswrap">
                <div class="forløbWrap--priswrap-goldBox">
                  <p>1200kr</p>
                </div>
                <div class="forløbWrap--priswrap-extraText">
                  <p>herefter 999 pr. måned</p>
                </div>
                </div>
                <span class="forløbWrap--header-bold">Kost</span>
                <span class="forløbWrap--header-norm">Abonnoment</span>
              </div>
              <div class="forløbWrap--content">
              <div>
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 1</p>
              </div>
              <div class="forløbWrap--content-style2">
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 2</p>
              </div>
              <div>
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 3</p>
              </div>
              <div class="forløbWrap--content-style2">
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 4</p>
              </div>
              </div>
            </div>
            </div>
            <div>
            <div class="forløbWrap--item forløbWrap--item-active" onclick="setObjectValues(['KostTrænning', 'abonnoment'], ['plan', 'type']); setActive();">
              <div class="forløbWrap--header">
                <div class="forløbWrap--priswrap">
                <div class="forløbWrap--priswrap-goldBox">
                  <p>1500kr</p>
                </div>
                <div class="forløbWrap--priswrap-extraText">
                  <p>herefter 1200 pr. måned</p>
                </div>
                </div>
                <span class="forløbWrap--header-bold">Kost/trænning</span>
                <span class="forløbWrap--header-norm">Abonnoment</span>
              </div>
              <div class="forløbWrap--content">
              <div>
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 1</p>
              </div>
              <div class="forløbWrap--content-style2">
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 2</p>
              </div>
              <div>
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 3</p>
              </div>
              <div class="forløbWrap--content-style2">
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 4</p>
              </div>
              </div>
            </div>
            </div>
            <div>
            <div class="forløbWrap--item" onclick="setObjectValues(['Trænning', 'abonnoment'], ['plan', 'type']); setActive();">
              <div class="forløbWrap--header">
                <div class="forløbWrap--priswrap">
                <div class="forløbWrap--priswrap-goldBox">
                  <p>1200kr</p>
                </div>
                <div class="forløbWrap--priswrap-extraText">
                  <p>herefter 999 pr. måned</p>
                </div>
                </div>
                <span class="forløbWrap--header-bold">Trænning</span>
                <span class="forløbWrap--header-norm">Abonnoment</span>
              </div>
              <div class="forløbWrap--content">
              <div>
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 1</p>
              </div>
              <div class="forløbWrap--content-style2">
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 2</p>
              </div>
              <div>
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 3</p>
              </div>
              <div class="forløbWrap--content-style2">
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 4</p>
              </div>
              </div>
            </div>
            </div>
            </div>

            <div class="forløbWrap">
            <div class="forløbWrap-small">
            <div class="forløbWrap--item" onclick="setObjectValues(['Kost', 'Plan'], ['plan', 'type']); setActive();">
              <div class="forløbWrap--header">
                <div class="forløbWrap--priswrap">
                <div class="forløbWrap--priswrap-goldBox">
                  <p>500kr</p>
                </div>
                </div>
                <span class="forløbWrap--header-bold">Kost</span>
                <span class="forløbWrap--header-norm">Engangs køb</span>
              </div>
              <div class="forløbWrap--content">
              <div>
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 1</p>
              </div>
              <div class="forløbWrap--content-style2">
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 2</p>
              </div>
              </div>
            </div>
            </div>
            <div class="forløbWrap-small">
            <div class="forløbWrap--item" onclick="setObjectValues(['Trænning', 'Plan'], ['plan', 'type']); setActive();">
              <div class="forløbWrap--header">
                <div class="forløbWrap--priswrap">
                <div class="forløbWrap--priswrap-goldBox">
                  <p>500kr</p>
                </div>
                </div>
                <span class="forløbWrap--header-bold">Trænning</span>
                <span class="forløbWrap--header-norm">Engangs køb</span>
              </div>
              <div class="forløbWrap--content">
              <div>
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 1</p>
              </div>
              <div class="forløbWrap--content-style2">
              <img src="./assets/icons/checkbox.svg">
              <p>værdi 2</p>
              </div>
              </div>
            </div>
            </div>
            </div>
            
        </section>

        <section class="BasisInfo">
        <h3 class="standardHeading">USER INFO</h3>
        <div class="BasisInfoWrap">
        <div id="BrugerData">
          <span>Navn:</span>
          <input onkeyup="(setObjectValues(this.value, 'Navn', 'UserData'))">
        </div>
        <div id="BrugerData">
          <span>Køn:</span>
          <input onkeyup="(setObjectValues(this.value, 'Køn', 'UserData'))">
        </div>
        <div id="BrugerData">
          <span>Fødselsår:</span>
          <input onkeyup="(setObjectValues(this.value, 'Alder', 'UserData'))">
        </div>
        <div id="BrugerData">
          <span>By:</span>
          <input onkeyup="(setObjectValues(this.value, 'By', 'UserData'))">
        </div>
        <div id="BrugerData">
          <span>Adresse:</span>
          <input onkeyup="(setObjectValues(this.value, 'Adresse', 'UserData'))">
        </div>
        <div id="BrugerData">
          <span>Tlf: (valgfrit)</span>
          <input onkeyup="(setObjectValues(this.value, 'Tlf', 'UserData'))">
        </div>
        </section>


        <section class="AktivitetsNivau" id="Aktivitet">
          <h3 class="standardHeading">AktivitetsNivau</h3>
          <div class="AktivitetsNivauWrap">
          <div slider-type="AktivitetErhverv" group-type="Aktivitet" class="AktivitetsNivauWrap--item slider">
            <div class="slider--mainText">
            <p>Aktivitet i arbejde?</p>
            <p class="slider--changeText" data-text="text1,text2,text3,text4,text5">Some value</p>
            </div>
            <div class="slider--secondaryText">
            <p>Lidt</p>
            <p>Meget</p>
            </div>
            <div class="slider--barWrap">
              <div class="slider--bar" id="sliderBar"></div>
              <div class="slider--barThing" id="theThing" onmousedown="AddsliderController()"></div>
            </div>
          </div>
          </div>

          <div class="AktivitetsNivauWrap" id="Aktivitet">
          <div slider-type="AktivitetFritid" group-type="Aktivitet" class="AktivitetsNivauWrap--item slider">
            <div class="slider--mainText">
            <p>Aktivitiet i din fritid?</p>
            <p class="slider--changeText" data-text="text1,text2,text3,text4,text9">Some value</p>
            </div>
            <div class="slider--secondaryText">
            <p>Lidt</p>
            <p>Meget</p>
            </div>
            <div class="slider--barWrap">
              <div class="slider--bar" id="sliderBar"></div>
              <div class="slider--barThing" id="theThing" onmousedown="AddsliderController()"></div>
            </div>
          </div>
          </div>
          <div class="SygdommeWrapper">
          <div class="SygdommeWrapper--item">
              <h4 class="smallerHeading">Mere daglig motions informaton?</h4>
             <textarea onkeyup="(setObjectValues(this.value, 'AktivitetAndet', 'Aktivitet'))"></textarea>
           </div>
        </div>
        </section>


        <section class="mål">
        <h3 class="standardHeading">goal</h3>
         <div class="GoalWrapper">
             <div class="GoalWrapper--item" >
              	<h4 class="smallerHeading">Skriv lidt om dine mål</h4>
               <textarea onkeyup="(setObjectValues(this.value, 'Mål', 'Mål'))"> </textarea>
            </div>
                <div class="GoalWrapper--item">
                <h4 class="smallerHeading">Vægttabsmål</h4>
                   <input onkeyup="(setObjectValues(this.value, 'MålVægt', 'Mål'))">
                </div>      
         </div>
        </section>


        <section class="KostPreferencer">
        <h3 class="standardHeading">KostPreferencer</h3>
          <div class="KostPreferencerWrapper">
          <h4 class="smallerHeading">Din kost:</h4>
            <div class="KostPreferencerWrapper--itemflex">
              <div class="KostPreferencerWrapper--itemflex--inner" onclick="(setObjectValues('Ingen fisk', 'pref', 'KostKrav'))"><p>Ingen fisk</p></div>
              <div class="KostPreferencerWrapper--itemflex--inner" onclick="(setObjectValues('Ingen æg', 'pref', 'KostKrav'))"><p>Ingen æg</p></div>
              <div class="KostPreferencerWrapper--itemflex--inner" onclick="(setObjectValues('Ingen skaldyr', 'pref', 'KostKrav'))"><p>Ingen skaldyr</p></div>
              <div class="KostPreferencerWrapper--itemflex--inner" onclick="(setObjectValues('Ingen gluten', 'pref', 'KostKrav'))"><p>Ingen gluten</p></div>
              <div class="KostPreferencerWrapper--itemflex--inner" onclick="(setObjectValues('Ingen gris', 'pref', 'KostKrav'))"><p>Ingen gris</p></div>
              <div class="KostPreferencerWrapper--itemflex--inner" onclick="(setObjectValues('Ingen lactose', 'pref', 'KostKrav'))"><p>Ingen lactose</p></div>
              <div class="KostPreferencerWrapper--itemflex--inner" onclick="(setObjectValues('vegetar', 'pref', 'KostKrav'))"><p>vegetar</p></div>
              <div class="KostPreferencerWrapper--itemflex--inner" onclick="(setObjectValues('veganer', 'pref', 'KostKrav'))"><p>veganer</p></div>
           </div>
           <h4 class="smallerHeading">Andet?:</h4>
           <div class="KostPreferencerWrapper--item">
               <textarea onkeyup="(setObjectValues(this.value, 'prefExtra', 'KostKrav'))"> </textarea>
               </div>
          </div>
        </section>



        <section class="TreaningsPreferencer">

        <h3 class="standardHeading">Trænning</h3>
        <div class="AktivitetsNivauWrap">
        <div slider-type="TrænningErfaring" group-type="Trænning" class="AktivitetsNivauWrap--item slider">
          <div class="slider--mainText">
          <p>Trænings erfaring?</p>
          <p class="slider--changeText" data-text="text1,text2,text3,text4,text5">Some value</p>
          </div>
          <div class="slider--secondaryText">
          <p>Lidt</p>
          <p>Meget</p>
          </div>
          <div class="slider--barWrap">
            <div class="slider--bar" id="sliderBar"></div>
            <div class="slider--barThing" id="theThing" onmousedown="AddsliderController()"></div>
          </div>
        </div>
        </div>

        <div class="AktivitetsNivauWrap">
        <div slider-type="Trænninghyppighed" group-type="Trænning" class="AktivitetsNivauWrap--item slider">
          <div class="slider--mainText">
          <p>Hvor ofte træner du?</p>
          <p class="slider--changeText" data-text="text1,text2,text3,text4,text9">Some value</p>
          </div>
          <div class="slider--secondaryText">
          <p>Lidt</p>
          <p>Meget</p>
          </div>
          <div class="slider--barWrap">
            <div class="slider--bar" id="sliderBar"></div>
            <div class="slider--barThing" id="theThing" onmousedown="AddsliderController()"></div>
          </div>
        </div>
        </div>
        </section>

      <section class="Sygdomme">
      <h3 class="standardHeading">Sygdomme</h3>
        <div class="SygdommeWrapper">
          <div class ="SygdommeWrapper--item">
              <h4 class="smallerHeading">Er du syg spasser</h4>
             <textarea onkeyup="(setObjectValues(this.value, 'Sygdomme'))"></textarea>
           </div>
        </div>
      </section>

      <section class="Andet">
      <h3 class="standardHeading">Andet</h3>
          <div class="AndetWrapper">
           <div class="AndetWrapper--item">
             <h4 class="smallerHeading">Har du noget andet smukke?</h4>
              <textarea onkeyup="(setObjectValues(this.value, 'Andet'))"></textarea>
          </div>
        </div>
      </section>
     
        <button onclick="SendUserData()" class="SENDPLANBUTT">send</button>
      </section>`;

      this.formdataPreset();
  }

  GetValue() {
    console.log(this.formData)
    return this.formData;
  }



  formdataPreset() {
    this.formData["plan"] = "KostTrænning";
    this.formData["type"] = "abonnoment";



    // sliders
    let Sliders = document.getElementsByClassName("slider");
    for (let i = 0; i<Sliders.length; i++) {
      let textvalues = Sliders[i].children[0].children[1].getAttribute("data-text").split(",");
      let breakpointsArray = []
      let breakpointBase = 100/(textvalues.length-1)
      let breakpoints = Math.round(50 / breakpointBase) * breakpointBase
      for (let i = 0; i<textvalues.length; i++) {
        breakpointsArray.push(breakpointBase*i)
      }
      // this.setSliderText()
    }
  }

  setObjectValues(val, type, group) {
    if (group) {
      if (!this.formData[group]) {
        this.formData[group] = new Object();
      }

      if (type == "pref") {
        event.target.classList.toggle("KostPreferencerWrapper--itemflex--inner-active")
        if (!this.prefArray.includes(val)) {
          this.prefArray.push(val)
        } else {
          this.prefArray.pop(val)
        }
        // this.Pref[type] = this.prefArray;
        this.formData[group][type] = this.prefArray;
      } else {
        this.formData[group][type] = val;
      }
    } else {
      if (Array.isArray(type)) {
        for (let i = 0; i<type.length; i++) {
          this.formData[type[i]] = val[i];
        }
      } else {
        this.formData[type] = val;
      }
    }
    console.log(this.formData)
  }


  setSliderText(breakpointsArray, breakpoints, custTExt, textvalues, sliderType, groupType) {
    for (let i = 0; i<breakpointsArray.length; i++) {
      if (breakpoints == breakpointsArray[i] && custTExt.innerHTML != textvalues[i]) {
        custTExt.innerHTML = textvalues[i]
        setObjectValues(textvalues[i], sliderType, groupType)
      }
    }
  }

  AddsliderController() {
    let barthing = event.target;
    barthing.style.transition = "left 0s"
    let selectedSlider = barthing.parentElement.parentElement
    let sliderType = selectedSlider.getAttribute("slider-type");
    let groupType = selectedSlider.getAttribute("group-type");
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
      this.setSliderText(breakpointsArray, breakpoints, custTExt, textvalues, sliderType, groupType)
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
    let max = (document.getElementById("sliderBar").clientWidth)
    let difference = ((window.innerWidth) - max)/2
    let percentage = 50;
      percentage = (((event.clientX-difference)+8) / (max))*100
    if (percentage > 100) {
      percentage = 100
    } else if (percentage < 0) {
      percentage = 0;
    } else {

    }
    this.slidepercentage = percentage;
    barthing.style.left = `${percentage}%`
  }

setActive(nr) {
  for (let i = 0; i<document.getElementsByClassName("forløbWrap--item").length; i++) {
  document.getElementsByClassName("forløbWrap--item")[i].classList.remove("forløbWrap--item-active")
  }
  event.target.classList.add("forløbWrap--item-active")
  }
}

