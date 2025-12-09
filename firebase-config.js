// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtobuqhCLiDIeFmzc8f6ZGupDui5e2iuY",
  authDomain: "admin-8bfb6.firebaseapp.com",
  databaseURL: "https://admin-8bfb6-default-rtdb.firebaseio.com",
  projectId: "admin-8bfb6",
  storageBucket: "admin-8bfb6.firebasestorage.app",
  messagingSenderId: "432275747826",
  appId: "1:432275747826:web:1eec3e1b1ac60e4316716b",
  measurementId: "G-84HSP7VJ41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Export the initialized services
export { app, analytics, db };
