// hanya menampilkan notif dan hanya menampilkan tombol ok
// alert('hello ifan dwipruana julistia')

// popup yang menampilkan texbox inputan untuk kita isi dimana prompt nya di bungkus dalam variable nama supaya ketika kita memasukan data maka data tersebut aka tersimpan ke variable nama dan untuk menampilkan nya kita tinggal memanggil variable nama
alert ('selamat datang');
var back = true;
var nama = prompt('nama kamu siapa ?');
alert('hello ' + nama + ' Selamat datang');

// popup untuk meminta konfirmasi kepada user dimana di dalamnua terdapat dua tombol oke dan cancel biasanya dugunakan untuk konfirmasi dalam mendelet data
var tes = confirm('kamu yakin ' + nama + ' untuk mengakhirinya? karena segala sesuatu yang sudah di bangun akan membekaskan kenangan yang mendalam');
// jika ketika menekan tombol variable tes dan sama dengan bernailai true maka
if (tes === true) {
    // jalankan ini
    alert('Jangan sampai menyesal ' +nama+ '');
} else {
    // jika menekan tombol cancel atau else maaka jalankan ini
    alert('terimakasih ' +nama+ '');
}