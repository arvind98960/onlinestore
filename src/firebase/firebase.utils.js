
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyALj5o5F455OgiRdS5G7-dSeVWHJrE8uFA",
  authDomain: "onlinestore-b5d92.firebaseapp.com",
  projectId: "onlinestore-b5d92",
  storageBucket: "onlinestore-b5d92.appspot.com",
  messagingSenderId: "318654763814",
  appId: "1:318654763814:web:39ea930dd2b804d43e67e7",
  measurementId: "G-5ZMMP18224"
}; 
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

