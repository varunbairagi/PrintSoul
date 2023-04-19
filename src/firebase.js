import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyALDnxRz6brW5Vo-vmksL06CYJYU5eC-qs",
  authDomain: "ecommerce-ff591.firebaseapp.com",
  projectId: "ecommerce-ff591",
  storageBucket: "ecommerce-ff591.appspot.com",
  messagingSenderId: "845670462917",
  appId: "1:845670462917:web:d391e12685178723f987ac",
  measurementId: "G-PGLXHEKRN3"
};


var app=firebase.initializeApp(firebaseConfig);
export default app;
export const auth = firebase.auth();
export const provider=new firebase.auth.GoogleAuthProvider();
