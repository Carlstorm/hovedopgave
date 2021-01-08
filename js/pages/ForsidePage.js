let disdis;
let reviews = [];
let q = 0;

export default class ForsidePage {
  constructor() {
    this.template();
    this. cookietjek();
  }
  
  template() {
    document.getElementById("root").innerHTML += /*html*/ `
      <section id="ForsidePage" class="page">
      <div class="hero deskSpec">
      <p class="overskriftmobil">Få en skræddersyet kostplan her</p>
      <button class="buttonmobil" type="button">Planer > </button>
      </div>
      <div class="custominputnew anies">
      <h3 class="standardHeadingFp">Kontakt Os</h3>
        <input placeholder="DIT KØN" id="kønInput">
        <input placeholder="DIT NAVN" id="navnInput">
        <input  placeholder="DIN EMAIL" id="emailInput">
        <div onclick="forsideForm()"class="bookKnapForside"><p>Kontakt os</p></div>
        <p id="thankMsg">Tak! Din mail er sendt.</p>
      </div>


      <div class="bgforside deskSpec"></div>


      <section class="ForsideSection1">
      <div class="content anies">
      <h3 class="standardHeading">Hvad vi kan tilbyde</h3>

      <div class="forløbWrap">


      <div>
      <div class="forløbWrap--item noclick" plan-contentType="Kost" onclick="setObjectValues(['Kost', 'abonnoment'], ['plan', 'type']); setActive();">
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
        <p>Fleksibelt</p>
        </div>
        <div class="forløbWrap--content-style2">
        <img src="./assets/icons/checkbox.svg">
        <p>Din målsætning i fokus</p>
        </div>
        <div>
        <img src="./assets/icons/checkbox.svg">
        <p>Fokus på dine preferencer</p>
        </div>
        <div class="forløbWrap--content-style2">
        <img src="./assets/icons/checkbox.svg">
        <p>Nye kostplaner løbende</p>
        </div>
        </div>
      </div>
      </div>

      <div>
      <div class="forløbWrap--item noclick" plan-contentType="Kost" onclick="setObjectValues(['Kost', 'abonnoment'], ['plan', 'type']); setActive();">
        <div class="forløbWrap--header">
          <div class="forløbWrap--priswrap">
          <div class="forløbWrap--priswrap-goldBox">
            <p>1500kr</p>
          </div>
          <div class="forløbWrap--priswrap-extraText">
            <p>herefter 1200 pr. måned</p>
          </div>
          </div>
          <span class="forløbWrap--header-bold">Kost/Træning</span>
          <span class="forløbWrap--header-norm">Abonnoment</span>
        </div>
        <div class="forløbWrap--content">
        <div>
        <img src="./assets/icons/checkbox.svg">
        <p>træningsprogram og kostvejledning</p>
        </div>
        <div class="forløbWrap--content-style2">
        <img src="./assets/icons/checkbox.svg">
        <p>Skradersyet for dig</p>
        </div>
        <div>
        <img src="./assets/icons/checkbox.svg">
        <p>Fokus på din målsætning</p>
        </div>
        <div class="forløbWrap--content-style2">
        <img src="./assets/icons/checkbox.svg">
        <p>Nye kost -og træningsprogrammer</p>
        </div>
        </div>
      </div>
      </div>

      <div>
      <div class="forløbWrap--item noclick" plan-contentType="Kost" onclick="setObjectValues(['Kost', 'abonnoment'], ['plan', 'type']); setActive();">
        <div class="forløbWrap--header">
          <div class="forløbWrap--priswrap">
          <div class="forløbWrap--priswrap-goldBox">
            <p>1200kr</p>
          </div>
          <div class="forløbWrap--priswrap-extraText">
            <p>herefter 999 pr. måned</p>
          </div>
          </div>
          <span class="forløbWrap--header-bold">Træning</span>
          <span class="forløbWrap--header-norm">Abonnoment</span>
        </div>
        <div class="forløbWrap--content">
        <div>
        <img src="./assets/icons/checkbox.svg">
        <p>Varieret trænning</p>
        </div>
        <div class="forløbWrap--content-style2">
        <img src="./assets/icons/checkbox.svg">
        <p>Fokus på din målsætning</p>
        </div>
        <div>
        <img src="./assets/icons/checkbox.svg">
        <p>Videoer og øvelser</p>
        </div>
        <div class="forløbWrap--content-style2">
        <img src="./assets/icons/checkbox.svg">
        <p>Nye trænningsplaner løbende</p>
        </div>
        </div>
      </div>
      </div>
      </div>
      </section>

      <section class="Reviews">
      <div class="content anies">
      <h3 class="standardHeading">Hvad siger tidligere kunder</h3>
        <div id="anmeldelsessection">
          <div id="anmendpartboxwrap">
            <img id="reviewImg" src="">
            <div class="review-contentWrap">
            <p id="anmeldelsetekst"></p>
            <div class="reviewHline"></div>
            <div id="anmeldelsestars">
            </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section class="process">
      <div class="content anies">
      <h3 class="standardHeading">Hvordan er et forløb ved Easyfit?</h3>
        <div class="prossesWrap">



        <div class="prossesWrap-main">
          <div class="prossesWrap-header">
            <h5>Kontakt</h5>
          </div>
          <div class="prossesWrap-content">
          <p>Så snart du tager kontakt til os vil vi tage en snak omkring dine præferencer. Du kan både kontakte os over Email ved at udfylde formen i toppen, eller udfylde formen på plan siden. Vi skal bruge disse informationer til at vi kan nå dine mål sammen, om det er vægttab eller muskelopbygning. Vi bruger informationerne til og lave den bedste kostplan eller træningsplan, som er skræddersyet efter dine behov!</p>
          <img src="./assets/imgs/1.svg">
          </div>
        </div>




        <div class="prossesWrap-main">
        <div class="prossesWrap-header">
        <h5>Godkendelse</h5>
        </div>
        <div class="prossesWrap-content">
        <p>Så snart vi har set din plan fra kigger vi den igennem og tjekker om vi har alt den information som vi skal bruge. Derefter sender vi dig en godkendelse på Email, samtidig med at vi begynder og lave din skræddersyet kostplan eller træningsplan.</p>
        <img src="./assets/imgs/2.svg">
        </div>
        </div>




        <div class="prossesWrap-main">
        <div class="prossesWrap-header">
        <h5>Din plan</h5>
        </div>
        <div class="prossesWrap-content">
        <p>Så snart at vi har gennemarbejde vores skræddersyet kostplan eller træningsplan til dig, sender vi dig en E-mail med din helt nye personlige plan, derudover kan du altid tjekke, og hente din færdige plan på Profilsiden.</p>
        <img src="./assets/imgs/3.svg">
        </div>
        </div>



        </div>
      </div>
      </section>

      <section class="Om os">
      <div class="content anies">
      <h3 class="standardHeading">Om os</h3>
          <div class="omWrap">
          <div class="omWrap-main">
            <div class="omWrap-img-1"></div>
            <div class="omWrap-Hline"></div>
            <div class="omWrap-textbox">
              <p>Pradeep hvenegaard<p>
              <br>
              <p> Personlig træner & kostvejleder, Pradeep læser pt. hvor målet for den færdige uddannelse er en Fysioterapeut uddannelse Pradeep har gennem Årene vejledt rigtigt mange. han er super god til de fyrene, der gerne vil op i vægt eller være mere tonede, men måske har ramt muren og derfor ikke kan komme videre. </p>
            </div>
            </div>

            <div class="omWrap-main">
            <div class="omWrap-img-2"></div>
            <div class="omWrap-Hline"></div>
            <div class="omWrap-textbox">
              <p>Linda Lykke<p>
              <br>
              <p> Personlig træner & kostvejleder, Linda er selv atlet og har stillet op i bodyfitness flere gange, hvor hun også har trukket flotte medaljer hjem, hun har vejledt og hjulpet rigtig mange med årene. linda er super dygtigt til kvinderne, der ønsker vægttab både store som små flere markeringer eller blot ønsker en sundere livsstil. </p>
            </div>
            </div>
          </div>
      </div>
      </section>
      </section>
      `
      this.reviews();
      disdis = this;
  }





  forsideEmailObject() {


    let formDataForside = {
      Navn: document.getElementById('navnInput').value,
      Køn: document.getElementById('kønInput').value,
      Email: document.getElementById('emailInput').value,
    };
    console.log(formDataForside);

    this.sendforsidePlan(formDataForside)
  }


  sendforsidePlan(formDataForside)
  {
  
  
  //console.log(formDataForside);
  
    var jsonObj =  "form=" + (JSON.stringify(formDataForside));
  
      var xhttp = new XMLHttpRequest();
      // Set POST method and ajax file path
      xhttp.open("POST", "php/kontaktMail.php", true);
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
      // call on request changes state
      xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           var response = this.responseText;
          console.log(response);
           if(response == 3){
             //animatemsg
      
      //document.getElementById("thankMsg").classList.add('thanksMsgAnimate');
      document.getElementById("thankMsg").classList.add('thanksMsgAnimate');
            ///clear values
       document.getElementById('navnInput').value="";
       document.getElementById('kønInput').value="";
       document.getElementById('emailInput').value="";

          
              
           }else{
             alert("Woops en fejl");
              ///Reset
             // document.getElementById("thankMsg").classList.add('thanksMsgAnimate');
             
              
           }
         }
      };
      
      xhttp.send(jsonObj);
      this.sendvelkosmt(formDataForside);
      console.log(jsonObj)
      
      }



      sendvelkosmt(formDataForside)
      {
      
      
      //console.log(formDataForside);
      
        var jsonObj =  "form=" + (JSON.stringify(formDataForside));
      
          var xhttp = new XMLHttpRequest();
          // Set POST method and ajax file path
          xhttp.open("POST", "php/velkomstMail.php", true);
          xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          
          // call on request changes state
          xhttp.onreadystatechange = function() {
             if (this.readyState == 4 && this.status == 200) {
               var response = this.responseText;
              console.log(response);
               if(response == 4){
                  console.log("Email sendt");
                  
               }else{
                  alert("Woops en fejl");
                  
               }
             }
          };
          
          xhttp.send(jsonObj);
          console.log(jsonObj)
          
          }
    










      ////////flexslider


      reviews() {
        fetch("./json/reviews.json")
          .then((Response) => {
           // console.log(Response);
            return Response.json();
          
          })
          .then(function (json) {
            reviews = json;
            //tekst
            document.getElementById("anmeldelsetekst").innerHTML =
              reviews[q].review;

              //immage 
              document.getElementById("reviewImg").src =
              reviews[q].imgpath;


            for (let i = 0; i < reviews[q].stjerner; i++) {
              document.getElementById(
                "anmeldelsestars"
              ).innerHTML += `<div><img src="./assets/imgs/starr.svg"></div>
              
              `;
            }
            setTimeout(() => {
              document
                .getElementById("anmendpartboxwrap")
                .classList.remove("reviewenter");
              document
                .getElementById("anmendpartboxwrap")
                .classList.add("reviewleave");
              setTimeout(() => {
                if (q + 1 < reviews.length) {
                  q++;
                } else {
                  q = 0;
                }
                disdis.__proto__.reviews();
    
                document
                  .getElementById("anmendpartboxwrap")
                  .classList.remove("reviewleave");
                document
                  .getElementById("anmendpartboxwrap")
                  .classList.add("reviewenter");
                document.getElementById("anmeldelsestars").innerHTML = "";
              }, 750);
            }, 10000);
          });
      }




      cookietjek(){
        const cookieStorage = {
    
          //hent cookie objectet og map over det.
          getItem: (item) => {
              console.log(document.cookie)
              const cookies = document.cookie
                  .split(';')
                  .map(cookie => cookie.split('='))
                  .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
              return cookies[item];
          },
          //set item key value par i funktion
          setItem: (item, value) => {
              document.cookie = `${item}=${value};`
          }
        }
        
        ///hvilken type storage vi bruger lokal cookie storage 
        const storageType = cookieStorage;
        const consentPropertyName = 'Easy_fit_cookie';
        
        ///Tjek om lokale database har cookies
        const shouldShowPopup = () => storageType.getItem(consentPropertyName);
    
        //gem objektet i cookie store, når der klikkes på acceptknappen
        const saveToStorage = () => storageType.setItem(consentPropertyName, true);
        
       
          
        
        //event listner til knappen
          const acceptCookie = event => {
              saveToStorage(storageType);
              //toogle scss class
              consentPopup.classList.add('hide-cookie');
    
              console.log(cookieStorage);
          }
          const consentPopup = document.getElementById('accept-popup');
          const acceptBtn = document.getElementById('accept');
          acceptBtn.addEventListener('click', acceptCookie);
        
          if (shouldShowPopup(storageType)) {
            console.log("vi tester")
            consentPopup.classList.add('hide-cookie');
          }
        
        
      };




}





