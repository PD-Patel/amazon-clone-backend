// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCt-Mv-zRyv7wDZ9NPOad1uovLWkukwmCs",
  authDomain: "am-database-007.firebaseapp.com",
  projectId: "am-database-007",
  storageBucket: "am-database-007.appspot.com",
  messagingSenderId: "1090574570358",
  appId: "1:1090574570358:web:0cbbb18d8d5c54cbdb2057",
  measurementId: "G-4C6HZEE1DD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
