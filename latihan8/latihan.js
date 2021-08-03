// control flow alur kendali
// jika kita mempunyai lebih dari satu statement maka akan di eksekusi dari atas ke bawah dari kiri ke kanan

// ----------Pengulangan / loop ---------
// for
// while
// do while

// pengulangan manual
// alert('mulai');
// alert('Hellor word');
// alert('Hellor word');
// alert('Hellor word');
// alert('Hellor word');
// alert('Hellor word');
// alert('Selesai');

// pengulangan menggunakan for lebih singkat yang tadinya di tulis semua menggunakan for hanya menjadi satu baris
// alert('mulai');
// // untuk variable i sama dengan nol dan variable i lebih kecil dari 5; lalu i++ maksudnya i nya bertambah satu sampi berniali false
// for (var i = 0; i < 5; i++) {
//     // akan mengulang sebanyak lima kali
//     alert('hello word');
// }
// alert('terimakasih');

// ------------- pengkondisian/ percabnagan --------
// if
// if .. else
// if.. else if.. else
// switch


var angka = prompt('masukan angka :'); // pengkondisian dengan if
if (angka % 2 === 0) { // jika variable angka di bagi 2 dan hasil baginya 0 maka bernilai true 
    alert(angka + ' adalah Bilangan Genap'); // dan merupakan bilangan bulat
} else { // jika hasil bagi nya tidak 0 maka bernilai false dan akan menampilkan bilangan ganjil
    alert(angka + ' adalah Bilangan Ganjil')
}