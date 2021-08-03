// membuat object



// ----------- menggunakan object literal-------=
// kita mempunyai object yang namanya mahasiswa yang di dalamnya terdapat isi empat buah properti
var mhs1 = {
    nama: "ifan dwipriana julistia",
    nim: 20160810091,
    email: "ifandwipriana9@gmail.com",
    jurusan: "Teknik informatika"
}
var mhs2 = {
    nama: "Bambang ",
    nim: "20160810092",
    email: "bambang@gmail.com",
    jurusan: "Teknik informatika"
}

//------- menggunakan function declarataion---------
// ini lebih simple dari literal karena deklarasinya hanya dibuat sekali dan object nya bisa dibuat berulang2
// pertama dengan membuat object nya menggunakan function dan nama functionnya bebas lalu setelah nama masukan nama propertinya
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    // variable mahasiswa kosong
    var mhs = {};
    // dan panggil nama variable dan properti yang di masukan di function atas
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs
}
// untuk mengisi object di atas dengan membuat variable mhs3 dan panggil functionnya lalu isi object dari properti di atas pengisiannya harus berururtan
var mhs3 = buatObjectMahasiswa('bambung', 2016081021, 'bambung@gmail.com', 'teknik industrsi')
// kalau mau menambahkan mahasiswa berrikutnya tinggal buat variable mahasiswa baru 
var mhs4 = buatObjectMahasiswa('ahay', "201607100981", "ahay@uhuy.com", "pendidikan jasmani")



// ---------menggunakan konstructor---------------
// mirip dengan  function delcaration karenammembuat object tapi di konsturctor ketika membuat object tidak perlu menambahakn variable dan return di dalamnya cukup menuliskan properti yang sudah di tambahkan di function
// dan ketika menuliskan properti di awali dengan fungsi this lalu dengan nama properti yang secara terururt
function Mahasiswa(nama, nim, email, jurusan) {
this.nama = nama;
this.nim = nim;
this.email = email;
this.jurusan = jurusan;
}
// untuk menambahkan data object di atas cukup dengan menmabahakan varibale baru dan menggunakan fungsi new sebelum memanggil nama 
// function di aatas
var mhs5 = new Mahasiswa('erik',20172017320,'erik@gmail.com','Teknik Kimia')