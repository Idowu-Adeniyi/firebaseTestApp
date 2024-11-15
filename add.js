// Documentation
// https://firebase.google.com/docs/database/web/read-and-write

// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getDatabase,
  push,
  serverTimestamp,
  set,
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

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  const name = document.getElementById("name");
  const message = document.getElementById("message");

  const newMessage = push(messages);

  set(newMessage, {
    name: name.value,
    messages: message.value,
    created_at: serverTimestamp(),
  });

  name.value = "";
  message.value = "";
});
