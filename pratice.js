// // // function getfaster(laptop1, laptop2) {
// // //   if (laptop1.cpu > laptop2.cpu) {
// // //     console.log(laptop1);
// // //   } else {
// // //     console.log(laptop2);
// // //   }
// // // }

// // let laptop2 = {
// //   cpu: "i5",
// //   ram: 16,
// //   brand: "lanovo",
// //   getconfig: function () {
// //     console.log(this.cpu);
// //   },
// // };

// // let laptop1 = {
// //   cpu: "i7",
// //   ram: 16,
// //   brand: "lanovo",
// //   compare: function (other) {
// //     if (this.cpu > other.cpu) {
// //       console.log(this);
// //     } else {
// //       console.log(other);
// //     }
// //   },

// //   getconfig: function () {
// //     console.log(this.cpu);
// //   },
// // };

// // laptop1.compare(laptop2);
// // // getfaster(laptop1, laptop2);

// function Alien(name, tech) {
//   this.name = name;
//   this.tech = tech;

//   this.work = function () {
//     console.log("havea great day");
//   };
// }
// let alien1 = new Alien("kranthi", "javascript");
// let alien2 = new Alien("ramya", "phyton");

// alien2.name = "bhargavi";

// console.log(alien1);

// alien1.work();

// let data = [5, 7, 9, 8];
// console.log(data.push(2));

// console.log(data);

// let num = [];
// num[0] = 5;
// num[99] = 9;
// for (let n of num) {
//   console.log(n);
// }

// for (let key in num) {
//   console.log(num[key]);
// }
let number = 10;
function printArray(number) {
  let newArray = [];
  for (let i = 1; i <= number; ) {
    newArray.push(i);
    ++i;
  }

  return newArray;
}
