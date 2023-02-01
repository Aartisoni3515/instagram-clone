import firebase from "firebase/compat/app"
// import {getAuth} from "firebse/auth"
// import { auth } from "firebase/auth";

// firebase.initializeApp({
    const firebaseConfig = { 
  apiKey: "AIzaSyBuVcejqpSZ9aiwKFFFk5iytupbLkauyDA",
  authDomain: "instagram-clone-a4022.firebaseapp.com",
  databaseURL: "https://instagram-clone-a4022-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-a4022",
  storageBucket: "instagram-clone-a4022.appspot.com",
  messagingSenderId: "1061955157812",
  appId: "1:1061955157812:web:24caf0de420f6d49796f61",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = getAuth();
const auth = firebase.auth;

const storage = firebase.storage;

export { storage, auth };
