import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCLtB9fEG6rYsRmbfrAmxDTxtLPwzTRx0",
    authDomain: "signal-clone-yt-build-71f0f.firebaseapp.com",
    projectId: "signal-clone-yt-build-71f0f",
    storageBucket: "signal-clone-yt-build-71f0f.appspot.com",
    messagingSenderId: "828602165013",
    appId: "1:828602165013:web:8f4274b1a9e5987132ab1c"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  } else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };

