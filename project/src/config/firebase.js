
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


  const firebaseConfig = {
  apiKey: "AIzaSyDnogzDqs2EkjIGQbLBK0sikZ0oi1t2k5g",
  authDomain: "react-app-5cbdd.firebaseapp.com",
  databaseURL: "https://react-app-5cbdd-default-rtdb.firebaseio.com",
  projectId: "react-app-5cbdd",
  storageBucket: "react-app-5cbdd.appspot.com",
  messagingSenderId: "243133390317",
  appId: "1:243133390317:web:39c87f30c7482e3e931be4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)