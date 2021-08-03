// object pada javascript

// ------------VARIABLE BIASA TANPA ARRAY DAN OBJECT--------------
// menghitung dengan manual dimana di setiap index nya di masukan ke dalam varibale
// var namaMhs = 'ifan dwipriana julistia';
// var umurMhs = 31;
// var lulus = true;
// var IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04];
// function IPKumulatif(IPSemester){
//     var total = 0;
//     for ( var i = 0; i< IPSemester.length; i++){
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// }

// -----------  VARIABLE MENGGUNAKAN ARRAY --------
// menggunanakn array di mana di setiap index nya memiliki nilai array 
// var mahasiswa = [' ifan dwipriana julistia', true, [2.90, 3.10, 3.25, 2.88, 3.04]];
// function IPKumulatif(IPSemester){
//     var total = 0;
//     for ( var i = 0; i< IPSemester.length; i++){
//         total += IPSemester[i];
//     }
//     return total/IPSemester.length;
// }


// ------------VARIABLE MENGGUNAKAN OBJECT--------------
// membungkus nya dengan satu variable dan setiap isi memiliki index nya masing2
// var mahasiswa = {
//     nama : 'Ifan dwipriana julistia',
//     lulus : true,
//     IPSSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
//     // untuk memnghitung ipk nya
//     IPKumulatif : function(){
//         var total = 0;
//         var ips = this.IPSSemester;
//         for ( var i = 0; i < ips.length; i++){
//             total += ips[i];
//         }
//         return total/ips.length;
//     }
// }
// mahasiswa.IPKumulatif();


// -------------ANATOMI PADA  OBJECT -----------
var orang = {
    // nama, umur dan pekerjaan adalah variable yang ada di dalam Object 
    // dan untuk ketiganya atau variable yang ada di dalam obejct disebut properti
    nama: 'ifan dwipriana julistia',
    umur: 23,
    pekerjaan: 'web Depelover',
    alamat : {
        jalan : 'Bunigeulis',
        kota : 'Kuningan',
        provinsi : 'Jawa barat'
    },
    // function yang ada di dalam object di sebut method
    sapa: function () {
        return 'HI, nama saya ' + nama +
            ' usia saya ' + umur + ' tahun, dan saya adalah seorang ' +this.pekerjaan;
    }
}








