// membuat function dengan menambahkan parameter a,b
function tambah(a, b) {
    // mereturn atau mengembalikan paramter a dan b dengan menambahkan fungsi tambah karena  akan menjumlahkan parametr
    return a + b;
}
// membuaat variable a dan b dimana kita menginputkan nilai dari parameter a dan b menjadi sebuah argument 
// menambahkan fungsi parseInt supaya inputan dari popup prompt yang default nya string menjadi intejer supaya hitungannya di lakukan secara matematika
var a = parseInt(prompt('masukan nilai 1 :'));
var b = parseInt(prompt('masukan nilai 2 :'));
// variable hasil di mana di dalamnya di tambahkan function tambah di atas dan masukan nilai argument nya yaitu a dan b 
var hasil = tambah(a, b);
// tampilkan hasil penjumlahan di console dengan value variable hasil
alert('hasil nya :');
alert(hasil);