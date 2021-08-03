var tanya = true;
while ( tanya ) {
    // menangkap pilihan playernya
    var p = prompt('apa yang akan kampu pilih \n  cth: gajah, semut, orang');


    // menangkap pilihan dari computer
    // menggunakan bilangan random
    var kom = Math.random();
    console.log(kom);


    if (kom < 0.34) {
        kom = 'gajah';
    } else if (kom >= 0.34 && kom < 0.67) {
        kom = 'orang';
    } else {
        kom = 'semut';
    }

    var hasil = '';
    // menentukan rules permainannya
    if (p == kom) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        // if (kom == 'orang') {
        //     hasil = 'MENANG'
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (kom == 'orang') ? 'MENANG' : 'KALAH';
    } else if (p == 'orang') {
        hasil = (kom == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (p == 'semut') {
        hasil = (kom == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukan pilihan yang salah'
    }

    // tampilkan hasilnya
    alert('Pilihan kamu: ' + p + ' \nPilihan Komputer: ' + kom + '\nMaka hasilnya : Kamu ' + hasil);
 
    tanya = confirm('lagi?');
}
alert ('terimakasih sudah bermain')