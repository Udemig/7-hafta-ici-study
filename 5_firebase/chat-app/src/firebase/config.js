// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC9OBhzsUFzySfYddnyfB1TqmhxzO9HPIk',
  authDomain: 'hi-chat-f289a.firebaseapp.com',
  projectId: 'hi-chat-f289a',
  storageBucket: 'hi-chat-f289a.appspot.com',
  messagingSenderId: '548298985249',
  appId: '1:548298985249:web:6dd96abebffc41f85af860',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// konsoldaki authenitcaion bölümnün referansını alır
export const auth = getAuth(app);

// google sağlayıcnın referansını alma
export const provider = new GoogleAuthProvider();

// veirtabanın referansını alır
export const db = getFirestore(app);
