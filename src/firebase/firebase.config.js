// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBMBDstEpbrlsL5czhJ3VwvyDY9sdkWDIc",
//   authDomain: "bistro-boss-886ba.firebaseapp.com",
//   projectId: "bistro-boss-886ba",
//   storageBucket: "bistro-boss-886ba.appspot.com",
//   messagingSenderId: "929035747165",
//   appId: "1:929035747165:web:d983bfc307618c197a72b4",
// };

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;