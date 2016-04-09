//Your task (should you choose to accept it):
// Make the following function console.log each number from 0 to n.
// Except, if the number is a multiple of 3, have it console.log "Fizz" instead.
// And if the number is a multiple of 5, have it console.log "Buzz" instead.
// If it's a multiple of 3 and 5, have it console.log "FizzBuzz".

var fizzbuzz = function(n){
	//your code
	for (i=0; i<=n; i++) {
		if (i % 5===0 && i % 3===0) {
			console.log ("Buzz");
		} else if (i % 5===0) {
			console.log ("Fizz");
		} else if (i % 3===0) {
			console.log ("FizzBuzz");
		} else {
			console.log(i);
		};
	};
};

fizzbuzz(15);
fizzbuzz(30);
fizzbuzz(100);