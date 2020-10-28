class UserData {
    constructor() {
    }

    send(user, data) {
        firebase.database().ref('/UserData/' + user.uid)
        .set({
            data: data,
        });
    }

    get(getmode, UserId) {
        //  get current user's data
        if (getmode == "user") {
            return firebase.database().ref('/UserData/' + UserId).once("value")
            .then(snapshot => {
                return snapshot.val();
            })
        } else {
        //  get all user's data
            return firebase.database().ref('/UserData/').once("value")
            .then(snapshot => {
                let obj = snapshot.val();
                // converter object med objects til array med object
                var result = Object.keys(obj).map((key) => obj[key]);
                return result;
            })
        }
    }
  }

  export default UserData;
