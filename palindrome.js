//Challenge 3

var isPalindrome = function(string){
	var newString = "";
	for (i=string.length-1; i>=0; i--) {
		newString += string[i];
	};
	console.log(newString);
	console.log(string);
	
	if (newString === string) {
		console.log ("it's a palindrome");
		return true;
	} else {
		console.log ("it's not a palindrome");
		return false;
	}
	//Return true if the string is the same forward as it is backwards. 
	//Return false if it is not.
}

isPalindrome("stanleyyelnats"); // --> true
isPalindrome("hoodie"); //--> false