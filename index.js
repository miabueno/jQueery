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
$("h1").on("mouseover", function() {
    $("h1").css("color", "aqua");
});
