// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArfU8mrYdeKNx5B-9aKKiEvtjNK9ss_fA",
  authDomain: "transformfuture-adf7e.firebaseapp.com",
  projectId: "transformfuture-adf7e",
  storageBucket: "transformfuture-adf7e.firebasestorage.app",
  messagingSenderId: "328563615516",
  appId: "1:328563615516:web:ca555400c3d2b879bcfcd9",
  measurementId: "G-LMC9MBPBT2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


//input 



//submit 
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Signed up');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
})
