document.querySelector("html_tag"); // selects the first html_tag from the document like ("h1") for selecting element, (".class_name") for selecting class and ("#id_name") for selecting id.

document.querySelectorAll("html_tag"); // selects all html_tag from the document like ("button")

document.getElementById("#id_name_here"); // selects element by the unique id given to the html tag like ("title")

// As it is plural (elements) so to access one of the element, we use the concept of array like
// document.getElementsByTagName("li")[0].style.color = "purple" (to access first element) or .length (to know how many elements are there of same tag)
document.getElementsByTagName("html_tag_here"); // selects html element from the tag_name like list("li")

document.getElementsByClassName(".class_name_here"); // selects html elements by their class name

// same hierarichal level then .querySelctor(li.item)  (here item is the class name and li is the list item)
// if li is parent and a is its child then .querySelector(li a);

document.querySelector("li a").style.color = "green";

// In JavaScript when changing CSS properties, it is all been camelCased i.e. font-size is written as fontSize and value specified must be in string format i.e.

document.querySelecotor("h1").style.color = "12rem";
document.querySelector("#btn").style.backgroundColor = "yellow";

// Separation of concern i.e. HTML for CONTENT only, CSS for STYLE only and JAVASCRIPT for BEHAVIOUR only.

document.querySelector("button").classList.add("invisible");        // Adding a class named "invisible" from CSS file i.e separating every aspects as discussed in above line.
document.querySelector("button").classList.remove("invisible");     // Removing a class named "invisible" from CSS file i.e separating every aspects as discussed in above line.
document.querySelector("button").classList.toggle("invisible");     // Toggling (if added then remove or if removed then added) a class named "invisible" from CSS file i.e separating every aspects as discussed in above line.

document.querySelector("h1").classList.add("huge");

// Text Manipulation and Text Content Property
document.querySelector("button").innerHTML = "Submit";

document.querySelector("h1").textContent = "Namaste";

// The difference between innerHTML and textContent is that innerHTML also takes and reads the html code provided but textContent identifies as a simple text only i.e.
// if written "<em>Hello</em>" then innerHTML will emphasize the "Hello" text like italize but in case of textContent it'll show the whole text as it is like string.

// Attributes Manipulation

document.querySelector("a").attributes;                                 // Gives all the attributs of the particular html tag.
document.querySelector("a").getAttribute("attribute_name");             // Gives the attribute which has written within the "" and ().
document.querySelector("a").setAttribute("attribute_name", "value");    // Set the attribute value to the attribute name of that particular html tag.