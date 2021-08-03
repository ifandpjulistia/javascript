var jmlAngkot = 10;
var angkotBeroperasi = 7;
var noAngkot = 1;

// menampilkan pengulangan menggunakan for dimana
// untuk variable no angkot yang bernilai satu lalu noAngkot lebih kecil sama dengan variable jmlAngkot dan increment noAngkot bertambah satu selama bernilai true
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++)
    // jika variable noAngkot lebih kecil sama dengan variable angkotBeroperasi maka tampilkan
    if (noAngkot <= angkotBeroperasi) {
        // angkot beroperasi dengan baik
        console.log('Angkot No. ' + noAngkot + '  beroperasi dengan baik.');
    } else { // jika tidak maka tampilkan angkot beroperasi tidak baik
        console.log('Angkot No. ' + noAngkot + '  tidak beroperasi dengan baik.');
    }

// for (noAngkot; noAngkot <= angkotBeroperasi; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + '  beroperasi dengan baik.');
// }
// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik.');
// }