class UserData {
    constructor() {
        this.formType = "Kostplan"
        this.formNr = 1;
        this.sendPath
    }

    send(user, data, formNr) {
        if (!formNr) {
            formNr = "";
        }
        let date = new Date();
        let formName = `${data.plan}${data.type}${date.getFullYear()}${formNr}`
        this.sendPath = firebase.database().ref('/PendingRequests/' + user.uid + `/${formName}/`)
        this.sendPath.once('value', (snapshot) => {
            if (snapshot.exists()) {
                this.formNr++
                let formNrNew = `(${this.formNr})`
                this.send(user, data, formNrNew);
            } else {
                this.formNr = 1;
                this.sendPath.set({
                    formName: formName,
                    date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                    request: data,
                    name: user.displayName,
                    email: user.email,
                    id: user.uid,
                })
                this.UpdateUserForms(true, user);
            }
        })
    }

    UpdateUserForms(state, user) {
        firebase.database().ref('/users/' + user.uid)
        .update({
            pendingForms: state,
        });
    }

    MoveForm(userId, formName, whereFrom) {
        let currentPath = firebase.database().ref(whereFrom + userId + `/${formName}/`)
        let whereTo
     //   console.log(whereFrom)
        if (whereFrom == '/PendingRequests/') {
            whereTo = '/AcceptedRequests/'
        } else {
            whereTo = '/CompletedRequests/'
        }
        currentPath.once('value', (snapshot) => {
    //       console.log(userId, snapshot.val(), formName, null, whereTo);
            this.MoveFormToCompleted(userId, snapshot.val(), formName, null, whereTo);
            currentPath.remove();
       })
    }

    MoveFormToCompleted(userId, formdata, formName, formNr, whereTo) {
      //  console.log(whereTo)
        if (!formNr) {
            formNr = "";
        }
      //  console.log(Object.keys(formdata))
        let sliceIndex = formName.indexOf("(");
        let newFormName;
        if (sliceIndex > 1) {
            newFormName = formName.slice(0, sliceIndex)+formNr;
        } else {
            newFormName = formName+formNr
        }
        this.sendPath = firebase.database().ref(whereTo + userId + `/${newFormName}/`)
        this.sendPath.once('value', (snapshot) => {
            if (snapshot.exists()) {
                this.formNr++
                let formNrNew = `(${this.formNr})`
                this.MoveFormToCompleted(userId, formdata, newFormName, formNrNew, whereTo);
            } else {
                this.formNr = 1;
                let newFormData = formdata;
                newFormData.formName = newFormName;
                newFormData.responseState = true;
                this.sendPath.set(newFormData)
            }
        })
    }
    



    updateState(user, state) {
        firebase.database().ref('/UserData/' + user)
        .update({
            responseState: state,
        });
    }


    ////email php

    sendemail(user, formData)
    {
    
    
    formData.usernavn = user.navn;
    formData.email = user.email;
    
    //console.log(formData);
    
      var jsonObj =  "form=" + (JSON.stringify(formData));
    
      ////////////stringfy object
        // var emailData = new FormData();
        var xhttp = new XMLHttpRequest();
        // emailData.append("email", user.email);
        // emailData.append("navn", user.navn);
     
        // Set POST method and ajax file path
        xhttp.open("POST", "php/kvitteringKunde.php", true);
    
        //xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        // call on request changes state
        xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
             var response = this.responseText;
            console.log(response);
             if(response == 1){
                alert("Email sendt");
                
             }else{
                alert("Woops en fejl");
                
             }
           }
           
        };
        
        // Send request with data
        //xhttp.send(emailData, jsonObj);
        xhttp.send(jsonObj);
        console.log(jsonObj)
        this.sendAdminPlan(user, formData)
        
        }
    
    
    
        sendAdminPlan(user, formData)
        {
        
        formData.usernavn = user.navn;
        formData.email = user.email;
        
        console.log(formData);
        
          var jsonObj =  "form=" + (JSON.stringify(formData));
        
            var xhttp = new XMLHttpRequest();
            // Set POST method and ajax file path
            xhttp.open("POST", "php/adminPlanMail.php", true);
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



    
}

  export default UserData;
