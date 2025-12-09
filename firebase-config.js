// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUSrGAF-k4R3xEXuRwfqHGmOVUD4ty-JU",                 // your api key
  authDomain: "https://github.com/sagor90080/Admin",         // your auth domain e.g. your-app.firebaseapp.com
  databaseURL: "https://live-tournament-866fc-default-rtdb.firebaseio.com",      // e.g. https://your-app-default-rtdb.firebaseio.com
  projectId: "live-tournament-866fc",           // your firebase project id
  storageBucket: "live-tournament-866fc",   // e.g. your-app.appspot.com
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE",
  measurementId: "YOUR_MEASUREMENT_ID_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };