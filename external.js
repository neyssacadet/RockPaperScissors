//Coding for computer to play randomly.
function computerPlay () {
    let options = ['rock','paper', 'scissors']; //this defines 'options'
    let randomnumber = Math.floor(Math.random() * options.length); // randomly picks a number value '0,1,2'
    console.log(options[randomnumber])
    return options[randomnumber]; //converts then returns number value into actual string value
}

//Coding for player selection 
function playerPrompt(){
    let playerOne = ['Rock', 'Paper', 'Scissors'];//Make sure no other option can be put in but also not case
    return playerOne;//returns the player input
}

//Coding for a single round of Rock Paper Scissors. 
function singleround (player, computer){
//When player inputs ROCK (3 possibilities)
    if (player == 'Rock' && computer == 'paper'){
        let message = 'You Lose! Paper beats Rock!';
        alert(message)
        return "Lose"
    }
    else if (player == 'Rock' && computer == 'rock' ){
        let tieMessage = 'It is a tie';
        alert(tieMessage)
        return "Tie"
    }
    else if (player == 'Rock' && computer == 'scissors'){
        let winMessage = 'Wow, you won?';
        alert(winMessage)
        return "Win"
    }
//When player inputs PAPER (3 possibilities)
    else if (player == 'Paper' && computer == 'rock'){
        let WinMessage = 'WINNER!'
        alert (WinMessage)
        return "Win"
    }
    else if (player == 'Paper' && computer == 'paper'){
        let tiedMessage = 'TIED!'
        alert (tiedMessage)
        return "Tie"
    }
    else if (player == 'Paper' && computer == 'scissors'){
        let LostMessage = 'WhatEver Major Loser!'
        alert (LostMessage)
        return "Lose"
    }
//When player inputs SCISSORS (3 possibilities)
    else if (player == 'Scissors' && computer == 'rock'){
        let LoserMessage = 'Such a loser';
        alert (LoserMessage)
        return "Lose"
    }
    else if (player == 'Scissors' && computer == 'paper'){
        let WinnerMessage = 'Win the game, win my heart';
        alert (WinnerMessage)
        return "Win"
    }
    else if (player == 'Scissors' && computer == 'scissors'){
        let tieddMessage = 'You better work';
        alert (tieddMessage)
        return "Tie"
    }
}
console.log(singleround (playerPrompt(), computerPlay()))

//Adding an eventlistener to the 3 buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        singleround(button.id,computerPlay());
    });
})

//Loop for a 5 round game 
/*function game(){
let WinScore = 0;
let TieScore = 0;
let LoseScore = 0;
    for (let i = 0; i < 5; i++) {
        result = singleround (playerPrompt, computerPlay())
        console.log(result)
        if (result == "Win"){
            WinScore++; 
        }
        else if (result == "Tie") {
            TieScore++;
        }
        else if (result == "Lose") {
            LoseScore++;
        }
    }
    alert (`HERE ARE THE RESULTS: Win: ${WinScore} , Tie: ${TieScore}, Lose: ${LoseScore}`)
}

game ()*/
