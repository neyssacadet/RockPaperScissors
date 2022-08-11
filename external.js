let WinScore = 0;
let TieScore = 0;
let LoseScore = 0;

//Coding for computer to play randomly.
function computerPlay() {
    let options = ['rock','paper', 'scissors']; //this defines 'options'
    let randomnumber = Math.floor(Math.random() * options.length); // randomly picks a number value '0,1,2'
    return options[randomnumber]; //converts then returns number value into actual string value
}

//Coding for player selection 
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
       singleround(button.id, computerPlay());
    });
})
//Coding for a single round of Rock Paper Scissors. 
function singleround(player, computer){
//When Player LOSES 
    if (player == 'Rock' && computer == 'paper' || player == 'Paper' && computer == 'scissors' || player == 'Scissors' && computer == 'rock' ){
        let message = 'Yikes';
        alert(message)
        LoseScore++;
        showResults(player, computer);
        if (LoseScore ==5){
            console.log("YOU LOST!")
            resetGame()
        }
    }
//When it's a TIE
    else if (player == 'Rock' && computer == 'rock' || player == 'Paper' && computer == 'paper' || player == 'Scissors' && computer == 'scissors' ){
        let tieMessage = 'It is a tie!';
        alert(tieMessage)
        TieScore++;
       showResults(player,computer);
    }
//When Player WINS 
    else if (player == 'Rock' && computer == 'scissors' || player == 'Paper' && computer == 'rock' || player == 'Scissors' && computer == 'paper'){
        let winMessage = 'Extra Point For You!';
        alert(winMessage)
        WinScore++; 
        showResults(player,computer);
        if (WinScore == 5){
            console.log("YOU WON!")
            resetGame()
        }
    }
} 
//DOM method as a function to display results
function showResults(player1, computer1) {
    const gameResults = document.querySelector('#results');
    const computerPick = document.querySelector('#computer');
    const playerPick = document.querySelector('#player');

    gameResults.innerHTML = `Kindness Punks: ${WinScore} | Tribes:${LoseScore}` ;
    computerPick.innerHTML = `Tribes played ${computer1}.`;
    playerPick.innerHTML = `You played ${player1}. `;
}
//Resetting Scores to 0 
function resetGame(){
    WinScore = 0;
    TieScore = 0;
    LoseScore = 0;
}


