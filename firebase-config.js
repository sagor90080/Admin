// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtobuqhCLiDIeFmzc8f6ZGupDui5e2iuY",                 // your api key
  authDomain: "admin-8bfb6.firebaseapp.com",         // your auth domain e.g. your-app.firebaseapp.com
  databaseURL: "https://admin-8bfb6-default-rtdb.firebaseio.com",      // e.g. https://your-app-default-rtdb.firebaseio.com
  projectId: "admin-8bfb6",           // your firebase project id
  storageBucket: "admin-8bfb6.firebasestorage.app",   // e.g. your-app.appspot.com
  messagingSenderId: "432275747826",
  appId: "1:432275747826:web:1eec3e1b1ac60e4316716b",
  measurementId: "G-84HSP7VJ41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };
