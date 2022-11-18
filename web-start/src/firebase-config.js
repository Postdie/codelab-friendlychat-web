/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

/*const config = {
  
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
//import { initializeApp } from "firebase/app";
//const firebaseConfig = {
//apiKey: "AIzaSyBcnJ2ATnbsCqHRuxKC3jELYsuhI5kZ8eU",
//authDomain: "friendlychat-50379.firebaseapp.com",
//projectId: "friendlychat-50379",
//storageBucket: "friendlychat-50379.appspot.com",
//messagingSenderId: "469847416013",
//appId: "1:469847416013:web:78eaab37d1eb38f2fb9d84"
//};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcnJ2ATnbsCqHRuxKC3jELYsuhI5kZ8eU",
  authDomain: "friendlychat-50379.firebaseapp.com",
  projectId: "friendlychat-50379",
  storageBucket: "friendlychat-50379.appspot.com",
  messagingSenderId: "469847416013",
  appId: "1:469847416013:web:78eaab37d1eb38f2fb9d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}