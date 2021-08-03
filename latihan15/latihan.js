// membuat variable s yang isi nya kosong
var s = '';
// segitiga sisi kiri
// dimana ketika variable i sama dengan 1 dan variable i lebih kecil samna dengan dari 10 lalu increment bertambah satu sampai bernilai false 
for (var i = 1; i <= 10; i++) { // pengulangan untuk baris
    // karena variable s di atas kosong jadi variable s yang sekarang diisi bintang mengkunakan konket tambah
    // s += '*' -> s=s+'*'

    for (var j = 0; j < i; j++) { // pengulangan untuk isi 
        s += '*';
    }
    s += '\n';
}
// segitiga atas rata kanan
for ( var b = 10; b >= 0; b--){
    // for( var n = 1; n <= 10; n++){ //memberi spasi
        for( var n = 10; n >= b; n--){
        s += '';
    }
    for ( var m = 1; m <= b; m++){
        s += '*'; 
    }
    s += '\n';
}
    // segitiga sisi kanan
    for (var z = 1; z <= 10; z++) {
        for (var x = 10; x >= z; x--) {
            s += '';
        }
        for (var t = 0; t < z; t++) {
            s += '*';
        }
        s += '\n';
    }
    // segitiga atas rata kiri
for ( var k = 10; k >= 0; k--){
    for ( var a = 0; a <= k; a++){
        s += '*'; 
    }
    s += '\n';
}
// lakukan console di lluar for supaya bintang nya berjajar 5, sedangkan kalau di console di dalam for akan dihitung *+* = **, ** + * = ***  berjajar ke bawah terus sampai 5
console.log(s);