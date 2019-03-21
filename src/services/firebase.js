import firebase from 'firebase/app'
import 'firebase/auth'

// Initialize Firebase
let config = {
    apiKey: "AIzaSyCGN8a9Yaw3GL1Bj1YmPrHTrsRJMRBmIXs",
    authDomain: "fir-hub-3a019.firebaseapp.com",
    databaseURL: "https://fir-hub-3a019.firebaseio.com",
    projectId: "fir-hub-3a019",
    storageBucket: "fir-hub-3a019.appspot.com",
    messagingSenderId: "765151449645"
};
firebase.initializeApp(config);

export default firebase

export function logOut() {
    localStorage.removeItem('user')
    return firebase.auth().signOut()
}

export function googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            localStorage.setItem('user', JSON.stringify(res.user))
            return res.user
        })
}