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
    
    FirstTimelogin(user) {
        firebase.database().ref('/users/' + user.uid)
        .set({
            email: user.email,
            // navn: user.name
        });
    }

    login() {
        document.getElementById("loginScreen").style.opacity = 1;
        document.getElementById("loginScreen").style.pointerEvents = "inherit";
    }

    closeLogin() {
        // if (event.target == document.getElementById("loginScreen")) {
        //     document.getElementById("loginScreen").style.opacity = 0;
        //     document.getElementById("loginScreen").style.pointerEvents = "none";
        // }
        document.getElementById("loginScreen").style.opacity = 0;
        document.getElementById("loginScreen").style.pointerEvents = "none";
    }

    logout() {
        firebase.auth().signOut()
    }
}

export default Login;
