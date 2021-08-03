// bisa melakukan hitungan matematika dengan menggunakan fungsi lainnya seperti di bawah
function tambah(a, b) {
    return a + b;
}
// menambahkan function kali
function kali(a, b) {
    return a * b;
}
// menambahkan function bagi
function bagi(a, b) {
    return a / b;
}
// dimana divariable bagi kita bisa menambahkan function mana saja yang akan kita hitung seperti contoh di baawah 
// dimana di variable hasil di tambahkan function bagi yang di dalam kurung nya terdapat function kali dan argumennya lalu ada function tambah dan argumennya
// jadi menghitungnya argumen di function kali  mengkalikan nilai nya begitu juga dengan function tambah menambahkan nilai argumennya setalah itu nilai kedua argumennya di bagi karena function kali dan tambah berada di dalam function bagi 
var hasil = bagi ( kali (2,3), tambah (5,5));
// untuk menampilkan nilai nya lalu mengalert variable hasilnya menggunakan popup alert 
alert(hasil);