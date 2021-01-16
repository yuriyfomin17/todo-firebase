import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBXs-V70Xzhcs4LRb_G2XjrzOv3uZYo-lc",
    authDomain: "todo-app-30332.firebaseapp.com",
    projectId: "todo-app-30332",
    storageBucket: "todo-app-30332.appspot.com",
    messagingSenderId: "541606807959",
    appId: "1:541606807959:web:2b810614e7500f8ac1dcd2",
    measurementId: "G-ER4CCPSLWS"
})

const db = firebase.firestore()

export default db