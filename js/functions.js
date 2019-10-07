function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function computerResult (){
	let computerScore = document.getElementById('computerResult');
	computerScore.innerHTML = ++computerScore.innerHTML;

}

function playerResult (){
	let playerScore = document.getElementById('playerResult');
	playerScore.innerHTML = ++playerScore.innerHTML;
}