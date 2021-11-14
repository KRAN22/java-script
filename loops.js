// let i = 1;

// // initialize, condition, increment

// while (i <= 10) {
//   console.log("hello");
//   i++;
// }

// // do while

// i = 10;
// do {
//   console.log("Hello", i);
//   i--;
// } while (i > 0);

// for loop
// for (let i = 1; i <= 10; i++) {
//   console.log("hello", i);
// }

// // nestedloop
// for (let k = 1; k <= 5; k++) {
//   console.log("hai", k);
//   for (let j = 1; j <= 5; j++) console.log("hello", j);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// let num = 45424729;
// let num2 = 0;
// while (num > 0) {
//   console.log(num % 10);
//   num = parseInt(num / 10);
// }

// let input = "name";
// let alien = {
//   name: "Kranthi",
//   tech: "java",
//   work_exp: 4,
// };

// console.log(alien["work_exp"]);

let alien = {
  name: "kranti",
  tech: "java",
  laptop: {
    cpu: "i7",
    window: "10",
    brand: "lenovo",
    ram: 8,
  },
};
for (let key in alien.laptop) {
  console.log(key, alien.laptop[key]);
}

let num1 = 4;
if (num1 % 2 === 0) {
  console.log("num1 is even");
} else {
  console.log("num1 is odd");
}

let num2 = 9;
let result;
result = num2 % 3 === 0 ? "even" : "odd";
console.log(result);
