import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxHd7E3wPnO9AECaor6AOnglBPaKgUxTU",
  authDomain: "clone-dfaf2.firebaseapp.com",
  databaseURL: "https://clone-dfaf2.firebaseio.com",
  projectId: "clone-dfaf2",
  storageBucket: "clone-dfaf2.appspot.com",
  messagingSenderId: "960106151999",
  appId: "1:960106151999:web:07f54931474855ecea388a",
  measurementId: "G-6G40W7L8SB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
