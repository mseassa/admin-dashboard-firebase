// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {

    apiKey: 'AIzaSyBDs_U44ZdKiE0FhymY18QwSrjEzaN14Ao',

    authDomain: "auth-crud020922.firebaseapp.com",

    projectId: "auth-crud020922",

    storageBucket: "auth-crud020922.appspot.com",

    messagingSenderId: "805438173365",

    appId: "1:805438173365:web:7144e2d23ab76c24138efc"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth()

export const storage = getStorage(app);
