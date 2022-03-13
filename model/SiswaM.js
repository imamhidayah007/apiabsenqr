const tbjadwal = 'v_jadwal_siswa'

exports.getJadwalSiswa = (id,result)=>{
    db.query(`SELECT * FROM ${tbjadwal} Where idSiswa = ? and hari = '${hari()}' and status = 'Aktif'`, [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getJadwalSiswaFull = (id,result)=>{
    db.query(`SELECT * FROM ${tbjadwal} Where idSiswa = ?  and status = 'Aktif' Group BY angka_hari`, [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


function  hari (){
    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var thisDay = date.getDay(),
        thisDay = myDays[thisDay];
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;
    this.waktu = thisDay

    return this.waktu
}
