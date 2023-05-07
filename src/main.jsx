import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react' 
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBl9v-leMgkBFylTihl7C9v5x5dC_ABK24",
  authDomain: "proyecto1-f3ab6.firebaseapp.com",
  projectId: "proyecto1-f3ab6",
  storageBucket: "proyecto1-f3ab6.appspot.com",
  messagingSenderId: "530679053976",
  appId: "1:530679053976:web:3a71c2729e6c46b0619aed"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
