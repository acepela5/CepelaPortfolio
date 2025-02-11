$(document).ready(function(){

    $('.parallax').parallax();

    $('.slider').slider();

    $('.sidenav').sidenav();

    $('.materialboxed').materialbox();

    $(".modal").modal();

    function cleartext() {
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
        console.log("Clicked");
    };

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


// Capturing the Button Click
$("#submitBtn").on("click", function(event) {
    event.preventDefault();
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();

    // user is missing input
if (!name || !email || !message) {
    console.log("Text input missing");
   $('#modal1').modal("open");


}
// user must enter @ in email
else if (email.indexOf("@")===-1){
    console.log("Missing @");
    $('#modal2').modal('open');

}
else{
    $('#modal3').modal('open');
    // storing the data
   
    console.log("input heard")
    database.ref().set({
        name: name,
        email: email,
        message: message  
    });
cleartext(); 
}
     

});


    

  });