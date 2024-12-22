const score = {
    wins: 0,
    losses: 0,
    ties: 0,
};
let result = '';

function updateScoreResult() {
    document.querySelector('.js-result').innerHTML = `Result: ${result}`;
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const min = 1;
    const max = 3;
    let computerMove = '';
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomInteger === 1) {
        computerMove = 'rock';
    }
    else if (randomInteger === 2) {
        computerMove = 'paper';
    }
    else if (randomInteger === 3) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function rockFun() {
    playGame('rock');
}

function paperFun() {
    playGame('paper');
}

function scissorFun() {
    playGame('scissors');
}

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    }
    else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        }
        else if (computerMove === 'paper') {
            result = 'You Lose.'
        }
        else if (computerMove === 'scissors') {
            result = 'You Win.';
        }
    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Win.';
        }
        else if (computerMove === 'paper') {
            result = 'Tie.'
        }
        else if (computerMove === 'scissors') {
            result = 'You Lose.';
        }
    }

    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You Lose.';
        }
        else if (computerMove === 'paper') {
            result = 'You Win.'
        }
        else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }

    if (result === 'You Win.') {
        score.wins += 1;
    }
    else if (result === 'You Lose.') {
        score.losses += 1;
    }
    else if (result === 'Tie.') {
        score.ties += 1;
    }
    updateScoreResult();
    document.querySelector('.js-moves').innerHTML = `You: <img src="/RockPaperScissors/${playerMove}.png" class="moves-icon"> ,  Computer: <img src="/RockPaperScissors/${computerMove}.png"class="moves-icon">`;
}


