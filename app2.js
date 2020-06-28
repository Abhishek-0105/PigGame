var scores, roundScore, activePlayer, gamePlaying, finalScore;

init();
//document.querySelector('#current-' + activePlayer).textContent = dice;

var roll_1;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice1 = Math.floor(Math.random()*6) + 1;
        var dice2 = Math.floor(Math.random()*6) + 1;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // if(dice === 6 && roll_1 === 6){
        //     roundScore = 0;
        //     scores[activePlayer] = 0;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //     roll_1 = 0;
        //     nextPlayer();
        // }

        // else if(dice !== 1){
        //     roundScore = roundScore + dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // }
        // else{
        //     nextPlayer();
        // }
        // roll_1 = dice;

        if(dice1 !== 1 && dice2 !== 1){
            roundScore = roundScore + dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        finalScore = document.querySelector('.final-score').value;

        if(finalScore){
            if(scores[activePlayer] >= finalScore){
                gamePlaying = false;
                document.querySelector('#name-' + activePlayer).textContent = "WINNER!!";
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            }
            else{
                nextPlayer();
            }
        }

        else{
            if(scores[activePlayer] >= 20){
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = "WINNER!!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        }
        else{
            nextPlayer();
        }
        }
    }
});

function nextPlayer(){
    if(activePlayer === 1){
        activePlayer = 0;
    }
    else{
        activePlayer = 1;
    }
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
}