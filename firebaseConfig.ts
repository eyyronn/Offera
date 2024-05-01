// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { Firestore, getFirestore, collection } from 'firebase/firestore'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrM8Vej95ejKUNo5dZcti4QEDlDa3Atp4',
  authDomain: 'offera-28538.firebaseapp.com',
  projectId: 'offera-28538',
  storageBucket: 'offera-28538.appspot.com',
  messagingSenderId: '942513498399',
  appId: '1:942513498399:web:68b1982a92a8764d06682a',
  measurementId: 'G-820VXRNW53',
}

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
})
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP, 'gs://offera-28538.appspot.com')

export const usersRef = collection(FIRESTORE_DB, 'users')
export const listingsRef = collection(FIRESTORE_DB, 'listings')
