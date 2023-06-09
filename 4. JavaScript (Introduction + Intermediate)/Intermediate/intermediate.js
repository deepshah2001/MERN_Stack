prompt("Write your name here: ");
prompt("Write your crush's name here: ");

// Random Function
var n = Math.floor(Math.random() * 100) + 1;

alert("LOVE SCORE: " + n + "%.");

// If-else conditional statement
// Syntax -->
// if(condition) {
//     statements;
// } else {
//     statements;
// }

// Comparators (===, !==, >, <, >=, <=, ==, &&, ||, !)
// Difference between === and == is that "===" also checks for datatype, but not in case of "==".
// For Eg.->
// var a = 1;
// var b = "1";
// Then a == b (true) but a === b (false)

// Arrays - Collection of same related items or of same datatype.
var names = [
  "Jack",
  "Jackey",
  "Jalender",
  "Jaddu",
  "Jasminder",
  "James",
  "Jolly",
  "Jacksman",
];
var guestName = prompt("What is your name: ");
document.write(names[0] + " and Length = " + names.length + "<br>");
if (names.includes(guestName)) {
  document.write("WELCOME<br>");
} else {
  document.write("NOT ALLOWED (BHIDKAM)");
}

// Push and pop in array is used to add or remove element from array at the end respectively.

// While Loop (For checking a state again and again.)
// Syntax -->
// while(condition is true) {
//     statement;
// }
var i = 1;
var output = []; // Array
while (i <= 100) {
  if (i % 3 === 0 && i % 5 === 0) {
    output.push("FizzBuzz");
  } else if (i % 5 === 0) {
    output.push("Buzz");
  } else if (i % 3 === 0) {
    output.push("Fizz");
  } else {
    output.push(i);
  }
  i++;
}

document.write(output + "<br><br>");

// 99 Bottles
var count = 99,
  temp = count;
while (count > 0) {
  if (count === 1) {
    document.write(
      count + " bottle of beer on the wall, " + count + " bottle of beer.<br>"
    );
    document.write(
      "Take one down and pass it around, no more bottle of beer on the wall."
    );
  } else {
    document.write(
      count + " bottles of beer on the wall, " + count + " bottles of beer.<br>"
    );
    document.write(
      "Take one down and pass it around, " +
        (count - 1) +
        " bottles of beer on the wall.<br><br>"
    );
  }
  count--;
}

if (count === 0) {
  document.write(
    "<br><br>No more bottles of beer on the wall, no bottles of beer.<br>"
  );
  document.write(
    "Go to the store and buy some more, " +
      temp +
      " bottles of beer on the wall.<br><br>"
  );
}

// Fizz-Buzz Challenge
// For loop (For iterating over a same thing.)
// Ṣyntax -->
// for(initialization; condition; updation) {
    // statements;
// }
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    document.write("FizzBuzz, ");
  } else if (i % 5 === 0) {
    document.write("Buzz, ");
  } else if (i % 3 === 0) {
    document.write("Fizz, ");
  } else {
    document.write(i + ", ");
  }
}
