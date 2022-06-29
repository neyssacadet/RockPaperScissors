let WinScore = 0;
let TieScore = 0;
let LoseScore = 0;
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
//When Player LOSES 
    if (player == 'Rock' && computer == 'paper' || player == 'Paper' && computer == 'scissors' || player == 'Scissors' && computer == 'rock' ){
        let message = 'Yikes';
        alert(message)
        return "Lose"
    }
//When it's a TIE
    else if (player == 'Rock' && computer == 'rock' || player == 'Paper' && computer == 'paper' || player == 'Scissors' && computer == 'scissors' ){
        let tieMessage = 'It is a tie!';
        alert(tieMessage)
        return "Tie"
    }
//When Player WINS 
    else {
        let winMessage = 'Extra Point For You!';
        alert(winMessage)
        return "Win"
    }
}
//console.log(singleround (playerPrompt(), computerPlay()))

//Adding an eventlistener to the 3 buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
})

//Loop for a 5 round game 
function game(button){
    for (let i = 0; i < 5; i++) {
        result = singleround (button, computerPlay())
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
