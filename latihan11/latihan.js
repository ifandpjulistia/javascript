// pengkondisian atau percabangan keyword if else 
// syntax dasar pada if
// if(kondisi){
// aksi akan di jalankan ketika kondisi bernilai true
// }
// ...... keluar dari blok jika kondisi bernilai false

// membuat variable angka yang membungkus prompt
var angka = prompt('masukan angkanya :');
// jika variable angka  di bagi dua dan sisa baginya 0 maka bernilai true dan eksekusi yang di bawah
if (angka % 2 == 0) {
    // jika berniali true maka bilangan tersebut adalah genaap
    alert(angka + ' ADALAH ANGKA YANG GENAP');
} else {
    // jika bernilai false maka bilangan tersebut adalah ganjil
    alert(angka + ' ADALAH ANGKA YANG GANJIL')
}