let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let link1 = "Assets/images/dice" + randomNumber1 + ".png";

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let link2 = "Assets/images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", link1);
document.querySelector(".img2").setAttribute("src", link2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
