//  faktorial perkalian yang di kajujan dengan 5!=5x4x3x2x1 ini sangat mudah bila dilakukan dengan rekursif

function faktorial (n){
    if ( n === 0 ) return 1;
    return n * faktorial(n-1);
}
var hasil = faktorial(5);
console.log(hasil);
