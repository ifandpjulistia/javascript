// bahasa pemrograman java script menganut function scope tidak block scope

// global scope/ windows scope -> variable yang bisa digunakan dimanapun di program kita selama satu halaman
 var a = 1;

//  function scope variable apapun yang akan kita buat di dalam function ini itu hanya berlaku untuk function ini saja tapi jika kita menambahkan console.log dan memanggil variable a maka akan terbaa karena variable a merupakan variable gelobal
 function tes() {
 var b = 2;
 }
tes();
// maka variable b tidak akan terbaca karena variable b hanya terbaca di dalam function saja 
console.log(b); 