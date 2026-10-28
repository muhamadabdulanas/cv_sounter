import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB8X7Rk8BXAp1hkEn6VmAk8Ft3cvOiweu0",
  authDomain: "cv-sounter-one-tech.firebaseapp.com",
  projectId: "cv-sounter-one-tech",
  storageBucket: "cv-sounter-one-tech.firebasestorage.app",
  messagingSenderId: "260661126910",
  appId: "1:260661126910:web:60fd1ee8368098386e27af",
  measurementId: "G-PKMWCM929M"
};

const app = initializeApp(firebaseConfig);

export default app;