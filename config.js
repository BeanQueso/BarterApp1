import firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyCPEfKuRZYoT_uvn_p3_0a-dyu0-L4KVEs",
    authDomain: "barterapp-e9f12.firebaseapp.com",
    projectId: "barterapp-e9f12",
    storageBucket: "barterapp-e9f12.appspot.com",
    messagingSenderId: "254716412377",
    appId: "1:254716412377:web:604c3416b43afa606c19c8"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
