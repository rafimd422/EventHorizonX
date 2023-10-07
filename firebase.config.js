// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3jS-OYN8rUDyIGnH9Q1mq1UmenC8XOCQ",
  authDomain: "corporate-event-manageme-1b072.firebaseapp.com",
  projectId: "corporate-event-manageme-1b072",
  storageBucket: "corporate-event-manageme-1b072.appspot.com",
  messagingSenderId: "571677452159",
  appId: "1:571677452159:web:80bd7cd1062d816117dc4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth