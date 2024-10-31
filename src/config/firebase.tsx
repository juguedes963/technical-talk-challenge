
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { ENV } from "../environment";

const firebaseConfig = {
    apiKey: ENV.apiKey,
    authDomain: ENV.authDomain,
    projectId: ENV.projectId,
    storageBucket: ENV.storageBucket,
    messagingSenderId: ENV.messagingSenderId,
    appId: ENV.appId,
    measurementId: ENV.measurementId
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export {
    app,
    auth,
    database
};
