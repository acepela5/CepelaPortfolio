$(document).ready(function(){
    $('.parallax').parallax();

    $('.slider').slider();

    $('.sidenav').sidenav();

    var button = $("#navbtn");
    var instance = M.Sidenav.getInstance(button);
    $("#navbtn").on("click", instance.open());
    instance.open();
  });