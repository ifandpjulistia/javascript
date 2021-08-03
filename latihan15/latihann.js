// membuat segitiga
var s = '';
for (var a = 1; a <= 10; a++) {
    for (var i = 10; i >= a; i--) {
        s += '+';
    }
    for (var b = 1; b <= a; b++) {
        s += '*';
    }
    for (var m = 1; m < a ; m++) {
        s += '*';
    }
    s += '\n';
}

for (var z = 1; z <= 10; z++) {
    for (var c = 1; c <= z; c++) {
        s += '+';
    }
    for (var n = z; n <= 10; n++) {
        s += '*';
    }
    for (var j = z+1; j <= 10; j++ ) {
        s += '*';
    }
    s += '\n';
}
console.log(s);