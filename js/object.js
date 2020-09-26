const object = {
  nama: "Ahmad Muafi",
  telp: 1234567890,
  buah: ["apel", "mangga", "stoberi"],
  coba: function () {
    return "coba function dalam object";
  },
  boleh: true,
  "tulis aja": 1234,
};

console.log(object.nama);
console.log(object.telp);
console.log(object.boleh);
console.log(object.coba());
console.log(object.buah[0]);
console.log(object["tulis aja"]);
