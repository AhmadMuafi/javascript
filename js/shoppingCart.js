let tblmenu = [
    {idmenu:1, idkategori:1, menu:"Apel Hijau", gambar:"kamera.jpg", harga:3000},
    {idmenu:2, idkategori:1, menu:"Pisang Raja", gambar:"usb.jpg", harga:5000},
    {idmenu:3, idkategori:2, menu:"Nasi Padang", gambar:"celana.jpg", harga:20000},
    {idmenu:4, idkategori:2, menu:"Nasi Ayam", gambar:"speaker.jpg", harga:15000},
    {idmenu:5, idkategori:3, menu:"Es Teh", gambar:"jacket.jpg", harga:7000}
];
let cart = [];

let tampil = tblmenu.map(function(kolom) {
    return `<div class="produk-content">
                <div class="image">
                    <img src="produk/${kolom.gambar}" alt="">
                </div>
                <div class="product-bottom">
                    <h3>${kolom.produk}</h3>
                    <h5>${kolom.harga}</h5>
                    <div class="btnBeli">
                        <button data-id="${kolom.idproduk}">Beli</button>
                    </div>
                </div>
            </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

document.querySelector(".produk").innerHTML = tampil;
let btnBeli = document.querySelectorAll(".btnBeli > button");

for (let index = 0; index < btnBeli.length; index++) {
    btnBeli[index].onclick = () => {
        // cart.push(btnBeli[index].dataset["id"]);
        tblproduk.filter(function (a) {
            if (a.idproduk == btnBeli[index].dataset["id"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    }
}
