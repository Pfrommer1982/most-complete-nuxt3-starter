// plugins/firebase.js
import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,  GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {      
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        persistence: ['local', 'session'], 

    
      };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const googleProvider = new GoogleAuthProvider(); 
    const githubProvider = new GithubAuthProvider();

    nuxtApp.provide('auth', auth);
    nuxtApp.provide('db', db);
    nuxtApp.provide('googleProvider', googleProvider);

    nuxtApp.provide('githubProvider', githubProvider);
});
