/*

// get attribute
console.log($("img").attr("src"));
console.log($("a").attr("href"));
console.log($("h1").attr("class"))

// set attribute
$("img").attr("src","https://i.pinimg.com/originals/14/f3/40/14f340ba15cfcc11faad3880e91ba219.jpg");
$("a").attr("href", "http://bing.com")

*/

// -----------------------------------------------
// Section 14 - Adding Event Listeners with jQuery
// -----------------------------------------------

// Vanilla JS Version
// When clicking on any button --> turn h1 to color purple
/*
var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}
*/

// jQuery Version
// When clicking on any button --> turn h1 to color purple
$("button").click(function() {
    $("h1").css("color", "purple");
});

// console log - keys that are pressed for input element
$("input").keydown(function(event) {
    console.log(event.key);
});

// CHALLENGE: When key is pressed, show in h1
$(document).keydown(function(event) {
    $("h1").text(event.key);
});

// using "on" to add event listeners
// when mouse hovers over element, changes colour
$("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
});


// -----------------------------------------------
// Section 14 - Adding + Removing Elements with jQuery
// -----------------------------------------------

var newButton = "<button>new</button>";

// <button> new </button> <h1> Hello </h1>
$("h1").before(newButton);

// <h1> Hello </h1>
$("h1").after(newButton);

//<h1> <button> new </button> Hello </h1>
$("h1").prepend(newButton);

// <h1> Hello <button> new </button> </h1>
$("h1").append(newButton);

// REMOVE - all button Elements
//$("button").remove();

// -----------------------------------------------
// Section 14 - Web Animations with jQuery
// -----------------------------------------------

// on click of button --> h1 hides / re-appears
// pre-built animation features
/*
$("button").on("click", function() {
    // toggle
    // fadeOut
    // fadeToggle
    $("h1").slideToggle();
});
*/

// on click --> slide up, slide down and animate opacity to 50%
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

//-------
//  More jQuery effect methods here 
// https://www.w3schools.com/jquery/jquery_ref_effects.asp
//-------
