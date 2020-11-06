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
        let formName = `${this.formType}-${date.getFullYear()}${formNr}`
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
                    Type: `${this.formType}`,
                    request: data,
                    name: user.displayName,
                    email: user.email,
                    id: user.uid,
                    responseState: false,
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

    MoveForm(userId, formName) {
        let currentPath = firebase.database().ref('/PendingRequests/' + userId + `/${formName}/`)
        currentPath.once('value', (snapshot) => {
            this.MoveFormToCompleted(userId, snapshot.val(), formName);
            currentPath.remove();
       })
    }

    MoveFormToCompleted(userId, formdata, formName, formNr) {
        if (!formNr) {
            formNr = "";
        }
        console.log(Object.keys(formdata))
        let sliceIndex = formName.indexOf("(");
        let newFormName;
        if (sliceIndex > 1) {
            newFormName = formName.slice(0, sliceIndex)+formNr;
        } else {
            newFormName = formName+formNr
        }
        this.sendPath = firebase.database().ref('/CompletedRequests/' + userId + `/${newFormName}/`)
        this.sendPath.once('value', (snapshot) => {
            if (snapshot.exists()) {
                this.formNr++
                let formNrNew = `(${this.formNr})`
                this.MoveFormToCompleted(userId, formdata, newFormName, formNrNew);
            } else {
                this.formNr = 1;
                let newFormData = formdata;
                newFormData.formName = newFormName;
                newFormData.responseState = true;
                this.sendPath.set(newFormData)
            }
        })
    }
    



    // ikke brugt for nu?
    // get(getmode, UserId) {
    //     //  get current user's data
    //     if (getmode == "user") {
    //         return firebase.database().ref('/UserData/' + UserId).once("value")
    //         .then(snapshot => {
    //             console.log(snapshot.val())
    //             return snapshot.val();
    //         })
    //     } else {
    //     //  get all user's data
    //         return firebase.database().ref('/UserData/').once("value")
    //         .then(snapshot => {
    //             let obj = snapshot.val();
    //             // converter object med objects til array med object
    //             var result = Object.keys(obj).map((key) => obj[key]);
    //             return result;
    //         })
    //     }
    // }

    updateState(user, state) {
        firebase.database().ref('/UserData/' + user)
        .update({
            responseState: state,
        });
    }
}

  export default UserData;
