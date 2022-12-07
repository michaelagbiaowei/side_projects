//=========FUNCTIIONS======================
/**
 * ! TYPES OF FUNCTIONS
 * todo: FUNCTION WITHOUT A PARAMETER
 * todo: FUNCTION WITH PARAMETER
 * todo: FUNCTION WITH RETURN
 * todo: FUNCTION EXPRESSION
 * todo: ARROW FUNCTION
 * todo: CALL_BACK FUNCTION
 */

//TODO: FUNCTION WITHOUT A PARAMETER
// function function_name (){statement} calling_the_function

function sum() {
  sum_of_num = 20 + 20;
  console.log(sum_of_num);
}
sum();
console.log();
//==========================================

name_of_users = ["Michael", "John"];
function add_user_name() {
  name_of_users.push("Mirram");
  console.log(name_of_users);
}
add_user_name();
console.log();
//======================================================
count = 3 + 3;
function add_num() {
  count += 4;
  if (count > 10) {
    console.log(false);
  } else {
    console.log(true);
  }
  console.log(count);
}
add_num();
console.log();

//TODO:FUNCTION WITH PARAMETER
//!function function_name (parameter(s)){statement}calling_the_function(variables)
function names(first_name, last_name) {
  console.log(first_name, last_name);
}
names("Michael", "Agbiaowei");
console.log();

//TODO: FUNCTION WITH RETURN

function user_name(first_name, last_name) {
  user_name_person = `${first_name} ${last_name}`;
  return user_name_person;
}
person = user_name("Michael", "Agbiaowei");
console.log(person);
console.log();
//======================================
function add_nums(num_1, num_2) {
  // nums = `${num_1} ${num_2}`;
  return num_1 + num_2;
}
add = add_nums(20, 20);
console.log(add);
console.log();

//TODO: FUNCTION EXPRESIION
//function_name = function(){statement} calling_the_function

hello = function () {
  console.log("Hello world");
};
hello();
console.log();

//TODO: ARROW FUNCTION
add_nums_arrow = (num_1, num_2) => {
  return num_1 + num_2;
};
add_arrow = add_nums_arrow(20, 80);
console.log(add_arrow);
