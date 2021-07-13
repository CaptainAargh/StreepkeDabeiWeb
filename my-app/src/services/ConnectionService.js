import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


export function readData() {
    var config = {
        apiKey: "AIzaSyBTOkylPmbehPBWYVeLpvZO6r9W61jORmg",
        authDomain: "scoutsapp-1cb2b.firebaseapp.com",
        databaseURL: "https://scoutsapp-1cb2b.firebaseio.com",
        projectId: "scoutsapp-1cb2b",
        storageBucket: "scoutsapp-1cb2b.appspot.com",
        messagingSenderId: "817913971802",
        appId: "1:817913971802:web:27e0f6e2b95547a5cec463",
        measurementId: "G-1NHEB9987J"
    };

// Get a reference to the database service
    var database = firebase.database();
    const dbRef = database.ref();
    dbRef.child("periodes").child().get().then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
