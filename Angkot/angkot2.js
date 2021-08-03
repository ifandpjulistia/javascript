// menyatukan pengulangan for dengan while
// meneruskan javascript yang angkot 1 cuma disini menambahkan variable baru yaotu angkot yang beroperasi
var jmlAngkot = 10;
var angkotBeroperasi = 7;
var noAngkot = 1;

// selama variable no angkot lebih kecil sama dengan variable angkotberoperasi maka jalankan console di bawah nya
while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}
// untuk variable no angkot; variable noangkot lebih kecil sama dengan jumlah angkot; lalu increment noangkot tambah satu ketika mulai di jalankan sampai bernilai false jalankan console di bawah
// bisa juga ketika variable noangkot sama dengan variable angkot beroperasi lalu tambahkan satu jadi maksudnya ketika angkot yang tidak beroperasi di mulai di angka atasnya angkot beroperasi
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik.');
}