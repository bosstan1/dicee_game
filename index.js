var randomNumber1 = Math.floor(1 + Math.random() * 6); //   random number 1 - 6
var randomNumber2 = Math.floor(1 + Math.random() * 6); // random number 1 - 6
var randomImageAddress1 = "images/dice" + randomNumber1 + ".png"; // image address1
var randomImageAddress2 = "images/dice" + randomNumber2 + ".png"; // image address2
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

image1.setAttribute("src", randomImageAddress1);
image2.setAttribute("src", randomImageAddress2);

var winner = document.querySelector(".title");
if (randomNumber1 !== randomNumber2)
    if (randomNumber1 > randomNumber2) {
        winner.innerHTML = "Player 1 wins!";
    }
    else
        winner.innerHTML = "Player 2 wins!";
else
    winner.innerHTML = "Draw!";