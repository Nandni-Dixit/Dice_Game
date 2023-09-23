var palyer1 = "player 1";
var palyer2 = "player 2";

function editNames(){
     palyer1 = prompt("Enter the name of first player");
     palyer2 = prompt("Enter the name of second player");
    document.querySelector(".first").innerHTML=palyer1;
    document.querySelector(".second").innerHTML=palyer2;

}
function roll() {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".left").setAttribute("src",
            "./images/dice" + randomNumber1 + ".png");

        document.querySelector(".right").setAttribute("src",
            "./images/dice" + randomNumber2 + ".png");
// Condition for h1 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = (palyer1 + " wins!");
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = (palyer2 + " wins!");
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}


    }

      
            