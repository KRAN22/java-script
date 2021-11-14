let nums = new Set();
nums.add(3);
nums.add(5);
nums.add(3);
nums.add("kranthi");
nums.add("kriran");
nums.add("lokesh");
nums.add("kranthi");
nums.add("196");

nums.forEach((value) => {
  console.log(value);
});

console.log(nums.has("kranthi"));

let map = new Map();

map.set("kranthi", "java script");
map.set("ajay", "phyton");
map.set("eswer", "michine learning");
map.set("kranthi", "blockchine");

map.forEach((v, k) => {
  console.log(k, " : ", v);
});
console.log(map.get("kranthi"));

for (let [k, v] of map) {
  console.log(k, " : ", v);
}
