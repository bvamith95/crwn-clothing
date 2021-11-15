import firebase  from  'firebase/compat/app';
import 'firebase/compat/firestore' ;
import 'firebase/compat/auth'; 

const config = {
    apiKey: "AIzaSyDIYrpWMIvHX_Bt6h4NQkCFDSQ9JYwIDJM",
    authDomain: "crwn-db-4a4fb.firebaseapp.com",
    projectId: "crwn-db-4a4fb",
    storageBucket: "crwn-db-4a4fb.appspot.com",
    messagingSenderId: "964565964302",
    appId: "1:964565964302:web:b162640d2e07ce9d924e5f"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

