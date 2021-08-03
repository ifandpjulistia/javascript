//    menghitung volume kubus dengan matematika
// ketika menambahkan kubus lagi harus menambahkan variable barulagi jadi tidak epektif
//    var a = 8;
//      var b = 3;
//      var volumeA;
//      var volumeB;
//      var total;

//      volumeA = a * a * a;
//      volumeB = b * b * b; 

//      total = volumeA + volumeB;
//      alert(total);


//  menghitung volume kubus dengan javascript
// membuat function yang di dalamnya terdapat dua parameter 
function kubus(a, b) {
    // buat masing2 dengan variable
    var total, volumeA, volumeB;
    // variable volumeA dengan nilai atau rumus hitungan a*a*a atau a pangkat 3 dan begitu pula dengan volumeB
    volumeA = a * a * a;
    volumeB = b * b * b;
    // lalu variable total dengan value nya memanggil volumeA dan VolumeB untuk di jumlahkan
    total = volumeA + volumeB;
    // kemudian mengembalikan nilai dengan mereturn vaiable total
    return total;
} 
// menampilkan function dengan menggunakan alert dan panggil function nya lalu masukan nilainya
alert(kubus(8, 3));
alert(kubus(10, 5));