  import firebase from 'firebase/app'
  import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyChoLCBrMTap2TkH06gs4PT1OPioRF9h2A",
    authDomain: "evernoteclone-a7207.firebaseapp.com",
    projectId: "evernoteclone-a7207",
    storageBucket: "evernoteclone-a7207.appspot.com",
    messagingSenderId: "806558744837",
    appId: "1:806558744837:web:72da063109ebeb5854f76c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase
