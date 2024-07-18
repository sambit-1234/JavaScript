'use strict';



let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let currentScore = 0;
let highScore = 0;

 
const questionMarkElement = document.querySelector('.question-mark');
const containerElement = document.querySelector(".container");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".highscore");

document.querySelector(".check-btn").addEventListener("click",function(){
    const guessedNumber = Number(document.querySelector(".guess-input").value);

    checkEvent(randomNumber, guessedNumber);
});

document.querySelector(".retry-btn").addEventListener("click", function(){
    // Reset variables
    currentScore = 0;
    scoreElement.textContent = currentScore;

    // Reset classes and text content
    containerElement.classList.remove('wrong', 'correct');
    questionMarkElement.classList.remove('wrong', 'correct');
    questionMarkElement.textContent = '?'; // Reset question mark text

    // Generate new random number
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);

    // Optionally, reset high score if needed
    // highScore = 0;
});

function checkEvent(randomNumber, guessedNumber){
    if (randomNumber ==  guessedNumber){
        correctGuess();
    }else{
        currentScore++;
        if( guessedNumber > randomNumber){
            wrongGuess("guessed_big");
        }else if (guessedNumber < randomNumber){
            wrongGuess("guessed_small");
        }
    }
}

function correctGuess(){
// Select the element

containerElement.classList.remove('wrong'); 
questionMarkElement.classList.remove('wrong');

setTimeout(() => {
    questionMarkElement.textContent = 'CORRECT';
    questionMarkElement.classList.add('correct');
}, 500);
setTimeout(()=> {
    containerElement.classList.add('correct');
},1000);

scoreElement.textContent = currentScore;
highScore = (highScore === 0 || currentScore < highScore) ? currentScore : highScore;

highScoreElement.textContent = highScore;
}


function wrongGuess(guess){
    const questionMarkElement = document.querySelector('.question-mark');
    const containerElement = document.querySelector(".container");
    containerElement.classList.remove('correct');
    questionMarkElement.classList.remove('wrong');

    if (guess == "guessed_big"){
        setTimeout(()=> {
            questionMarkElement.textContent = 'WRONG, Go Lower';
            questionMarkElement.classList.add('wrong');
        },400);
        setTimeout(()=> {
            containerElement.classList.add('wrong');
        },400);
    }else if (guess == "guessed_small"){
        setTimeout(()=> {
            questionMarkElement.textContent = 'WRONG, Go Higher';
            questionMarkElement.classList.add('wrong');
        },400);
        setTimeout(()=> {
            
            containerElement.classList.add('wrong');
        },400);
    } 

    scoreElement.textContent = currentScore;

}