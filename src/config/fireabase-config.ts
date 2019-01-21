import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCazVmyc6iWTVimtvODbGZ5YuiHbGMXoZw",
  authDomain: "cnow-test.firebaseapp.com",
  databaseURL: "https://cnow-test.firebaseio.com",
  projectId: "cnow-test",
  storageBucket: "cnow-test.appspot.com",
  messagingSenderId: "514646115588"
};

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
