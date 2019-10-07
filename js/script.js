function playGame (playerInput) {
    
  clearMessages ();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  function getMoveName(MoveId){
    if(MoveId == 1){
        return 'rock';
    } else if (MoveId == 2) {
        return 'paper';``
    } else if (MoveId == 3) {
        return 'scissors';
    } else {
        printMessage('Nie znam ruchu o id ' + MoveId + '.');
        return 'nieznany ruch';
    }
  }

  let computerMove = getMoveName(randomNumber);

  console.log('Komputer pokazał: ' + computerMove);

  let playerMove = getMoveName(playerInput);

  console.log('Gracz pokazał: ' + playerMove);

  function displayResult(computerMove, playerMove){
    
    console.log('Wywołanie funkcji rozstrzygnięcia');	
    console.log('moves:', computerMove, playerMove);
    printMessage('COMPUTER:' + computerMove + ' YOU:' + playerMove);

    if (computerMove == 'rock' && playerMove == 'paper'
    || computerMove == 'scissors' && playerMove == 'rock'
    || computerMove == 'paper' && playerMove == 'scissors'){
      printMessage('<span>SCORE:</span> You win!');
      playerResult();
    } 
    else if (computerMove == 'rock' && playerMove == 'scissors'
    || computerMove == 'scissors' && playerMove == 'paper'
    || computerMove == 'paper' && playerMove == 'rock'){
      printMessage('<span>SCORE:</span> You loose!');
      computerResult();
    } 
    else if (computerMove == playerMove){
      return printMessage('<span>SCORE:</span> It is a draw!');
    } 
    else if (playerMove == 'nieznany ruch'){
      return printMessage ('Przeczytaj uważnie reguły gry...')
    }
    else {
      printMessage('Tym razem przegrywasz :(');
    }
  }

  displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

