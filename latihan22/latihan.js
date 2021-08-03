// rekursif dimana function memanggil dirinya sendiri dan tidakdapat berhenti untuk memberhentikannya tamahkan base case pada nomor (1)
function angka(a) {
    // (1)
    // ketika angka parameter pada function angka sudah bernilai 0 maka akan berhenti dengan mereturnnya di halamannya sendiri
    // ini yang dinamakan base case
    if (a === 0) {
        return;
    }
    // menampilkan paramter a di console
    console.log(a);
    // mengembalikan atau mereturn angka jadi ketika angka di console dan di kembalikan ke return maka angka nya akan berkurang satu sampai menemukan nilai nol maka akan berhenti, atau hitungan berkurang dari 10 ke 1 hitung mundur
    return angka(a - 1);
}
// memanggil function angka dengan menamabahkan argumen di dalamnya yaitu angka 10
angka(10);

