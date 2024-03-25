 
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
 
 
const firebaseConfig = {
  apiKey: "AIzaSyAi9qnHu3mC1Pz56AGg9QFY03zNUYgQzoM",
  authDomain: "lets-chat-b60af.firebaseapp.com",
  projectId: "lets-chat-b60af",
  storageBucket: "lets-chat-b60af.appspot.com",
  messagingSenderId: "567837203958",
  appId: "1:567837203958:web:5196ada293c0f1a2edfbd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore()
 