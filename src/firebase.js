// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBcMPLaamzSVZVcubmuHDT7kklb2pWN930",
	authDomain: "movie-review-pro.firebaseapp.com",
	projectId: "movie-review-pro",
	storageBucket: "movie-review-pro.appspot.com",
	messagingSenderId: "976969512214",
	appId: "1:976969512214:web:a831c55e5f59fad608cc37",
	measurementId: "G-8BTLS5DH3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db }