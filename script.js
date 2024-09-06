function process(){
     var audio = new Audio('dice-95077.mp3');
     audio.play();

     
     var randomNumber1 = Math.floor(Math.random()*6)+1;
     var imageSrc = "images/dice"+randomNumber1+".png";


     document.querySelector("img.img1").setAttribute("src",imageSrc);


     var randomNumber2 = Math.floor(Math.random()*6)+1;
     var imageSrc2 = "images/dice"+randomNumber2+".png";

     document.querySelector("img.img2").setAttribute("src",imageSrc2);


     if (randomNumber1>randomNumber2){
     document.querySelector(".result").innerHTML = "Player 1 win ! 🚩 "
     }
     else if (randomNumber1<randomNumber2){
          document.querySelector(".result").innerHTML = "Player 2 win ! 🚩 "
     }
     else{
          document.querySelector(".result").innerHTML = "It's a Draw ! 🚩"
     }
}