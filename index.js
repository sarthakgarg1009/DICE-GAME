var player1 = "PlAYER 1"
var player2 = "PLAYER2"

function playername(){
  player1 = prompt("ENTER NAME OF PLAYER 1")
  player2 = prompt("ENTER NAME OF PLAYER 2")

  document.querySelectorAll("h2")[0].innerHTML = player1;
  document.querySelectorAll("h2")[1].innerHTML = player2;
}

function rollonclick() {
var random1 = Math.floor(Math.random()*6)+1;
var randomsrc1 = "dice"+random1+".png";
document.querySelector("img.img1").setAttribute("src" ,randomsrc1);

var random2 = Math.floor(Math.random()*6)+1;
var randomsrc2 = "dice"+random2+".png"
document.querySelector("img.img2").setAttribute("src" ,randomsrc2 );

if (random1===random2)
{
  document.querySelector("h1").innerHTML ="DRAW !"
}
else if(random1 > random2)
{
  document.querySelector("h1").innerHTML =("🎊 "+" " +player1 +" " +"WINS !")
}
else
{
  document.querySelector("h1").innerHTML =("🎊 "+" " +player2 +" " +"WINS !")
}
}
