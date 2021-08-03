// object angkot
// menggunakan object konstruktor
// menambahkan properti yang dibutuhkan untuk data angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // ketika penumpang naik menmabhakn method
    this.penumpangNaik = function (namaPenumpang) {
        // menambahkan push supaya ketika kita menambahkan data, data nya akan berada setelah data yang di tambahkan
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // mengelola penumpang turun
    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('angkot masih kosong');
            return false;
        }

        // pengulangan untuk menelusuri penumpang yang ada di angkot
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}
var angkot1 = new Angkot('Ifan', ['Kadugde', 'Pasapen'], [], 0);
var angkot2 = new Angkot('Baim', ['pasar baru', 'cigugur'], [], 0);