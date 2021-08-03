var s = '';
for ( var b = 10; b >= 0; b--){
    // for( var n = 1; n <= 10; n++){ //memberi spasi
        for( var n = 10; n >= b; n--){
        s += '+';
    }
    for ( var m = 1; m <= b; m++){
        s += '*'; 
    }
    s += '\n';
}
console.log(s);