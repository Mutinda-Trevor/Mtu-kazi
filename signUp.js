import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndpassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfRsjKWDfQeQxjDj5uvgDe6_vJXCgdYX8",
    authDomain: "saidika-mtaani.firebaseapp.com",
    databaseURL: "https://saidika-mtaani-default-rtdb.firebaseio.com",
    projectId: "saidika-mtaani",
    storageBucket: "saidika-mtaani.appspot.com",
    messagingSenderId: "204489155173",
    appId: "1:204489155173:web:7c0c4eb478a1496db71c8c",
    measurementId: "G-LLCN210HT1"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
