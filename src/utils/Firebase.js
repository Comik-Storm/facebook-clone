import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCylKyQAxu4t5K03hEh_8IwLK76TQIc4w0",
    authDomain: "facebook-clone-dd501.firebaseapp.com",
    projectId: "facebook-clone-dd501",
    storageBucket: "facebook-clone-dd501.appspot.com",
    messagingSenderId: "246364445190",
    appId: "1:246364445190:web:309275fd89e5af48550187",
    measurementId: "G-HYZ90HM1LP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;