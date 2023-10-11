import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCFwwsALj08_UDDsgMc2qnyjoGd1AIeeME",
    authDomain: "diploma-e0dfb.firebaseapp.com",
    projectId: "diploma-e0dfb",
    storageBucket: "diploma-e0dfb.appspot.com",
    messagingSenderId: "443769989082",
    appId: "1:443769989082:web:f20bcfcfc66902154c42e3",
    measurementId: "G-HNX32SXVZN"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }