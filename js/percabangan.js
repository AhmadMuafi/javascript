if (true) {
  console.log("dijalankan jika benar");
} else {
  console.log("diajalankan jika salah");
}

let nilai = 59;
let standart = 60;
let status = "LULUS";
let gagal = "TIDAK LULUS";
let batasAtas = 100;
let batasBawah = 0;
let peringatan = "NILAI SALAH";

if (nilai <= batasAtas || nilai >= batasBawah) {
  if (nilai >= standart) {
    console.log(status);
  } else {
    console.log(gagal);
  }
} else {
  console.log(peringatan);
}
