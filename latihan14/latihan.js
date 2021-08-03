// pengkondissian swicth
// switch itu tidak memiliki kondisi yang banyak syntax nya

// swicth(ekpresi){
// case "nilai 1": 
// aksi 1
//         {break;]
// case "nilai 2":
// aksi 2
// [break;]
// case "nilai n";
// aksi n
// [break;]
// default:
// aksi default
// [break;]
// }

// var angka = prompt(' masukan angkanya: '); // inputan prompt akan menghasilkan string jadi angka yang di jadikan aksi atau tujuan harus di ubah ke dalam string dengan menambahkan kutip satu 

// switch (angka) { // menamaabhakn fungsi switch dimana di dalam nya memasukan ekpresi berupa variable angka
//     case '1': // jika string satu maka lakukan alert, anda memasukan angka satu dan case nya harus nilai tidak bisa memasukan kondisi
//         alert('anda memasukan angka 1');
//         break;
//     case '2':
//         alert('anda memasukan angka 2');
//         break;
//     case '3':
//         alert('anda memasukan angka 3');
//         berak;
//     default:
//         alert('angka yang anda masukan salah');
// }

var makanan =  prompt('masukan makanan dan minuman : \n (cth : Nasi, Daging, Susu, Hamburger, softdrink');

// pengkondisian switch dalam kurung variable yang telah kita buat di atas
switch (makanan) {
    case 'Nasi': //menambahkan case yang bermaksud apa yang akan kita tampilkan 
    case 'Daging':
    case 'Susu': //karena dari case nya sama akan menampilkan makaan sehat jadi break nya hanya satu supaya lebih efektif
        alert('anda memilih makanan / minuman sehat');
        break;
    case 'Hamburger':
    case 'Softdrink':
        alert('anda memilih makanan / minuman TIDAK sehat');
        break;
    default:
        alert('makanan yang anda pilih belum terdaptar di kami, mohon masukan makanan yang tertera');

}