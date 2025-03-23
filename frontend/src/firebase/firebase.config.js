// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtV0789UA7DTaitOju5yF4T9Pg0BO0Jds",
  authDomain: "book-app-b1343.firebaseapp.com",
  projectId: "book-app-b1343",
  storageBucket: "book-app-b1343.firebasestorage.app",
  messagingSenderId: "800008088518",
  appId: "1:800008088518:web:917dc39a2e8f923e31a0c7",
  measurementId: "G-8792HCYFKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);  // Initialize the auth service

// Export the app and auth object for use in other parts of your app
export { app, auth, analytics };
