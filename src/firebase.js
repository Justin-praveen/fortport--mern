import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzeQWBRjkqFLYNZF7lZJ3aH1zdEa9sW7s",
    authDomain: "fortport-331be.firebaseapp.com",
    projectId: "fortport-331be",
    storageBucket: "fortport-331be.appspot.com",
    messagingSenderId: "1078216652215",
    appId: "1:1078216652215:web:6b4313d9c6390ee3262432",
    measurementId: "G-4DPVJQ9MQR"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const sign = fire.auth();

  export default sign;