let fungsi = function (nama) {
  console.log("belajar function " + nama);
};
fungsi("udin");

let contoh = (nama) => {
  console.log("belajar function " + nama);
};
contoh("mitsuha");

let tambah = function (a, b) {
  return 1 + b;
};
console.log(tambah(1, 2));

let plus = (a, b) => a + b;
console.log(plus(2, 3));

let hasil = (a) => a * 2;
console.log(hasil(5));

let lagi = () => console.log("coba lagi");
lagi();

let belajar = () => {
  console.log("baris satu");
  console.log("baris dua");
  console.log("baris tiga");
  console.log("baris selanjutnya");
};
belajar();

let nilai = 8;
let uji = nilai < 7 ? () => (predikat = "gagal") : () => (predikat = "LULUS");
console.log(uji());
