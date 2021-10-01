
var firebaseConfig = {
  apiKey: "AIzaSyCmI7JOXmx6KONjXYRwTurEOcsW9wHY-Rs",
  authDomain: "contactform-662da.firebaseapp.com",
  projectId: "contactform-662da",
  storageBucket: "contactform-662da.appspot.com",
  messagingSenderId: "890060447067",
  appId: "1:890060447067:web:bc9921267e57b06c624e7e",
  measurementId: "G-E2YWW6L0X5"
};



// Initialize Firebase.
firebase.initializeApp(firebaseConfig);


// Initializing the firebase database.
const database = firebase.database();


//initilize data into database
// function saveData(name, email, phone, message) {
//     firebase.database().ref('message/' + name).set({
//       username: name,
//       useremail: email,
//       userphone : phone,
//       usermessage : message
//     });
// }



// EventListner for form submission.
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


// Inserting data into the database.
function saveData(name, email, phone, message) {
	console.log('I am here')
	database.ref('message/').push().set({
		name: name,
		email: email,
		phone: phone,
		message: message
	});
     
}









