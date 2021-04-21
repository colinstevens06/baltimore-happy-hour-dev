import firebase from 'firebase'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuLOe8sBz907f3z9lVT5i8PSWu_FjyRhI",
  authDomain: "baltimore-happy-hour.firebaseapp.com",
  projectId: "baltimore-happy-hour",
  storageBucket: "baltimore-happy-hour.appspot.com",
  messagingSenderId: "939465418552",
  appId: "1:939465418552:web:f0a54641e0577909ea83cd"
};

try {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase init error', err.stack)
  }
}

const fire = firebase

export default fire;