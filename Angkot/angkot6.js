var jmlAngkot = 10;
var angkotBeroperasi = 6;


// ketika variable noAngkot diisi satu, dan variable noAngkot lebih kecil sama dengan Variable jmlAngkot jalankan increment noANgkot yang di tambahkan satu2 ketika mengulang
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++)
    // ketika variable noAngkot lebih kecil sama  dengan angkot yang beropreasi dan 5 bukan dari variable noAngkot maka jangan tampilkan angkot beroperasi dengan baik di no 5
    if (noAngkot <= angkotBeroperasi && noAngkot != 5) {
        // jalankan console.log kendaraan angkot beroperasi dengan baik
        console.log('Angkot No. ' + noAngkot + ' Beropereasi dengan baik');
        // ketika variable noAngkot dibagi 2 sisa bagi nya sama dengan 0 lalu OR variable noAngkot sama dengan 5
    } else if (noAngkot % 2 === 0 || noAngkot === 5) {
    // jalankan angkot kerja lembur
    console.log(' Angkot No. ' + noAngkot + ' Sedang Kerja Lembur')
} else { // selain itu maka console yang di jalankan angkot tidak beroperasu dengan baik
    console.log('Angkot No. ' + noAngkot + ' Tidak Beropereasi dengan baik');
}