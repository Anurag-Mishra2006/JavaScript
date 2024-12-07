function generateRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Example usage: Generate a random floating-point number between 5 and 10
var randomFloat = Math.floor(generateRandomFloat(1,4));
console.log(randomFloat);
let score =0;

let scoreEl = document.getElementById("score-el") ;
function decision(){
    if(randomFloat===2){
        
        score = score +1;
        scoreEl.innerText = score;


    }
}