let coba = function () {
  return "coba function";
};

let buah = [
  "apel",
  "mangga",
  "stoberi",
  7,
  coba(),
  (tes = () => "hasil return arrow function"),
  function name() {
    return "Ahmad Muafi";
  },
];
console.log(buah);
console.log(buah[1]);

for (let i in buah) {
  console.log(buah[i]);
}

console.log(buah[5]());
console.log(buah[6]());
