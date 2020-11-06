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
    
    login(user) {
        firebase.database().ref('/users/' + user.uid)
        .set({
            email: user.email,
        });
    }

    logout() {
        firebase.auth().signOut()
    }
}

export default Login;
