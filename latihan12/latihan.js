// syntax untuk pengkondisian else if
// if(konisi){ 
// aksi 1  --------> Jika kondisi bernilai true maka jalankan aksi 1
// } else if (kondisi 2) {
    // aksi 2 ---------> jika kondisi 2 bernilai true dengan angka yang berdeda dengan kondisi satu maka jalankan aksi 2
// } else {
// aksi 3 -----------> jika tidak sesuai dengan kondisi satu dan dua maka  jalankan aksi 3
// }

var angka = prompt('Masukan angka bukan huruf goblok !')
if ( angka % 2 == 0){
    alert( angka + ' angka yang anda masukan adalah genap');
} else if ( angka % 2 == 1) {
    alert( angka + ' angka yang anda masukan adalah ganjil');
} else {
    alert( 'yang anda masukan bukan angka');
} 