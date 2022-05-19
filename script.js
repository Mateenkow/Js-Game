const dino = document.getElementById("dino");
const dog =  document.getElementById("dog");

document.addEventListener ("keydown", function(event) {
    jump()
});

function jump (){
   if (dino.classList !="jump") {
      dino.classList.add("jump") 
   }
   setTimeout (function() {
    dino.classList.remove("jump") 
   }, 300)
}

let isAlive = setInterval (function() {
    let dinoTop = parseInt (window.getComputedStyle(dino).getPropertyValue("top"));
    let dogLeft = parseInt (window.getComputedStyle(dog).getPropertyValue("left"));

    if (dogLeft < 40 && dogLeft > 0 && dinoTop >= 150 ) {
        alert("GAME OVER!")
    }
}, 10)