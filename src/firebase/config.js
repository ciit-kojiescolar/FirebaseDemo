import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDM2cogZWDuLkk2-dQ0X5o7NncxJOgMNfQ",
  authDomain: "fir-project-3d679.firebaseapp.com",
  projectId: "fir-project-3d679",
  storageBucket: "fir-project-3d679.appspot.com",
  messagingSenderId: "655122527695",
  appId: "1:655122527695:web:2a66d064c3ce93d035ceba",
  //measurementId: "G-GHFV92Z8B9"
};

  initializeApp(firebaseConfig);

  export const auth=getAuth();

  const db = getFirestore();

  export {db}