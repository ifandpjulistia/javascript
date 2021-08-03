// Konsep THIS

// var a = 10;
// console.log(this.a);

// menggunakan function declrataion
// function halo(){
//     console.log(this);
//     console.log('halo, saya ifan dwipriana julistia');
// }
// // this mengembalikan object global
// this.halo();


// cara 2 - object literal
// var ifan = {};
// ifan.halo = function(){
//     console.log(this);
//     console.log('hallo');
// }
// // this mengembalikan object yang bersangkutan
// ifan.halo();


// cara 3 - constructor
function Ifan (){
    console.log(this);
    console.log('ifan dwipriana julistia');
}
// this mengembalikan object yang baru dibuat
new Ifan();






























// membuat object

// cara 1 - function declaration biasa
// kita mebuat function dengan menambahkan properti kosonng
// function Ifan (){
    // lalu gunakan console dan masukan object yang akan kamu tampilkan
//     console.log('nama kamu siapa?');
// }
// untukmenampilkannya panggil nama functionnya kurungbuka kurung tutup
// Ifan();

// cara ke 2 - obejct literal biasa
// membuat object kosong
// var ifan = {};
// lalu tambahkan function atau method dimana di dalamnya memanggil nama variable di atas lalu tambahkan nama functionnya dan sama dengan function
// ifan.halo = function () {
    // lalu console tambah data di dalam console
//     console.log('ifan dwipriana julistia');
// }
// untuk menampilkannya panggil nama object dan functionya
// ifan.halo();

// cara ke 3 - constuctor function
// cara membuatnya sama seperti function declaration hanya saja uang membedakannya cara pemanggilannya yang mengunakan keyword new di awal
// function Ifan(){
//     console.log('halllllooooooo');
// }
// new Ifan();

