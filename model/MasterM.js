const tbsekolah = 'master_sekolah'
const tbguru = 'master_guru'
const tbsiswa = 'master_siswa'

exports.getSekolah = (id, result)=>{
    db.query(`SELECT * FROM ${tbsekolah} WHERE id = ? `,[id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}


exports.setSekolah = (data, id, result)=>{
    db.query(`UPDATE ${tbsekolah} SET npsn = ?, nama_sekolah = ?, web_sekolah = ?,telepon = ?, alamat_sekolah = ?,
            provinsi = ?, kab_kota = ?, kecamatan =?, kode_pos =?,luas_tanah =?, ruang_kelas = ?, lab =?, perpus = ?,
            email_sekolah = ?, logo = ?
            WHERE id = ?`,
        [data.npsn, data.nama_sekolah, data.web_sekolah,data.telepon, data.alamat_sekolah, data.provinsi, data.kab_kota,
                 data.kecamatan, data.kode_pos, data.luas_tanah, data.ruang_kelas, data.lab, data.perpus, data.email_sekolah, data.logo,
                id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}


exports.InputGuru = (data, result) => {
    db.query(`INSERT INTO ${tbguru} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getNIPGuru = (id,ids, result)=>{
    db.query(`SELECT * FROM ${tbguru} WHERE NIP = ? AND WHERE id_sekolah = ?`, [id,ids], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getNIKGuru = (id,ids, result)=>{
    db.query(`SELECT * FROM ${tbguru} WHERE NIK = ? AND WHERE id_sekolah = ?`, [id,ids], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.detailGuru = (id,result)=>{
    db.query(`SELECT * FROM ${tbguru} WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

exports.GetGuru = (id,result)=>{
    db.query(`SELECT * FROM ${tbguru} WHERE id_sekolah = ? Order BY id DESC`,[id] ,(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.updateGuru = (data, id, result)=>{
    db.query(`UPDATE ${tbguru} SET NIP = ?, NIK = ?, Nama = ?,Agama = ?, Tempat_Lahir = ?,
            Tanggal_Lahir = ?, Jenis_Kelamin = ?, Alamat =?, Telepon =?,Email =?, Jabatan = ?, Pangkat =?, Golongan = ?,
            NUPTK = ?, Status_Marital = ?, Gol_Darah = ?, Gelar_Depan = ?,  Gelar_Belakang = ?, Tahun_masuk = ?, Jabatan_Sekolah = ?
            , NIY = ?, Status_Guru = ?, Sertifikasi = ?, Foto = ?
            WHERE id = ?`,
        [data.NIP, data.NIK, data.Nama,data.Agama, data.Tempat_Lahir, data.Tanggal_Lahir, data.Jenis_Kelamin,
            data.Alamat, data.Telepon, data.Email, data.Jabatan, data.Pangkat, data.Golongan, data.NUPTK, data.Status_Marital,
            data.Gol_Darah, data.Gelar_Depan, data.Gelar_Belakang, data.Tahum_Masuk, data.Jabatan_Sekolah, data.NIY, data.Status_Guru,
            data.Sertifikasi, data.Foto,
            id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}

exports.DelGuru = (id, result)=>{
    db.query(`DELETE  FROM ${tbguru} WHERE id = ?`, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


exports.InputSiswa = (data, result) => {
    db.query(`INSERT INTO ${tbsiswa} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getNISNSiswa = (id,ids, result)=>{
    db.query(`SELECT * FROM ${tbsiswa} WHERE nisn = ? AND WHERE id_sekolah = ?`, [id,ids], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getNISSiswa = (id,ids, result)=>{
    db.query(`SELECT * FROM ${tbsiswa} WHERE nis = ? AND WHERE id_sekolah = ?`, [id,ids], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.GetSiswa = (id,result)=>{
    db.query(`SELECT * FROM ${tbsiswa} WHERE id_sekolah = ? Order BY id DESC`,[id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.detailSiswa = (id,result)=>{
    db.query(`SELECT * FROM ${tbsiswa} WHERE id = ?`,[id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

exports.updateSiswa = (data, id, result)=>{
    db.query(`UPDATE ${tbsiswa} SET nisn = ?, nis = ?, nama_siswa = ?,jenis_kelamin = ?, tempat_lahir = ?,
            tanggal_lahir = ?, agama = ?, email_siswa =?, hp_siswa =?,nama_ayah =?, nama_ibu = ?, pekerjaan_ayah =?, pekerjaan_ibu = ?,
            hp_ayah = ?, hp_ibu = ?, alamat = ?, nama_wali = ?,  pekerjaan_wali = ?, hp_wali = ?, tanggal_diterima = ?
            , diterima_dikelas = ?, tahun_ijazah = ?, tahun_nopes = ?, no_shun_ijazah = ?, no_ijazah = ?, asal_sekolah = ?
            , tanggal_masuk = ?, tanggal_keluar = ?, anak_ke = ?, status_siswa = ?, Foto = ?
            WHERE id = ?`,
        [data.nisn, data.nis, data.nama_siswa,data.jenis_kelamin, data.tempat_lahir, data.tanggal_lahir, data.agama,
            data.email_siswa, data.hp_siswa, data.nama_ayah, data.nama_ibu, data.pekerjaan_ayah, data.pekerjaan_ibu, data.hp_ayah, data.hp_ibu,
            data.alamat, data.nama_wali, data.pekerjaan_wali, data.hp_wali, data.tanggal_diterima, data.diterima_dikelas, data.tahun_ijazah,
            data.tahun_nopes, data.no_shun_ijazah, data.no_ijazah, data.asal_sekolah, data.tanggal_masuk, data.tanggal_keluar, data.anak_ke,
            data.status_siswa,data.Foto,
            id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}

exports.DelSiswa = (id, result)=>{
    db.query(`DELETE  FROM ${tbsiswa} WHERE id = ?`, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


