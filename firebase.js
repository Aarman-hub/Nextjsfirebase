import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

var firebaseConfig = {

  apiKey: "AIzaSyA1j-gOVC1TQA96dfRsK-0j5G_69_pXm04",
  authDomain: "nextjsfirebaseauth-7d5ca.firebaseapp.com",
  projectId: "nextjsfirebaseauth-7d5ca",
  storageBucket: "nextjsfirebaseauth-7d5ca.appspot.com",
  messagingSenderId: "113522454609",
  appId: "1:113522454609:web:2bd8031c7b8a8b83d64870",
  measurementId: "G-60WPTPLGJD"

};

// Initialize Firebase

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

