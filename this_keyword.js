// let laptop2 = {
//   cpu: "m1",
//   ram: "16gb",
//   brand: "apple",

//   getconfig: function () {
//     console.log(this.cpu);
//   },
// };

// let laptop1 = {
//   cpu: "i7",
//   ram: "16gb",
//   brand: "lenovo",

//   getconfig: function () {
//     console.log(this.cpu);
//   },
// };

// laptop2.getconfig();

// function fasternumber(laptop1, laptop2) {
//   if (laptop1.cpu > laptop2.cpu) {
//     console.log(laptop1);
//   } else {
//     console.log(laptop2);
//   }
// }

let laptop1 = {
  cpu: "i7",
  ram: "16gb",
  brand: "hp",
  compare: function (other) {
    if (this.cpu > other.cpu) {
      console.log(this);
    } else {
      console.log(other);
    }
  },
  getconfig: function () {
    console.log(this.cpu);
  },
};

let laptop2 = {
  cpu: "i5",
  ram: "16gb",
  brand: "lenovo",

  getconfig: function () {
    console.log(this.cpu);
  },
};

// fasternumber(laptop1, laptop2);
laptop1.compare.laptop2;
