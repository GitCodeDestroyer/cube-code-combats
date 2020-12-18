var input = document.getElementsByClassName('string1')[0],
	input2= document.getElementsByClassName('string2')[0],
	input3 = document.getElementsByClassName('string3')[0],
	input4 = document.getElementsByClassName('string4')[0],
	input5 = document.getElementsByClassName('string5')[0],
	output = document.getElementsByClassName('der')[0],
	output1 = document.getElementsByClassName('der1')[0],
	output2 = document.getElementsByClassName('der2')[0],
	output3 = document.getElementsByClassName('der3')[0],
	output4 = document.getElementsByClassName('der4')[0],
	command = "",
	speed = 1600;

$('#speed1').click(function(){
	speed = 1600;
});

$('#speed2').click(function(){
	speed = 1000;
});

$('#speed3').click(function(){
	speed = 600;
});

$('#speed4').click(function(){
	speed = 300;
});

$('#speed5').click(function(){
	speed = 200;
});

input.addEventListener('keyup', function(){
	if (this.value === "turn.left" || this.value === "" || this.value === "turn.right" || this.value === "" || this.value === "turn.back" || this.value === "move" || this.value === "get.cube" || this.value === "get.item" || this.value === "set" || this.value === "enemy.turn" || this.value === "enemy.view" || this.value === "enemy.attack") {
		output.innerHTML = "";
	}
	else if (this.value === "turn.right") {
		output.innerHTML = "";
	}
	else if (this.value === "turn.back") {
		output.innerHTML = "";			
	}
	else if (this.value === "move") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.cube") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.item") {
		output.innerHTML = "";			
	}
	else if (this.value === "set") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.turn") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.view") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.attack") {
		output.innerHTML = "";			
	}
	else {output.innerHTML = "This is incorrect command (line 1)"}
}, false);

input2.addEventListener('keyup', function(){
	if (this.value === "turn.left" || this.value === "turn.right" || this.value === "" || this.value === "turn.back" || this.value === "move" || this.value === "get.cube" || this.value === "get.item" || this.value === "set" || this.value === "enemy.turn" || this.value === "enemy.view" || this.value === "enemy.attack") {
		output1.innerHTML = "";
	} 
	else if (this.value === "turn.right") {
		output.innerHTML = "";			
	}
	else if (this.value === "turn.back") {
		output.innerHTML = "";			
	}
	else if (this.value === "move") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.cube") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.item") {
		output.innerHTML = "";			
	}
	else if (this.value === "set") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.turn") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.view") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.attack") {
		output.innerHTML = "";			
	}
	else {
		output1.innerHTML = "This is incorrect command (line 2)"
	}
}, false);

input3.addEventListener('keyup', function(){
	if (this.value === "turn.left" || this.value === "turn.right" || this.value === "" || this.value === "turn.back" || this.value === "move" || this.value === "get.cube" || this.value === "get.item" || this.value === "set" || this.value === "enemy.turn" || this.value === "enemy.view" || this.value === "enemy.attack") {
		output2.innerHTML = "";
	}  
	else if (this.value === "turn.right") {
		output.innerHTML = "";			
	}
	else if (this.value === "turn.back") {
		output.innerHTML = "";			
	}
	else if (this.value === "move") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.cube") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.item") {
		output.innerHTML = "";			
	}
	else if (this.value === "set") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.turn") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.view") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.attack") {
		output.innerHTML = "";			
	}
	else {
		output2.innerHTML = "This is incorrect command (line 3)"
	}
}, false);

input4.addEventListener('keyup', function(){
	if (this.value === "turn.left" || this.value === "turn.right" || this.value === "" || this.value === "turn.back" || this.value === "move" || this.value === "get.cube" || this.value === "get.item" || this.value === "set" || this.value === "enemy.turn" || this.value === "enemy.view" || this.value === "enemy.attack") {
		output3.innerHTML = "";
	}
	else if (this.value === "turn.right") {
		output.innerHTML = "";			
	}
	else if (this.value === "turn.back") {
		output.innerHTML = "";			
	}
	else if (this.value === "move") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.cube") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.item") {
		output.innerHTML = "";			
	}
	else if (this.value === "set") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.turn") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.view") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.attack") {
		output.innerHTML = "";			
	}
	else {
		output3.innerHTML = "This is incorrect command (line 4)"
	}
}, false);

input5.addEventListener('keyup', function(){
	if (this.value === "turn.left" || this.value === "turn.right" || this.value === "" || this.value === "turn.back" || this.value === "move" || this.value === "get.cube" || this.value === "get.item" || this.value === "set" || this.value === "enemy.turn" || this.value === "enemy.view" || this.value === "enemy.attack") {
		output4.innerHTML = "";
	} 
	else if (this.value === "turn.right") {
		output.innerHTML = "";			
	}
	else if (this.value === "turn.back") {
		output.innerHTML = "";			
	}
	else if (this.value === "move") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.cube") {
		output.innerHTML = "";			
	}
	else if (this.value === "get.item") {
		output.innerHTML = "";			
	}
	else if (this.value === "set") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.turn") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.view") {
		output.innerHTML = "";			
	}
	else if (this.value === "enemy.attack") {
		output.innerHTML = "";			
	}
	else {
		output4.innerHTML = "This is incorrect command (line 5)"
	}
}, false);