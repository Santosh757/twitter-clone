import firebase from "firebase";

const firebaseConfig = {
    apiKey: "Your firebase apiKey",
    authDomain: "stwits.firebaseapp.com",
    projectId: "stwits",
    storageBucket: "stwits.appspot.com",
    messagingSenderId: "235715978249",
    appId: "1:235715978249:web:bb4477eb4e35928b57c4d8",
    measurementId: "G-XNBG6FS2DP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
