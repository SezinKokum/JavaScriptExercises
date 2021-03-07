/*var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3);
addSum is a function without a return statement. 
The function will change the global sum variable but the returned value of the function is undefined.

addFive should be a function.

Passed
Once both functions have run, the sum should be equal to 8.

Passed
Returned value from addFive should be undefined.

Passed
Inside the addFive function, you should add 5 to the sum variable.*/
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();
console.log(sum)