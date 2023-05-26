'use strict';

/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = "CORRECT NUMBER";
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value = 23);
*/

let score = 20;
let highscore=0;
let secretNo = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.again').addEventListener('click', function () {
    secretNo = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = "Start the game";
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
})

     
document.querySelector('.check').addEventListener('click', function () {

   const guess = Number(document.querySelector('.guess').value);
    

    if (!guess) {
        document.querySelector('.message').textContent = "No Number";
    }
    else if (guess == secretNo) {
        document.querySelector('.number').textContent = secretNo;
        document.querySelector('.message').textContent = "Correct Number ";
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if(score>highscore){
            highscore=score;
        }
        document.querySelector('.highscore').textContent=highscore;

    }
    else if (guess > secretNo) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too high ";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "TRY Again";

        }
    }
    else if (guess < secretNo) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too low ";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "TRY Again";
        }
    }
})
