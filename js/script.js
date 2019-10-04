let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(MoveId){
	
  if(MoveId == 1){
    return 'kamień';
} else if (MoveId == 2) {
    return 'papier';
}  else if (MoveId == 3) {
    return 'nożyce';
}  else {
    printMessage('Nie znam ruchu o id ' + MoveId + '.');
    return 'nieznany ruch';
  }
}

let computerMove = getMoveName(randomNumber);

console.log('Komputer wpisał: ' + computerMove);

printMessage('Mój ruch to: ' + computerMove);

/* if(randomNumber == 1) {
    computerMove = 'kamień';
}  else if (randomNumber == 2) {
    computerMove = 'papier';
}  else if (randomNumber == 3) {
    computerMove = 'nożyce';
} */

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

/* if(playerInput == '1'){
    playerMove = 'kamień';
}  else if (playerInput == 2) {
    playerMove = 'papier';
}  else if (playerInput == 3) {
    playerMove = 'nożyce';
} */

console.log('moves:', computerMove, playerMove);


function displayResult(){
	
  console.log('Wywołanie funkcji rozstrzygnięcia');	
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

  	if(computerMove == 'kamień' && playerMove == 'papier'){
	return printMessage('Ty wygrywasz!');
  } 
	else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    return printMessage('Tym razem przegrywasz!');
  } 
	else if (computerMove == 'nożyce' && playerMove == 'papier'){
    return printMessage('Tym razem przegrywasz!');
  } 
	else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    return printMessage('Ty wygrywasz!');
  } 
    else if (computerMove == 'papier' && playerMove == 'kamień'){
    return printMessage('Tym razem przegrywasz!');
  } 
	else if (computerMove == 'papier' && playerMove == 'nożyce'){
    return printMessage('Ty wygrywasz!');
  } 
	else if (computerMove == playerMove){
    return printMessage('REMIS');
		
  } else if (playerMove = 'nieznany ruch'){
    return printMessage ('Przeczytaj uważnie reguły gry...')
  }
	
	else {
    printMessage('Tym razem przegrywasz :(');
  }
}	
	
displayResult();