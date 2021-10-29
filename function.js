// function greet() {
//   console.log("hello world");
// }

// greet();
// pass the value and return the value
// function putty(u) {
//   return `hello ${u}`;
// }
// let user = "kranti";
// let str = putty(user);
// console.log(str);

// function espression

let add = function (num1, num2) {
  return num1 + num2;
};

let result = add(5, 6);
console.log(result);

// local and global variables
let add = (num1, num2, num3 = 1) => num1 + num2 + num3;

let results = add(10, 20, -3);

console.log(results);

//Arrow functions

let greet = (user) => {
  console.log("hello " + user);
  return 1;
};
console.log(greet("kranthi"));
