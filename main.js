// ############## for loops #####################
// Write a for loop that increments the counter variable by 10 each time, and displays the value.

for (var i = 0; i <= 200; i = i + 10) {
   console.log("The number is: " + i );
};



// Write a for loop that divides the counter variable by 2 each time, and displays the value.
// Augment the loop to insert each new value into an array


var loopCounter = [];
for (var i = 10000; i > 1; i = Math.floor( i/2 ) ){
  console.log("The number is: " + i);
  loopCounter.push(i);
}

console.log("loopCounter", loopCounter);




// Write a loop that starts at 100 and decrements a variable by 1. If the number is even,
// add the number to the beginning of an array, else add it to the end of the array.

var evenOddArray = [];
for (var i = 100; i >= 0; i--) {
  if (i % 2 === 0 ){
    evenOddArray.unshift(i);
  } else {
    evenOddArray.push(i);
  }
}

console.log("evenOddArray", evenOddArray);



