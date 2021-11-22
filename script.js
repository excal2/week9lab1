// Using if statements, create a rock, paper, scissors game.
//https://wrpsa.com/the-official-rules-of-rock-paper-scissors/
//You may use any method of user input and any method of visualisation (alerts, document.getElement etc), 
//as you will be marked on the JavaScript logic around your if statements
	function rockpaper() {
		for(i=0;i<3;i++){
		var players_move=prompt("pick rock paper or scissor");
		alert("you've picked "+players_move);
		document.getElementById("your_move").innerHTML = players_move;
		var my_move = Math.floor(Math.random()*3);
		//document.getElementById("comp_move").innerHTML = my_move;
		if(my_move == 0) {
			var my_move = 'rock';
			document.getElementById("your_move").innerHTML = players_move;
						}
		// try to map the random number to a r/p/s
		else if(my_move == 1) {
			var my_move = 'paper';
							}
		else if(my_move == 2) {
			var my_move = 'scissor';
								}
		document.getElementById("comp_move").innerHTML = my_move;
		if(players_move == 'rock') {
			if(my_move == 'rock') {
			  outcome = 'draw';
									}
			else if(my_move == 'paper') {
			  outcome = 'pc wins';
									}
			else if(my_move == 'scissor') {
			  outcome = 'you wi';
										}
				}
		else if(players_move == 'paper') {
			if(my_move == 'rock') {
			  outcome = 'you win';
								}
			else if(my_move == 'paper') {
			  outcome = 'draw';
								}
			else if(my_move == 'scissor') {
			  outcome = 'pc wins :-(';
								}
						}
		else if(players_move == 'scissor') {
			if(my_move == 'rock') {
			  outcome = 'pc wins :-(';
								}
			else if(my_move == 'paper') {
			  outcome = 'you win';
								}
			else if(my_move == 'scissor') {
			  outcome = 'draw';
								}
						}
		document.getElementById("winner").innerHTML = outcome;
		
		document.getElementById("turns").innerHTML = i+1;
		
		}
			
	}
		