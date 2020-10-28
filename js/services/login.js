class Login {
    constructor() {
        this.ui
        this.uiConfig
        this.init();
    }

    init() {
        // init firebaseUi
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        this.uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                  return false;
                }
            },
            signInFlow: 'popup',
            signInOptions: [{
                    requireDisplayName: false
                },
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            ],
        };
    }

    startAuthUI() {
        this.ui.start('#firebaseui-auth-container', this.uiConfig);
    }
    

    // fix så kun sætter værdi når brugeren logger ind for første gang
    login(user) {
        firebase.database().ref('/users/' + user.uid)
        .set({
            email: user.email,
        });
    }

    logout() {
        firebase.auth().signOut()
    }


    isAdmin(user) {
        return firebase.database().ref('/admins/').once("value")
        .then(snapshot => {
            let admins = snapshot.val().split(",")
            if (admins.includes(user.email)) {
                return true;
            }
        })
    }
}

export default Login;
