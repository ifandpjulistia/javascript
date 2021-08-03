var jmlAngkot = 10;
var angkotBeroperasi = 6;


// ketika variable noAngkot diisi satu, dan variable noAngkot lebih kecil sama dengan Variable jmlAngkot jalankan increment noANgkot yang di tambahkan satu2 ketika mengulang
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++)
    // jika variable noAngkot lebih kecil sama dengan variable angkot yang beroprasi maka 
    if (noAngkot <= angkotBeroperasi) {
        // jalankan console.log kendaraan angkot beroperasi dengan baik
        console.log('Angkot No. ' + noAngkot + ' Beropereasi dengan baik');
        // apakah variable noangkot sama dengan 8
    } else if (noAngkot === 8) {
    // jalankan angkot kerja lembur
    console.log(' Angkot No. ' + noAngkot + ' Gas Kerja Lembur')
} else { // selain itu maka console yang di jalankan angkot tidak beroperasu dengan baik
    console.log('Angkot No. ' + noAngkot + ' Tidak Beropereasi dengan baik');
}