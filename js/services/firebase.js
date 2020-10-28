class Firebase {
    constructor() {
        this.init();
    }

    init() {
        let firebaseConfig = {
            apiKey: "AIzaSyAQHI9EkNnxehnw9cwQbolR4uuu9PmmVC0",
            authDomain: "easyfitdatabase.firebaseapp.com",
            databaseURL: "https://easyfitdatabase.firebaseio.com/",
            projectId: "easyfitdatabase",
            storageBucket: "easyfitdatabase.appspot.com",
            messagingSenderId: "278701724148",
            appId: "1:278701724148:web:f9464cef5a0c92968da9a1",
            measurementId: "G-WQ7N1PR58J"
        };
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }
}

export default Firebase;


