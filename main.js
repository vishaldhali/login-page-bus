// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBt_EzJiTBrwKxhbpdbJ4emePb4DBBLGfs",
    authDomain: "vishal-login-test.firebaseapp.com",
    projectId: "vishal-login-test",
    storageBucket: "vishal-login-test.appspot.com",
    messagingSenderId: "324602581068",
    appId: "1:324602581068:web:338ee796bfc39c8f0364e9",
    measurementId: "G-5K55TFD6KH"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    if (!email || !password) {
        window.alert("Please fill in both email and password.");
        return;
    }
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.alert("You are Signed Up")
            console.log(result)
            window.location.assign("homepage.html")
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
        window.alert("Please fill in both email and password.");
        return;
    }
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.alert("You are Signed In")
            console.log(result)
            window.location.assign("homepage.html")
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            if (error.code === "auth/user-not-found") {
                window.alert("User not found. Please create a new account or use a registered email.");
            } else {
                window.alert("An error occurred while signing in. Please try again.\n user not found. Please create a new account or use a registered email");
            }
        });
}
