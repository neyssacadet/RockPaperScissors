//Coding for computer to play randomly.
function computerPlay () {
    let options = ['rock','paper', 'scissors']; //this defines 'options'
    let randomnumber = Math.floor(Math.random() * options.length); // randomly picks a number value '0,1,2'
    return options[randomnumber]; //converts then returns number value into actual string value
}
console.log(computerPlay())//prints in the console

//Coding for player selection 
function playerPrompt(){
    let playerOne = window.prompt ("Choose between Rock, Paper, Scissors.");//Make sure no other option can be put in 
    return playerOne;//returns the player input
}

//Coding for a single round of Rock Paper Scissors. 
function singleround (player, computer){
//When player inputs ROCK
    if (player == 'Rock' && computer == 'paper'){
        let message = 'You Lose! Paper beats Rock!';
        alert(message)
    }
    else if (player == 'Rock' && computer == 'rock' ){
        let tieMessage = 'It is a tie';
        alert(tieMessage)
    }
    else if (player == 'Rock' && computer == 'scissors'){
        let winMessage = 'Wow, you won?';
        alert(winMessage)
    }
//When player inputs PAPER
    else if (player == 'Paper' && computer == 'rock'){
        let WinMessage = 'WINNER!'
        alert (WinMessage)
    }
    else if (player == 'Paper' && computer == 'paper'){
        let tiedMessage = 'TIED!'
        alert (tiedMessage)
    }
    else if (player == 'Paper' && computer == 'scissors'){
        let LostMessage = 'WhatEver Major Loser!'
        alert (LostMessage)
    }
//When player inputs SCISSORS
    else if (player == 'Scissors' && computer == 'rock'){
        let LoserMessage = 'Such a loser';
        alert (LoserMessage)
    }
    else if (player == 'Scissors' && computer == 'paper'){
        let WinnerMessage = 'Win the game, win my heart';
        alert (WinnerMessage)
    }
    else if (player == 'Scissors' && computer == 'scissors'){
        let tieddMessage = 'You better work';
        alert (tieddMessage)
    }
}
console.log (singleround (playerPrompt(), computerPlay()))
