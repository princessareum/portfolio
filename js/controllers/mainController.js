angular.module('app').controller('mainController', function($scope, mainService){

  $(document).ready(function(){
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });

    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "fast", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });

  })



});  //main controller
