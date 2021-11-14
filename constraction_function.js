function Alien(name, tech) {
  this.name = name;
  this.tech = tech;
  this.work = function () {
    console.log("solving the bugs in the system");
  };
}

let alien1 = new Alien("kranthi", "javascript");
let alien2 = new Alien("babu", "java");
alien1.tech = "blockblatser";
console.log(alien2);
alien1.work();
