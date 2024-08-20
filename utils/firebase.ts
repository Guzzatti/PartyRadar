import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// Se quiser usar outros serviços do Firebase, descomente as importações correspondentes
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY || 'AIzaSyCr9sN-eyPn9VOU-0NGs6buRneZXxwL0II',
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || 'partyradarapprn.firebaseapp.com',
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID || 'partyradarapprn',
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || 'partyradarapprn.appspot.com',
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '899515287174',
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID || '1:899515287174:web:b16c4968f87eb37ddb7307',
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-9XEFWVJ99J',
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Analytics se necessário
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Exporte os serviços do Firebase que você precisa
export { app, analytics };

// Se quiser utilizar outros serviços do Firebase, você pode exportá-los também
// export const auth = getAuth(app);
// export const firestore = getFirestore(app);
// export const storage = getStorage(app);
