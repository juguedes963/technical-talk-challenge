
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCj1NPzPLt4pz7qwGgzGUEiw3HNjPAiXtM",
    authDomain: "tallk-79ee7.firebaseapp.com",
    projectId: "tallk-79ee7",
    storageBucket: "tallk-79ee7.appspot.com",
    messagingSenderId: "177407278803",
    appId: "1:177407278803:web:cfafef29a618fcf77d9e26",
    measurementId: "G-MRMW229KWH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
    app,
    auth,
    database
};
