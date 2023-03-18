'use strict';

//document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='Correct Number!'

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10
// document.querySelector('.guess').value=25;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore=0;
let score = 20;
const displayMessage=function(message){
    document.querySelector('.message').textContent =message;
}


console.log(secretNumber);
document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value)
        console.log(guess, typeof guess)
         //when there is no input
        if (!guess) {
            displayMessage('No number!')
            //document.querySelector('.message').textContent = 'No number!';
            //when player wins
        } else if (guess === secretNumber) {
            displayMessage('Correct number')
            //document.querySelector('.message').textContent = "Correct number";
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';

            if(score > highscore){
                highscore=score;
                document.querySelector('.highscore').textContent=highscore;
            }
        }else if(guess !== secretNumber)
        {
            if (score > 1) {
                displayMessage(guess>secretNumber? 'too high' : 'Too low')
                //document.querySelector('.message').textContent = guess>secretNumber? 'Too high' : 'too low';
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('body').style.backgroundColor='orange';
            } else {
                displayMessage('You lost the game !')
               // document.querySelector('.message').textContent = 'You lost the game !';
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor='red'
            }

        }
    })
         


    

    document.querySelector('.again').addEventListener('click',function(){
        score=20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        displayMessage('Start quessing')
        //document.querySelector('.message').textContent = 'start guessing...';
        document.querySelector('.score').textContent = score;

        document.querySelector('.number').textContent='?'
        document.querySelector('.guess').value='';

        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='30rem'
    })