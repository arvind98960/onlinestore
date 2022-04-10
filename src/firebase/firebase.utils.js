// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'; 
import 'firebase/auth'; //v8

import 'firebase/firestore'; //v8
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALj5o5F455OgiRdS5G7-dSeVWHJrE8uFA",
  authDomain: "onlinestore-b5d92.firebaseapp.com",
  projectId: "onlinestore-b5d92",
  storageBucket: "onlinestore-b5d92.appspot.com",
  messagingSenderId: "318654763814",
  appId: "1:318654763814:web:39ea930dd2b804d43e67e7",
  measurementId: "G-5ZMMP18224"
}; 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 
