import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import {initializeApp} from "firebase/app";
import './index.css'


const firebaseConfig = {
  apiKey: "AIzaSyAWKwNYYhIjTfolUxU_ciwDohqia3PEwHA",
  authDomain: "coder-73700.firebaseapp.com",
  projectId: "coder-73700",
  storageBucket: "coder-73700.firebasestorage.app",
  messagingSenderId: "1096552449102",
  appId: "1:1096552449102:web:479bdcce5b262949322f1f"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
