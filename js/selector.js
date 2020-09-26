const hari = 7;
let hasil;

switch (hari) {
  case 1:
    hasil = "Minggu";
    break;

  case 2:
    hasil = "Senin";
    break;

  case 3:
    hasil = "Selasa";
    break;

  case 4:
    hasil = "Rabu";
    break;

  case 5:
    hasil = "Kamis";
    break;

  case 6:
    hasil = "jum'at";
    break;

  case 7:
    hasil = "Sabtu";
    break;

  default:
    hasil = "hari tidak ada";
    break;
}
console.log(hasil);

const bln = "maret";
let bulan;

switch (bln) {
  case "januari":
    bulan = 1;

    break;
  case "februari":
    bulan = 2;
    break;

    break;
  case "maret":
    bulan = 3;
    break;

    break;
  case "april":
    bulan = 4;
    break;

    break;
  case "mei":
    bulan = 5;
    break;

  default:
    bulan = "belum dibuat";
    break;
}
console.log(bulan);
