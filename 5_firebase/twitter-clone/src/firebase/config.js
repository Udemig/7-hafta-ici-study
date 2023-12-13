// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDSJNYSxp37w2hlg54v2R2eni96bmLwHOQ',
  authDomain: 'hi-twitter-4f3a5.firebaseapp.com',
  projectId: 'hi-twitter-4f3a5',
  storageBucket: 'hi-twitter-4f3a5.appspot.com',
  messagingSenderId: '776653945417',
  appId: '1:776653945417:web:8de8a177863be538529d98',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth alanın referansını alma
export const auth = getAuth(app);

// google sağlayıcısı oluşturma
export const provider = new GoogleAuthProvider();
