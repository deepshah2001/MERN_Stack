// jQuery -> A javascript library (a bunch of code written by someone else) and can be used (incorporate) in our code to improve it and make our life easy.

//  In jQuery : $("h1"); = document.querySelector("h1");
// if h1 have className of title then $("h1.title");

$("h1").css("color", "red");        // Changin color property of h1 html element to red.
// .css("property", "color_value");
// .css("property"); -> gives value of that particular property of that element.

// Best Practice -> To keep js file for "behaviour", css file for "Appearance" and html for "content".
$("h1").addClass("big-title");          // to add class from css to js
$("h1").removeClass("big-title");       // to remove class from css to js

// To add or remove multiple class in an html element we should separate them from a space between i.e.
// $("h1").addClass("class1Name class2Name");

$("h1").hasClass("big-title");          // to check whether our element has a particular class or not. If yes the "true" else "false".

// Or if we put both of our script tags in our head section then we have to write this following line of code :-
// $(document).ready(function() {
    // Line of code like $("h1").css("color", "red");
// });

// To change innerHTML of html element we use
$("h1").text("Hii");                    // only for changing text
$("h1").html("<em>Namaste</em>");       // for text as well as reading html

// To change (set) and get the attributes of an html element
$("img").attr("src");           // for getting attribute value
$("a").attr("href", "https://www.google.com/");     // for setting value to an element's attribute
// Class is also an html element's attribute i.e. we can use it as above in anchor or image tag i.e.
// $("h1").attr("class");

// Event Listener
$("h1").click(function () {
    $("h1").css("color", "purple");
});

$("button").click(function () {
    $("h1").css("color", "purple");
});

// Also can be done for keypress event

$(document).keypress(function(e) {
    $("h1").text(e.key);
})

// Another method to add event listener is "ON"
// $(document).on("event which is going to triggered", callback function() [function defined to do after event is triggered] {
//     $("html element").operation(" ");
// });

$(document).on("click", function() {
    $("h1").text("Hello, World!");
});

// Adding and removing element from HTML through jQuery

// ADDING :-
// 1. before ->     <button>New</button>  <h1>Hello</h1>
// 2. after ->      <h1>Hello</h1> <button>New</button>
// 3. prepend ->    <h1> <button>New</button> Hello</h1>
// 4. append ->     <h1>Hello <button>New</button> </h1>
// Eg ->            $("h1").before("<button>New</button>");

// REMOVING :-
// $("h1").remove();

// ANIMATION :-
// 1. hide() = to hide an html element
// 2. show() = to show an html element
// 3. toggle() = to toggle between hide and show an html element
// 4. fadeOut() = to hide an html element but in more animatic manner
// 5. fadeIn() = to show an html element but in more animatic manner
// 6. fadeToggle() = to toggle between hide and show an html element but in more animatic manner
// 7. slideUp() = to collapse an html element
// 8. slideDown() = to uncollapse an html element
// 9. slideToggle() = to toggle between collapse & uncollapse an html element

// Also can be done manually if.e. rather than selecting from inbuilt function by using .animate()

// $("h1").animate({opacity: 0.5});        // only for numeric value within the curly braces.

// Series of animation ->
$("h1").slideUp().slideDown().animate({opacity: 0.5});