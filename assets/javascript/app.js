$(document).ready(function(){

    $('.parallax').parallax();

    $('.slider').slider();

    $('.sidenav').sidenav();

    $('.materialboxed').materialbox();

    var firebaseConfig = {
        apiKey: "AIzaSyA9mlENUrhKwjTIuLQ3Xcn32sXBIV2kdgA",
        authDomain: "portfolio-email-1621c.firebaseapp.com",
        databaseURL: "https://portfolio-email-1621c.firebaseio.com",
        projectId: "portfolio-email-1621c",
        storageBucket: "",
        messagingSenderId: "899266849962",
        appId: "1:899266849962:web:675a64af83d57a6a"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
// creates a variable to reference the database
var database = firebase.database();
// Blank Values
var name = "";
var email = "";
var message = "";

// Capturing the Button Click
$("#submitBtn").on("click", function(event) {
    event.preventDefault();

    // storing the data
    name = $("#name").val().trim();
    email = $("#email").val().trim();
    message = $("#message").val().trim();

    database.ref().set({
        name: name,
        email: email,
        message: message
    });

    function cleartext() {
        $("#name.materialize-textarea").value = "";
        $("#email.materialize-textarea").empty = "";
        $("#message").value = "";
        console.log("Clicked");
    };
    cleartext();  

});


    

  });