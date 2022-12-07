//=====================LOOPS AND ITERATIONS===============================
/**
 * ! TYPES OF LOOPS
 * todo: FOR LOOP
 * todo: FOR..OF LOOP
 * todo: FOR...IN LOOP
 * todo:FOR...EACH LOOP
 * todo: WHILE LOOP
 * todo: DO...WHILE LOOP
 */

//TODO: FOR LOOP
//for ([initialExpression]; [conditionExpression]; [incrementExpression])
for (let step = 0; step < 5; step++) {
  //! Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step", step);
}
console.log();
//TODO: FOR...OF LOOP
/**
 * The for...of statement creates a loop Iterating over iterable objects
 * including Array, Map, Set, arguments object and so on
 * ! the for...of loop iterate over property values
 */
num = [1, 2, 3];
for (i of num) {
  console.log(i);
}
console.log();
/**
 * for (variable of object) statement;
 */

//TODO: FOR...IN LOOP
/**
 * The for...in statement iterates a specified variable over all the enumerable properties of an object
 * ! the for...in loop iterate over property names/keys
 */
num_2 = [3, 4, 5, 6]; //0, 1, 2, 3 are the property name/key of [3, 4 ,5 ,6]
num_2.foo = "hello";
num_2.more = "world"; //more is a property name/key to "world"
for (i in num_2) {
  console.log(i);
}
console.log();
/**
 * for (variable in object) statement;
 */

//TODO: FOR..EACH LOOP
/**
 * forEach() calls a provided callbackFn function once for each element in an array in ascending index order
 */
numOfArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num_call_back_runs = 0;

numOfArray.forEach((element) => {
  num_call_back_runs += element;
});

console.log(num_call_back_runs); //!this returns the sum of numOfArray
//=======================================

num_of_even_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num_call_back_even = 0;
num_of_even_array.forEach((element) => {
  if (element % 2 == 0) {
    num_call_back_even++;
  }
});

console.log(num_call_back_even); //!this counts and returns the number of even numbers
console.log();
//============================================================

num_of_odd_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num_call_back_odd = 0;

num_of_odd_array.forEach((element) => {
  if (element % 2 !== 0) {
    num_call_back_odd++;
  }
});

console.log(num_call_back_odd); //!this counts and returns the number of odd numbers
console.log();

//TODO: CONVERTING FOR...LOOP TO FOR..EACH LOOP
for_loop_arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for_loop = [];
//for loop
for (i = 0; i < for_loop_arrays.length; i++) {
  console.log(for_loop.push(for_loop_arrays[i]));
}
console.log();
//======================================================
for_each_arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for_each = [];
//for...Each loop
numOfArray.forEach((for_each_arrays) => {
  console.log(for_each.push(for_each_arrays));
});
console.log();

//TODO: WHILE...LOOP
/**
 * A while statement executes its statements as long as a specified condition evaluates to true
 */
while_loop = 0;

while (while_loop < 5) {
  console.log(while_loop++);
}
console.log();

//TODO: DO...WHILE LOOP
/**
 * The do...while statement repeats until a specified condition evaluates to false
 */
do_while_loop = 0;

do {
  console.log(do_while_loop++);
} while (do_while_loop < 5);
console.log();
//================================================

do_while_loop_eg = 0;
do {
  console.log(do_while_loop_eg++);
} while (do_while_loop_eg > 5); //0
