import firebase from "firebase/app";
import "firebase/database";

// modificar de acordo com firebase
let  firebaseConfig = {
  apiKey: "AIzaSyDh9p9LxBNW8GaE9n-RNZInJqf4JiAjgGc",
  authDomain: "infnet-firebase.firebaseapp.com",
  projectId: "infnet-firebase",
  storageBucket: "infnet-firebase.appspot.com",
  messagingSenderId: "429050305297",
  appId: "1:429050305297:web:8ded7dc51306cf49f64ab0"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();