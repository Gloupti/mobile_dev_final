/* =================================================================
 INITIALIZE FIREBASE/FIRESTORE AUTH and DB
==================================================================== */
 var config = {
    apiKey: "AIzaSyCQmM_RtgX_HFyC7UFgPJzXCSAXW_XO1EI",
    authDomain: "dog-for-starter-1937f.firebaseapp.com",
    databaseURL: "https://dog-for-starter-1937f.firebaseio.com",
    projectId: "dog-for-starter-1937f",
    storageBucket: "dog-for-starter-1937f.appspot.com",
    messagingSenderId: "525793955831"
};
firebase.initializeApp(config);

// make auth on Firebase authentication
const auth = firebase.auth();
// Firestore reference
const db = firebase.firestore();

// update firestore settings
db.settings({ 
    //timestampsInSnapshots: true 
}); 
