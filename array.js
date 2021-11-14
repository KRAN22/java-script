let value = [6, 7, 8];

console.log(value[1]);

//methodes of arrays

let data = [
  "kranthi",
  10,
  { tech: "java" },
  "rebel",
  function () {
    console.log("helloworld");
  },
];

data[5] = 6;

console.log(data);

data[4]();

let add = [10, 22, 11, 33, 44];
console.log(add.push(2));
console.log(add.pop());
console.log(add.shift());
console.log(add.unshift(24));
console.log(add.splice(3, 2, 55, 66));
console.log(add);

//for in(and)of loop in array

let nums = [];
nums[0] = 10;
nums[99] = 20;

for (let n of nums) {
  console.log(n);
}

for (let key in nums) {
  console.log(key);
}

//  array distructuring

let tables = [4, 5, 6, 7, 8];

console.log(tables);
let [a, b, c, d, e] = tables;
console.log(e);

let k = 5;
let j = 6;
[k, j] = [j, k];
console.log(k, j);

let words = "my name is kranthi babu".split(" ");
let [x, y, z, ...w] = words;
console.log(w);

let kran = [42, 45, 56, 67, 78, 90];

kran.forEach((n, i, kran) => {
  console.log(n, i, kran);
});

console.log(kran);

//filter and wap and reduce

let babu = [54, 56, 57, 68, 89, 78];
let result = babu
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((a, b) => a + b);

console.log(result);
