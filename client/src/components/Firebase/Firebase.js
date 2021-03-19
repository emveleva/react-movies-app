import app from "firebase/app"

const config = {
    apiKey: "AIzaSyBW5Z8uTZzgmYbokIAtG7SwOZUSdKZiRBM",
    authDomain: "react-app-121da.firebaseapp.com",
    projectId: "react-app-121da",
    storageBucket: "react-app-121da.appspot.com",
    messagingSenderId: "743250676119",
    appId: "1:743250676119:web:fa27e1cf320363bb1b9cd2"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
    }
}

export default Firebase;