var randomNumber1 = Math.floor(Math.random()*5 + 1);
var randomNumber2 = Math.floor(Math.random()*5 + 1);

randomImage = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

document.querySelector(".img1").setAttribute("src", randomImage[randomNumber1]);
document.querySelector(".img2").setAttribute("src", randomImage[randomNumber2]);


if (randomImage[randomNumber1] === randomImage[randomNumber2]) {
    document.querySelector("h1").innerHTML = "Draw!"
}else if (randomImage[randomNumber1] > randomImage[randomNumber2]) {
    document.querySelector("h1").innerHTML = "Player 1 won !"
}else if (randomImage[randomNumber1] < randomImage[randomNumber2]) {
    document.querySelector("h1").innerHTML = "Player 2 won !"
}