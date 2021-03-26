import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBW5Z8uTZzgmYbokIAtG7SwOZUSdKZiRBM",
    authDomain: "react-app-121da.firebaseapp.com",
    projectId: "react-app-121da",
    storageBucket: "react-app-121da.appspot.com",
    messagingSenderId: "743250676119",
    appId: "1:743250676119:web:fa27e1cf320363bb1b9cd2"
  });

export default firebaseConfig;