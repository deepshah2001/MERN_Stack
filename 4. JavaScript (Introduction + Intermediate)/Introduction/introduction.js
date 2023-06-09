// ALERT
alert("Hello World!");

// TypeOf
document.write(typeof 2 + "<br>");

// Variables
var myName = "Deep"; // can also change or assign new value to it as it is a variable
alert(myName);

// Prompt
var yourName = prompt("What is your name?");
document.write(
  "A heartily welcome to " + yourName + " from " + myName + "!<br>"
);

// String Concatenation
var message = "Hello";
alert(message + " there, " + myName);

// Length of String
var post = prompt("Enter Message Here: ");
var count_letters = post.length;
var left_letters = 140 - count_letters;
document.write(
  "You've written " +
    count_letters +
    ", you've " +
    left_letters +
    " characters left.<br>"
);

// SLICING in String
document.write(post.slice(0, 140) + "<br>");

// Convert to upper case and lower case
var upperMsg = message.toUpperCase();
var lowerMsg = message.toLowerCase();
document.write("UPPER: " + upperMsg + "<br>LOWER: " + lowerMsg + "<br>");
var capitalizeName = yourName.slice(0,1).toUpperCase() + yourName.slice(1,yourName.length).toLowerCase();
alert("Hello, " + capitalizeName);

// Operators
var dogAge = prompt("Enter Dog Age Here: ");
var humanAge = ((dogAge - 2) * 4) + 21 ;
document.write("Equivalent Human Age for Dog Age " + dogAge + " is: " + humanAge + "<br>");

// Increment and Decrement
var x = 1;
var y = x++, z = x--;
x += 10;                    // Will increase x by 10 (also for -=, *=, /=, %= etc)
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br>");

// Function - Enclosing a set of instruction within curly braces ({}) so that can be re-used very easily whenever needed.
// Syntax (Create a function) -->
// function function_name(arguments) {
//     set of instructions
// }
// Syntax (Calling a function) -->
// function_name(arguments);
function getMilk(money) {
  var bottles = money / 123.29;
  var change = money % 123.29;

  return [bottles, change];
}

document.write(
  "Number of Bottles from " +
    410.98 +
    " rupees of money will be = " +
    Math.floor(getMilk(410.98)[0]) +
    " and change given to us will be: " +
    Math.floor(getMilk(410.98)[1]) +
    "<br>"
);
