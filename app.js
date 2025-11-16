// Complete Project Details
// ESP32: https://RandomNerdTutorials.com/esp32-firebase-web-app/
// ESP8266: https://RandomNerdTutorials.com/esp8266-nodemcu-firebase-web-app/

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIwLKTs6oVcn44HiGH5MupYxBJSrKND9M",
  authDomain: "test-esp32-8e3be.firebaseapp.com",
  databaseURL: "https://test-esp32-8e3be-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-esp32-8e3be",
  storageBucket: "test-esp32-8e3be.firebasestorage.app",
  messagingSenderId: "62571711874",
  appId: "1:62571711874:web:cac830cf172b5f9c6a139b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database
const database = getDatabase(app);

// Database Paths
const dataFloatPath = 'test/float';
const dataIntPath = 'test/int';
const dataStringPath = 'test/string';

// Get database references
const databaseFloatRef = ref(database, dataFloatPath);
const databaseIntRef = ref(database, dataIntPath);
const databaseStringRef = ref(database, dataStringPath);

// Variables to save database current values
let floatReading;
let intReading;
let stringReading;

// Attach listeners
onValue(databaseFloatRef, (snapshot) => {
    floatReading = snapshot.val();
    console.log("Float reading: " + floatReading);
    document.getElementById("reading-float").innerHTML = floatReading;
});

onValue(databaseIntRef, (snapshot) => {
    intReading = snapshot.val();
    console.log("Int reading: " + intReading);
    document.getElementById("reading-int").innerHTML = intReading;
});

onValue(databaseStringRef, (snapshot) => {
    stringReading = snapshot.val();
    console.log("String reading: " + stringReading);
    document.getElementById("reading-string").innerHTML = stringReading;
});
