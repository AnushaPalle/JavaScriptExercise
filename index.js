var randomNumber1 = Math.random();
randomNumber1*=6;
randomNumber1=randomNumber1+1;
randomNumber1=Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2*=6;
randomNumber2=randomNumber2+1;
randomNumber2=Math.floor(randomNumber2);

if(randomNumber1==1){
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
}else if (randomNumber1==2) {
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
}else if (randomNumber1==3) {
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
}else if (randomNumber1==4) {
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
}else if (randomNumber1==5) {
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
}else if (randomNumber1==6) {
  document.querySelector(".img1").setAttribute("src","images/dice6.png");
}else{
  console.log("number 1 not in range 1 to 6");
}

if(randomNumber2==1){
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}else if (randomNumber2==2) {
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}else if (randomNumber2==3) {
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
}else if (randomNumber2==4) {
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
}else if (randomNumber2==5) {
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
}else if (randomNumber2==6) {
  document.querySelector(".img2").setAttribute("src","images/dice6.png");
}else{
  console.log("number 2 not in range 1 to 6");
}

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="⛳️ Player 1 won";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent="Player 2 won ⛳️";
}else{
  document.querySelector("h1").textContent="Draw 🤭";
}

//Professional:
// var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
//
// var randomDiceImage="dice"+randomNumber1+".png";
//
// var randomImageSource = "images/" + randomDiceImage;
//
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomImageSource);
