// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  onValue,
  ref,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXrJnzPhLoSbpG0tMoYMXeBnFEPsbnjEI",
  authDomain: "fir-testapp-7d6a2.firebaseapp.com",
  projectId: "fir-testapp-7d6a2",
  storageBucket: "fir-testapp-7d6a2.firebasestorage.app",
  messagingSenderId: "759860722997",
  appId: "1:759860722997:web:ad23964206db73cc88207c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Database
const database = getDatabase();
const messages = ref(database, "/messages");

// Load messages on data event
onValue(messages, (snapshot) => {
  // Create a reference
  const ul = document.getElementById("messages");
  ul.replaceChildren();

  // Loop through messeages and add them to the ul
  snapshot.forEach((childSnapshot) => {
    // Fetch the data from the snapshot
    const childData = childSnapshot.val();

    // Create a text node with message and name
    const text = document.createTextNode(
      childData.messages + " ~ " + childData.name
    );

    // Create a li element
    const li = document.createElement("li");

    // Append li and text to the ul
    li.appendChild(text);
    ul.appendChild(li);
  });
});
