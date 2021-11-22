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
			  outcome = 'you win';
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
		
		
function Bottles() {
		for(i=99;i>=2;i=i-1){
			document.getElementById("lyrics1").innerHTML +=(i+ " bottles of beer on a wall,<br />");
			document.getElementById("lyrics1").innerHTML +=(i+ " bottles of beer,<br />");
			document.getElementById("lyrics1").innerHTML +=("Take one down pass it around,<br />");
			if(i>2){
				document.getElementById("lyrics1").innerHTML +=((i-1)+ " bottles of beer on a wall.<br />");
				document.getElementById("lyrics1").innerHTML +=(" "+"<br />");
			}
			else {
				document.getElementById("lyrics1").innerHTML +=((i-1)+ " bottle of beer on a wall.<br />");
				document.getElementById("lyrics1").innerHTML +=(" "+"<br />");
			document.getElementById("lyrics1").innerHTML +=("1 bottle of beer on a wall,<br />");
			document.getElementById("lyrics1").innerHTML +=("1 bottle of beer,<br />");
			document.getElementById("lyrics1").innerHTML +=("Take one down pass it around,<br />");
			document.getElementById("lyrics1").innerHTML +=("No more bottles of beer on the wall.<br />");
			document.getElementById("lyrics1").innerHTML +=(" "+"<br />");
			document.getElementById("lyrics1").innerHTML +=("No more bottles of beer on the wall,<br />");
			document.getElementById("lyrics1").innerHTML +=("No more bottles of beer,<br />");
			document.getElementById("lyrics1").innerHTML +=("Go to the store and buy some more,<br />");
			document.getElementById("lyrics1").innerHTML +=("99 bottles of beer on the wall.<br />");
			}
			
			
		}
			
			
		//System.out.println("0 bottles of beer,,");
		//System.out.println("Go to the store and buy some more,");
		//System.out.println("99 bottles of beer on the wall.");
	}