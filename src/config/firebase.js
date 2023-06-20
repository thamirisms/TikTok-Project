 
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDHDRaA_YnsmRWNXYOwjg-9AJ1BDiBNIc8",
  authDomain: "tiktok---jornada-3facc.firebaseapp.com",
  projectId: "tiktok---jornada-3facc",
  storageBucket: "tiktok---jornada-3facc.appspot.com",
  messagingSenderId: "911452116168",
  appId: "1:911452116168:web:ea510a4a11d606e21e81fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

export default db; 