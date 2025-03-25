// // Import the necessary Firebase modules
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";  // Import Firebase Authentication

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDtV0789UA7DTaitOju5yF4T9Pg0BO0Jds",
//   authDomain: "book-app-b1343.firebaseapp.com",
//   projectId: "book-app-b1343",
//   storageBucket: "book-app-b1343.firebasestorage.app",
//   messagingSenderId: "800008088518",
//   appId: "1:800008088518:web:917dc39a2e8f923e31a0c7",
//   measurementId: "G-8792HCYFKP"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firebase Authentication
// const auth = getAuth(app);  // Initialize the auth service

// // Export the app and auth object for use in other parts of your app
// export { app, auth, analytics };




import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC4F0-0xIAU7wwXwaq2rUhjQwPTT4KjIA",
  authDomain: "new-app-9a1db.firebaseapp.com",
  projectId: "new-app-9a1db",
  storageBucket: "new-app-9a1db.firebasestorage.app",
  messagingSenderId: "1007366058831",
  appId: "1:1007366058831:web:acf630b3f044b35bcb4b3a",
  measurementId: "G-ETXF3WWZFS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);  // Initialize the auth service

// Export the app and auth object for use in other parts of your app
export { app, auth, analytics };

