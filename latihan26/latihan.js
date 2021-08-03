// pengelolaan penumpang angkot menggunakan array

var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tambahkan penumpang di awal array
        penumpang.unshift(namaPenumpang);
        // kemablaikan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            if (penumpang[i] == undefined) {
                //  tambahkan penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kemablikan isi aray dan keluar function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array dan kelauar dari function
                return namaPenumpang;
                // jika seluruh kursi terisi 
            } else if (i == penumpang.length - 1) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar
                return penumpang;
            }

        }
    }
}
var hapusPenumpang = function (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan tidak mungkin ada penumpang turun
        console.log('angkot masih kosong');
        // kemablaikan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if (penumpang[i] == namaPenumpang) {
                // hapus penumpang dengan mengubah namanya menjadi undifiend
                penumpang[i] = undefined;
                // kembalikan isi array dan kembalikan adari function
                return penumpang;
            }
            // jika tidak ada nama yng  sesuai 
            else if (i === penumpang.length - 1) {
                // tampilkan pesan kesalahannya
                console.log('nama ' +namaPenumpang + ' yang anda masukan tidak ada di angkot \n barangkali sudah turun');
                // kembalikan isi array dan kembalikan adari function
                return penumpang;
            }
        }
    }
}