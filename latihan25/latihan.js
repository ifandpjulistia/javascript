//  Mnaipulasi array

// 1. menambah isi array
// var arr = [];
// arr [0] = "Ifan dwipriana julistia";
// arr [1] = "ifonk";
// arr [2] = "nofa";
// arr [5] = "doddy";
// // ketika kita melewati urutan pada array, maka aray akan tetap membaca nya dengan mengisi nya dengan default undefined
//  console.log(arr);

// 2. mengahpus array 
// var arr = ["ifan", "dwipriana", "julistia"];
// jadi ketika kita akan menghapus salah satu nilai di atas contoh nya akan menghapus "dwipriana" maka kita panggil index nya 
// varr[1] = undefin karena "dwipriana" index nya 1 satumaka panggil indeny nya dan masukan VALUE undefined maka keti kita jakankan "dwipriana" sudah tidak ada di fantikan oleh undefined
// console.log(arr);


// 3. menampilkan isi array
// var arr = ["ifan", "dwipriana", "julistia","ifonk","bubu"];
// supaya ketika kita menambahkan data tidak perlu mengganti angka yang ada di for tinggal panggil nama variable nya lalu tambahkan method .length nanti javascript nya akan menghitung sendiri
// for (i = 0; i < arr.length; i++) {
// untuk memanipulasi data dimana menjadikan data di atas seolah2 adalah data mahasiswa
// dengan menambahkan tulisan  mahasiswa sebelum namanya lalu tanda strip  gunakan konket tambah lalu kurung buka masukan i+ yang di konketkan dengan variable arr
// jadi hasilnya akan menjadi
//  Mahasiswa ke-0:ifan
// Mahasiswa ke-1:dwipriana dll
//     console.log('Mahasiswa ke-' + (i + 1) + ':' + arr[i]);
// }





//-------------Method pada array ------------
//  length => untuk mengetahui berapa jumalah elemen yang ada pada array
// join => method yg menggabungkan seluruh isi array dan mengubahnya menjadi string
// push, pop, shift, unshift
// slice, splice
// foreach, map
// sort => untuk mengurutkan angka
// filter, find

//1. --Join--
// var arr = ["ifan","dwipriana","julistia"]
// menggabungkan isi array menjadi string yang rapih untuk menambahkan pembatasnya tambahkan di tanda kurung setelah method join dan bungkus dengan tanda kutip
// console.log(arr.join('-'));
//  hasilnya => ifan-dwipriana-julistia


// 2. ------ push dan pop-------
// push menambahakn elemen array di akhir array nya dan push bisa menambahakn beberapa elemen
// arr.push('bobi');
// console.log(arr.join('-'));
// ============================================================================
// sedangkan pop yaitu menghapus elemen terakhir dari sebuah arraynya
// arr.pop();
// console.log(arr.join('-'));


// 3.------unshift dan shift------
// unshift menamabahkan elemen baru di awal arraynya 
// arr.unshift('bambang' );
// console.log(arr.join('-'));
// ====================================================
// shift untuk mneghapus elemen aawal dari array
// arr.shift();
// console.log(arr.join('-'));

// 4.--------- splice ----------------------
// splice untuk menyisipkan elemen array di tengah2
// splice(mula dari index berapa, mau dihapus berapa, mau di tambah elemen baru apa );
// arr.splice(1, 1, 'bambang','zono');
// console.log(arr.join('-'));

// 5.--------slice---------
// slice(awal,akhir);
//untuk index awal nya terbawa dan index akhir nya di kurangi satu jadi ketika kita mau menampilkan index satu dan dua dan untuk valuenya kita panggil index satu dan index 3 jadi index awal akan terbawa dan index akhir akan dikurangi satu jadi yg tampil nya index 1 dan 2
// var arr = ["ifan","dwipriana","julistia","abdul","ghazali"];
// var arr2 = arr.slice(1,2)
// console.log(arr2.join('-'));


// 6. ---------- foreach --------
// pengulangan yang hampir mirip dengan for hanya saja foreach lebih simple da lebih efektip
// var angka = [1,2,3,4,5,6,7,8,9];
// untuk setiap elemen yang ada pada elemen angka lakukan fungsi berikut ini 
// angka.forEach(function(e){
//     console.log(e);
// })


// 7.--------map--------
// pengulangan yang bisa mengembalikan nilai 
// var angka = [1,2,3,4,5,6,7,8,9];
//  var angka2 = angka.map(function(e){
//     return e * 2;
// });
// console.log(angka2.join('-'));


// 8. --------short -----
// untuk menyusun atau mengurutkan isi arraynya
// var angka = [1,2,,4,7,3,8,5,9,4,5,7,8];
// untuk membaca angka puluhan supaya mengurut maka tambahkan elemen function yang di dalamnya terdapat(a,b) lalu return a-b kareba sort hanya membaca angka awlanya saja meski menambahkan 20 angkanya akan berada setelah angka satu kalau sebelum menambahakn function (a,b)
// angka.sort(function (a,b){
//     return a-b;
// });
// console.log(angka.join('-'));



// 9.--------- filter dan find-------
// filter untuk mencari nilai pada array dan mengembalikannya dalam bentuk array
//  filter bisa di gunakan ketika kita mencari angka tertentu atau menampilkan angka yang lebih kecil dari atau lebih besar dari angka yang telah kita pilih untuk di tanpilkan angka yanglainnya sedangakan 
// find hanya menampilkan satu angka setelah angka yang kita cari seperti contoh akan menampilkan yang lebih dari 5 / >5 maka hanya menampilkan satu angka yang setelah lima sedangkan filter menampilkan semua angka yang lebih dair lima 
// var angka = [1, 2, 4, 7, 3, 8, 5, 9, 4, 7, 8];
// var angka2 = angka.find(function (e) {
//     return e > 5;
// });
// console.log(angka2);