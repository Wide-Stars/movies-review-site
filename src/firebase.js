// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyButxnusMw-jbLTMbjrWkcd1N_b7ZqyM0M",
	authDomain: "movies-review-52201.firebaseapp.com",
	projectId: "movies-review-52201",
	storageBucket: "movies-review-52201.appspot.com",
	messagingSenderId: "141721438528",
	appId: "1:141721438528:web:084a2128aeea00a11592a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }