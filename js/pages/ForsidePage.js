let disdis;
let reviews = [];
let q = 0;

export default class ForsidePage {
  constructor() {
    this.template();
  }
  
  template() {
      document.getElementById("root").innerHTML += /*html*/ `
      <section id="ForsidePage" class="page">
      <div id="heroimage">
    <img src="assets/imgs/scott-webb-0DyZE6aLD-8-unsplash.jpg">
</div>

<div id="custominput">
    <input placeholder="DIT KØN"  id="kønInput"class="inputforside">
    <input placeholder="DIT NAVN"  id="navnInput" class="inputforside">
    <input  placeholder="DIN EMAIL"  id="emailInput" class="inputforside">

    <button onclick="forsideForm()"id="booknu">Kontakt os</button>
</div>

<section class="Abonnoment">
        <h3 class="standardHeading">Bestil et online forløb i dag!</h3>
          <div class="forløbWrap">
            <div>
            <div class="forløbWrap--item">
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
            <div class="forløbWrap--item">
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
            <div class="forløbWrap--item">
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

            
        </section>
        <section class="costumrespons">
        <h3 class="standardHeading">Hvad siger vores kunder</h3>

        <div id="anmeldelsessection">
        <div id="anmendpartOlay"></div>
        <div id="anmendpartboxwrap">
        <img id="reviewImg" src="">   
        <p id="anmeldelsetekst"></p>
        <div id="anmeldelsestars">
</div>
        
        </div>
        </div>
        </div>
        </div>
      
        



        </section>



        <section id="tresteps">
        <h3 class="standardHeading">Hvordan forløber ett forløb ved Easyfit</h3>
</div>
<div class="forsidetalogboks">
    
    <div class="forsideboks">
        <h3>KONTAKT</h3>
        <p>Med et onlineforløb skal vi nok få dig i mål. Du får nemlig alle de redskaber du har brug for, herunder planer til hvor meget mad du skal spise, hvordan du skal træne, og mig som din coach. Med hele denne pakke har du en at stå til ansvar for, en der kan hjælpe dig videre når motivationen er lav og planer, så du ved, at du har gang i det rigtige!</p>
        <div class="tal"><img src="./assets/imgs/1.svg"></div>
        </div>


    <div class="forsideboks">
        <h3>GODKENDELSE</h3>
        <p>Med et onlineforløb skal vi nok få dig i mål. Du får nemlig alle de redskaber du har brug for, herunder planer til hvor meget mad du skal spise, hvordan du skal træne, og mig som din coach. Med hele denne pakke har du en at stå til ansvar for, en der kan hjælpe dig videre når motivationen er lav og planer, så du ved, at du har gang i det rigtige!</p>
        <div class="tal"><img src="./assets/imgs/2.svg"></div>
        </div>


    <div class="forsideboks">
        <h3>DIN PLAN</h3>
        <p>Med et onlineforløb skal vi nok få dig i mål. Du får nemlig alle de redskaber du har brug for, herunder planer til hvor meget mad du skal spise, hvordan du skal træne, og mig som din coach. Med hele denne pakke har du en at stå til ansvar for, en der kan hjælpe dig videre når motivationen er lav og planer, så du ved, at du har gang i det rigtige!</p>
        <div class="tal"><img src="./assets/imgs/3.svg"></div>
        </div>
</div>

</section>

<section class="hvemervi">
<h3 class="standardHeading">Hvem står bag Easyfit</h3>
    <div class="hvemervioverboks">
    
        <div class="inderboks">
            <div class="ansatte1">
            <div class="ansatteimg">
                </div>
            </div>
            <div class="vrstreg"><img src="./assets/imgs/verticalline.svg"></div>
            
            <div class="ansatteinfo">
                <h4>Pradeep hvenegaard</h4>
                <p>Personlig træner & kostvejleder, Pradeep læser pt. hvor målet for den færdige
                uddannelse er en Fysioterapeut uddannelse
                Pradeep har gennem Årene vejledt rigtigt mange. han er super god til de fyrene, der gerne
                vil op i vægt eller være mere tonede, men måske har ramt muren og derfor ikke kan
                komme videre.</p></div>

        </div>
        
    
       
        <div class="inderboks">
            <div class="ansatte2">
            <div class="ansatteimg">
            </div>
            </div>
            <div class="vrstreg"><img src="./assets/imgs/verticalline.svg"></div>
            <div class="ansatteinfo">
                <h4>Linda Lykke</h4>
                <p>Personlig træner & kostvejleder, Linda er selv atlet og har stillet op i bodyfitness flere
                    gange, hvor hun også har trukket flotte medaljer hjem, hun har vejledt og hjulpet rigtig
                    mange med årene.
                    linda er super dygtigt til kvinderne, der ønsker vægttab både store som små flere
                    markeringer eller blot ønsker en sundere livsstil.</p>
            </div>

        </div>
        
    </div>
</section>

<section class="Abonnoment">
        <h3 class="standardHeading">Pakkeløsninger</h3>
          <div class="forløbWrap">
            <div>
            <div class="forløbWrap--item">
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
            <div class="forløbWrap--item">
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
            <div class="forløbWrap--item">
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

            
        </section>
        <section class="Abonnoment">
        <h3 class="standardHeading">Personligtræning</h3>
          <div class="forløbWrap">
            <div>
            <div class="forløbWrap--item" onclick="setObjectValues('kost abonnoment', 'planType'); setActive();">
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
            <div class="forløbWrap--item" onclick="setObjectValues('kost abonnoment', 'planType'); setActive();">
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
            <div class="forløbWrap--item" onclick="setObjectValues('kost abonnoment', 'planType'); setActive();">
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

            
        </section>
        <section class="footer">
<div class="footerflex">
<div class="footerbox">
    <h3>Kontakt info
    </h3>
    <div class="mailogtekst" >
<div class="mail"><img src="./assets/imgs/mail.png"></div>
<div class="tekst"><a>Nikolajegeskov@hotmail.com</a></div>
</div>
<div class="mailogtekst" >
    <div class="mail"><img src="./assets/imgs/images.png"></div>
    <div class="tekst"><a>29719177</a></div>
    </div>
    <div class="mailogtekst">
        <div class="mail"><img src="./assets/imgs/pin.png"></div>
        <div class="tekst"><a>karensvej 20</a></div>
        </div>
    
</div>
<div class="footerbox">
    <h3>Kontakt info
    </h3>
    <div id="socialemedier" >
        
        <div id="facebookfooter"><a href="https://www.facebook.com/easyfit.kostvejledning"><img src="./assets/imgs/facebook.png"></a></div>
        <div id="instagramfooter"><img src="./assets/imgs/instagram.png"></div>
    </div>
</div>
<div class="footerbox">
    <h3>
        Privatlivspolitik 
    </h3>
    <div>adresse</div>
    
    
</div>
</div>

</section>

      </section>
      `
      this.reviews();
      disdis = this;
  }



  forsideEmailObject(user) {


    let formDataForside = {
      navn: document.getElementById('navnInput').value,
      køn: document.getElementById('kønInput').value,
      email: document.getElementById('emailInput').value,
    };
    console.log(formDataForside);

    this.sendforsidePlan(user,formDataForside)
  }


  sendforsidePlan(user, formData)
  {
  
  formData.usernavn = user.navn;
  formData.email = user.email;
  
  console.log(formData);
  
    var jsonObj =  "form=" + (JSON.stringify(formData));
  
      var xhttp = new XMLHttpRequest();
      // Set POST method and ajax file path
      xhttp.open("POST", "php/kontaktMail.php", true);
      xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
      // call on request changes state
      xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
           var response = this.responseText;
          console.log(response);
           if(response == 2){
              alert("Email sendt");
              
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








}





