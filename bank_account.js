let saldo = 0;

function isNumber(input) {
    return input !== "" && !isNaN(parseFloat(input)) && isFinite(input);
}

function tambahSaldo() {
    const tambah = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
    if (isNumber(tambah) && tambah > 0) {
        saldo = saldo + tambah;
        alert("Saldo baru: " + saldo);
    } else {
        alert("Masukkan jumlah saldo yang valid.");
    }
}

function kurangiSaldo() {
    const kurangi = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
    if (isNumber(kurangi) && kurangi > 0) {
        if (kurangi <= saldo) {
            saldo = saldo - kurangi;
            alert("Saldo baru: " + saldo);
        } else {
            alert("Saldo tidak cukup.");
        }
    } else {
        alert("Masukkan jumlah saldo yang valid.");
    }
}

while (true) {
    const pilihan = prompt("Pilih aksi:\n1. Tambah Saldo\n2. Kurangi Saldo\n3. Keluar");
    if (pilihan === "1") {
        tambahSaldo();
    } else if (pilihan === "2") {
        kurangiSaldo();
    } else if (pilihan === "3") {
        alert("Terima kasih!");
        break;
    } else {
        alert("Pilihan tidak valid.");
    }
}
