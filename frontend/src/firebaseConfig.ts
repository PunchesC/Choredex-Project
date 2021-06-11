import firebase from "firebase/app";
import "firebase/auth";


var firebaseConfig = {
  apiKey: "AIzaSyAsQmuNnOeFi3kq_zEhYWa2MoAJRx0DAYY",
  authDomain: "choredex.firebaseapp.com",
  projectId: "choredex",
  storageBucket: "choredex.appspot.com",
  messagingSenderId: "1088613946083",
  appId: "1:1088613946083:web:8cf9475c0fdaa9481eebd6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;