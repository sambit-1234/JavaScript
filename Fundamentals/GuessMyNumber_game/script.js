
randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let checks = 0; 
let highScore = 0;

document.querySelector(".check-btn").addEventListener("click",
    function() {
        guessedNumber = Number(document.querySelector(".guess-input").value) ; 
        checkEvent(randomNumber,guessedNumber);

    }
)

document.querySelector(".retry-btn").addEventListener("click",
    function(){
        retry()
    }
)

function retry(){
    checks = 0;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
    document.querySelector(".score").textContent = checks;
    document.querySelector(".highscore").textContent = highScore;
    document.querySelector(".question-mark").textContent = "?";
    document.querySelector('.container').style.backgroundColor = '#ffffff';
    document.querySelector(".question-mark").style.width = '100px';
    document.querySelector(".question-mark").style.height = '100px';
    document.querySelector(".question-mark").style.borderRadius = '50%';
    document.querySelector(".question-mark").style.backgroundColor = '#eeeeee';

}

function checkEvent (randNum , guessNum){
    if(!guessNum){
        document.querySelector(".question-mark").textContent = "Enter a number";
    }
    else if (randNum > guessNum) {
        wrongPredict("GO HIGHER");
    }else if(randNum < guessNum){
        wrongPredict("GO LOWER");
    }else if (randNum == guessNum){
        correctGuess();
        
    }
}

function wrongPredict(message){
    checks++;
    document.querySelector(".question-mark").textContent = message;
    document.querySelector('.container').style.backgroundColor = '#fe0101';


    document.querySelector(".question-mark").style.width = '200px';
    document.querySelector(".question-mark").style.height = '100px';
    document.querySelector(".question-mark").style.borderRadius = '0%';
    document.querySelector(".question-mark").style.backgroundColor = '#ee7d7d';
}

function correctGuess(){
    checks++;
    document.querySelector(".score").textContent = checks + " tries ";
    
    /* if(highScore == 0 ){
        highScore = checks;
    }else if (checks < highScore){
        highScore = checks ;
    }*/

    highScore = (highScore === 0 || checks < highScore) ? checks : highScore;
    
    document.querySelector(".highscore").textContent = highScore + " tries ";
    document.querySelector(".question-mark").textContent = "CORRECT";
    
    document.querySelector('.container').style.backgroundColor = '#11f920';

    document.querySelector(".question-mark").style.width = '250px'
    document.querySelector(".question-mark").style.height = '80px'
    document.querySelector(".question-mark").style.borderRadius = '0%'
    document.querySelector(".question-mark").style.backgroundColor = '#74fc05'
    
}


