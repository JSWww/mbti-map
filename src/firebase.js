import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
	apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
	authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.VUE_APP_FIREABSE_MESSAGINGSENDERID,
	appId: process.env.VUE_APP_FIREBASE_APPID,
};

firebase.initializeApp(config);

export const firebaseDB = firebase.firestore();
export const firebaseStorage = firebase.storage();
