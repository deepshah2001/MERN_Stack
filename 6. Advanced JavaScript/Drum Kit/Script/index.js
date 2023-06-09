// Event Listener
// element.eventListener(input1, input2);
// element - which html element, input1 - what event it should look for &(and) input2 - what it should do after event has been triggered

// for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
// }

// function handleClick() {
//     alert("I got Clicked!");
// }

// OR ANONYMOUS FUNCTION

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     alert("I got Clicked!");
//   });
// }

// Higher Order Functions - functions which take another function as an argument.

// Switch statements
// switch (expression or variable) {
//   case value:
//         statements
//     break;

//   default:
//     break;
// }

// Playing sound using button press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var drumKey = this.innerHTML;
    makeSound(drumKey);
    doAnimation(drumKey);
  });
}

// Playing sound using keyboard press

document.addEventListener("keydown", function (e) {
  var drumKey = e.key;
  makeSound(drumKey);
  doAnimation(drumKey);
});

// Function for Generating sound

function makeSound(drumKey) {
  switch (drumKey) {
    case "w":
      var crash = new Audio("Assets/sounds/crash.mp3"); // Creating new audio element in html and giving path of that audio.
      crash.play(); // For playing audio
      break;

    case "a":
      var kick = new Audio("Assets/sounds/kick-bass.mp3"); // Creating new audio element in html and giving path of that audio.
      kick.play(); // For playing audio
      break;

    case "s":
      var snare = new Audio("Assets/sounds/snare.mp3"); // Creating new audio element in html and giving path of that audio.
      snare.play(); // For playing audio
      break;

    case "d":
      var tom_1 = new Audio("Assets/sounds/tom-1.mp3"); // Creating new audio element in html and giving path of that audio.
      tom_1.play(); // For playing audio
      break;

    case "j":
      var tom_2 = new Audio("Assets/sounds/tom-2.mp3"); // Creating new audio element in html and giving path of that audio.
      tom_2.play(); // For playing audio
      break;

    case "k":
      var tom_3 = new Audio("Assets/sounds/tom-3.mp3"); // Creating new audio element in html and giving path of that audio.
      tom_3.play(); // For playing audio
      break;

    case "l":
      var tom_4 = new Audio("Assets/sounds/tom-4.mp3"); // Creating new audio element in html and giving path of that audio.
      tom_4.play(); // For playing audio
      break;

    default:
      console.log(drumKey);
  }
}

function doAnimation(key) {
  var activeKey = document.querySelector("." + key);
  activeKey.classList.add("pressed");
  setTimeout(function() {
    activeKey.classList.remove("pressed")
  }, 100);
}

// Object Creation
// var object_name = {
//   "key": "value" etc;
// }

// Initialize Objects using construtor Function (no cameCasing instead CapitalLetters)
// var bellBoy1 = new BellBoy("Jimmy", 19, ["English", "Hindi"]);

// Constructor Function -->
// function BellBoy(name, age, languagesSpeak) {
//   this.name = name;
//   this.age = age;
//   this.languageSpeak = languageSpeak;
//   this.function_name = function () {
// statements;
// }
// }
