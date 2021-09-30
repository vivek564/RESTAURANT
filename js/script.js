import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCmI7JOXmx6KONjXYRwTurEOcsW9wHY-Rs",
  authDomain: "contactform-662da.firebaseapp.com",
  projectId: "contactform-662da",
  storageBucket: "contactform-662da.appspot.com",
  messagingSenderId: "890060447067",
  appId: "1:890060447067:web:bc9921267e57b06c624e7e",
  measurementId: "G-E2YWW6L0X5"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


//initilize data into database
// function saveData(name, email, phone, message) {
//     firebase.database().ref('message/' + name).set({
//       username: name,
//       useremail: email,
//       userphone : phone,
//       usermessage : message
//     });
// }

//reference message collection
  
var messageRef = firebase.database().ref('message');


//listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);


//submit form

function submitForm(e) {
    e.preventDefault();

    //get values from user
    let name = getInputVal('name');      
    let email = getInputVal('email');  
    let phone = getInputVal('phone');  
    let message = getInputVal('message');  

    //invoke function to save message into database
    saveData(name, email, phone,message);
}

//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;

}

//save data into database

function saveData(name, email, phone, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name : name,
    email : email,
    phone : phone,
    message : message
  });
     
}
























// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyCmI7JOXmx6KONjXYRwTurEOcsW9wHY-Rs",
//     authDomain: "contactform-662da.firebaseapp.com",
//     projectId: "contactform-662da",
//     storageBucket: "contactform-662da.appspot.com",
//     messagingSenderId: "890060447067",
//     appId: "1:890060447067:web:bc9921267e57b06c624e7e",
//     measurementId: "G-E2YWW6L0X5"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// </script>

