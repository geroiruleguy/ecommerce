import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAtEStSCLbacAPYY2eOYYnl6MfDXoaoKPE",
  authDomain: "prodables-2e186.firebaseapp.com",
  projectId: "prodables-2e186",
  storageBucket: "prodables-2e186.appspot.com",
  messagingSenderId: "781153513020",
  appId: "1:781153513020:web:2052737a743ae8c20edd39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);