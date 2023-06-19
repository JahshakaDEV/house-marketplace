import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtlzz7Rc-advDOTTjAsAWbGyvm5FJouPY",
    authDomain: "house-marketplace-app-d0dce.firebaseapp.com",
    projectId: "house-marketplace-app-d0dce",
    storageBucket: "house-marketplace-app-d0dce.appspot.com",
    messagingSenderId: "820166202757",
    appId: "1:820166202757:web:94df496f304ec69d4860ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();