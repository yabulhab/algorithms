//Challenge #2
//Reverse a String


var reverseMe = function(string){
	var newString = "";
	console.log(newString);
	for (i=string.length-1; i>=0; i--) {
		newString += string[i];
		console.log(newString);
	}
	console.log(newString);
};

reverseMe("Yasmine Abulhab"); // ==> "bahlubA enimsaY"
reverseMe("Allxie Cleary"); // ==> "yraelC eixllA"

//get length of string = length