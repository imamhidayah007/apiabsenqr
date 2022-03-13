const tbjadwal = 'v_jadwal_kelasdanguru'

exports.getJadwalGuru = (id,ids,result)=>{
    db.query(`SELECT * FROM ${tbjadwal} Where idg = ? and hari = '${hari()}' and status = 'Aktif' AND id_sekolah = ? ORDER BY hari_angka,jam_mulai ASC`, [id,ids], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getJadwalGuruFull = (id,ids,result)=>{
    db.query(`SELECT * FROM ${tbjadwal} Where idg = ?  and status = 'Aktif' AND id_sekolah = ? ORDER BY hari_angka,jam_mulai ASC`, [id,ids], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


exports.getJadwalRekap = (id,ids, result)=>{
    db.query(`SELECT * FROM ${tbjadwal} Where idg = ?  and status = 'Aktif' AND id_sekolah = ? GROUP BY id,nama_mapel ORDER BY hari_angka,jam_mulai ASC`, [id,ids], (err, results) => {
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
