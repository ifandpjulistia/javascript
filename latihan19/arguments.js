// menghitung parameter dengan function arguments

// menambahakn function tamabh di mana di dalam parametrnya kosong
function tambah(){
    // lalu membuat variable hasil dengan nilai kosong
    var hasil = 0;
    // lalu menggunakan pengkondisian for
    // dimana variable i sama dengan nol dan i lebih kecil dari arguments.lengt, length ini untuk menghitung katanya, lalu increment i tambah satu tambah satu sampai bernilai false
    for ( i = 0; i<arguments.length; i++){
        // lalu variable hasil tambah sama dengan aruments kurung siku i
        // hasil + hasil = arguments[i]
        hasil += arguments[i];
    }
    // mengembalikan hasilnya
    return hasil;
}
// buat variable coba yang di dalamnya terdapat function tambah dan juga argumen yang bisa kita tambahkan berapapun karena function arguments akan menangkapnya
var coba = tambah(2,2,3,4,2);
console.log(coba);