// Creating Functon To be Trigged when Tap to Button is Clicked.
// ------------------------------------------
function process(){
     
     // playing audio on taping the Button.
     // -------------------------------------------
     var audio = new Audio('dice-95077.mp3');
     audio.play();

     // Selecting The Random nuber for the Player 1's Dice .
     // --------------------------------------------
     var randomNumber1 = Math.floor(Math.random()*6)+1;
     var imageSrc = "images/dice"+randomNumber1+".png";

     // Assigning the value of the image to the Player 1's Dice.
     // --------------------------------------------
     document.querySelector("img.img1").setAttribute("src",imageSrc);

     // Selecting The Random nuber for the Player 2's Dice .
     // --------------------------------------------
     var randomNumber2 = Math.floor(Math.random()*6)+1;
     var imageSrc2 = "images/dice"+randomNumber2+".png";

     // Assigning the value of the image to the Player 2's Dice.
     // --------------------------------------------
     document.querySelector("img.img2").setAttribute("src",imageSrc2);

     // Decision Making.
     // --------------------------------------------
     if (randomNumber1>randomNumber2){   //--> Player 1's wining Condition.
     document.querySelector(".result").innerHTML = "Player 1 win ! 🚩 "
     }
     else if (randomNumber1<randomNumber2){   //--> Player 2's wining Condition.
          document.querySelector(".result").innerHTML = "Player 2 win ! 🚩 "
     }
     else{     //--> Condition for Draw.
          document.querySelector(".result").innerHTML = "It's a Draw ! 🚩"
     }
}
