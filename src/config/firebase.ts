import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVTv8YQaReKmfM5umjejZu_m4asfjFEOM",
  authDomain: "exemplo-autenticacao-ff979.firebaseapp.com",
  projectId: "exemplo-autenticacao-ff979",
  storageBucket: "exemplo-autenticacao-ff979.appspot.com",
  messagingSenderId: "636439393380",
  appId: "1:636439393380:web:402a56da796ff01416db71"
};


const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp