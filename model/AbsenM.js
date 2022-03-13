const tbabsen = 'input_absen'
const absenpulang = 'absen_pulang'
const rekapabsen = 'v_rekap_absensiswa'
const settingsiswa = 'v_setting_siswa'
const absenguru = 'absen_guru'
const absengurupulang = 'absen_guru_pulang'
const settingjam = ' absen_settingjam'

exports.inputAbsen = (data, result) =>{
    db.query(`REPLACE INTO ${tbabsen} SET ? `,[data], (err, results) =>{
        if (err){
            console.log(err)
            result(err,null)
        }else {
            result(null, results)
        }
    })
}

exports.cekSudahAbsen = (id, result) =>{
    db.query(`SELECT DISTINCT * FROM ${tbabsen} WHERE id_siswa = ? AND tgl_absen = CURDATE()`, [id], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results[0])
        }
    })
}


exports.inputAbsenPulang = (data, result) =>{
    db.query(`REPLACE INTO ${absenpulang} SET ? `,[data], (err, results) =>{
        if (err){
            console.log(err)
            result(err,null)
        }else {
            result(null, results)
        }
    })
}

exports.cekSudahAbsenPulang = (id, result) =>{
    db.query(`SELECT DISTINCT * FROM ${absenpulang} WHERE id_siswa = ? AND tgl_absen = CURDATE()`, [id], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results[0])
        }
    })
}

exports.rekapabsen_siswa = (id, result) =>{
    db.query(`SELECT * FROM ${rekapabsen} WHERE id_siswa = ? AND status = 'Aktif'`, [id], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results)
        }
    })
}

exports.detailrekapabsen_siswa = (id,idkelas, result) =>{
    db.query(`SELECT * FROM ${tbabsen} WHERE id_siswa = ? AND id_kelasberjalan = ? Group BY tgl_absen ORDER BY tgl_absen ASC`, [id,idkelas], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results)
        }
    })
}

//-----------------Admin

exports.rekap_daftarsiswa = (idk)=>
    new Promise( async (resolve, reject) =>{

        await db.query(`SELECT * FROM ${settingsiswa} WHERE idkelasberjalan = ? Order BY  nama_siswa ASC`,[idk], (err, results) => {
            if(err) {
                // console.log(err);
                // result(err, null);
                reject(err)
            } else {
                // result(null, results);
                resolve(results)
            }
        });

    })

exports.admrekap_absensiswa = (ids,idk)=>
    new Promise( async (resolve, reject) =>{

        await db.query(`SELECT * FROM ${rekapabsen} WHERE id_siswa = ? AND  id_kelasberjalan = ?`,[ids,idk], (err, results) => {
            if(err) {
                // console.log(err);
                // result(err, null);
                reject(err)
            } else {
                // result(null, results);
                resolve(results[0])
            }
        });

})

//---------Guru

exports.guru_cekabsen = (ids,idk)=>
    new Promise( async (resolve, reject) =>{

        await db.query(`SELECT * FROM ${tbabsen} WHERE id_siswa = ? AND  id_kelasberjalan = ? AND tgl_absen = CURDATE()`,[ids,idk], (err, results) => {
            if(err) {
                // console.log(err);
                // result(err, null);
                reject(err)
            } else {
                // result(null, results);
                resolve(results[0])
            }
        });

})

exports.guru_ubahabsen = (data,ids,idk, result) =>{
    db.query(`UPDATE ${tbabsen} SET kehadiran = ?, kehadiran_angka = ? WHERE id_siswa = ? AND id_kelasberjalan = ? AND tgl_absen = CURDATE()`,[data.kehadiran, data.kehadiran_angka, ids, idk], (err, results) =>{
        if (err){
            console.log(err)
            result(err,null)
        }else {
            result(null, results)
        }
    })
}

//------------------Guru Absen Harian-----------

exports.input_guru_absenharian = (data, result) =>{
    db.query(`REPLACE INTO ${absenguru} SET ? `,[data], (err, results) =>{
        if (err){
            console.log(err)
            result(err,null)
        }else {
            result(null, results)
        }
    })
}

exports.guru_ceksudahabsen = (id, result) =>{
    db.query(`SELECT DISTINCT * FROM ${absenguru} WHERE id_guru = ? AND tgl_absen = CURDATE()`, [id], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results[0])
        }
    })
}

exports.input_guru_absenharian_pulang = (data, result) =>{
    db.query(`REPLACE INTO ${absengurupulang} SET ? `,[data], (err, results) =>{
        if (err){
            console.log(err)
            result(err,null)
        }else {
            result(null, results)
        }
    })
}

exports.guru_ceksudahabsen_pulang = (id, result) =>{
    db.query(`SELECT DISTINCT * FROM ${absengurupulang} WHERE id_guru = ? AND tgl_absen = CURDATE()`, [id], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results[0])
        }
    })
}



exports.detailrekapabsen_guru = (id, result) =>{
    db.query(`SELECT * FROM ${absenguru} WHERE id_guru = ? Group BY tgl_absen ORDER BY tgl_absen ASC`, [id], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results)
        }
    })
}


exports.guru_rekap_all = (ids,tgl_m,tgl_a, result) => {
    db.query(`SELECT id_sekolah,id_guru,NIP,Nama,Telepon,Email,  sum(case when kehadiran='Hadir' then 1 else 0 end) as Total 
                    FROM (SELECT * FROM absen_guru GROUP BY id_guru, tgl_absen) as absen_guru JOIN  master_guru 
                    ON master_guru.id = absen_guru.id_guru WHERE id_sekolah = ? AND tgl_absen 
                    BETWEEN  ? AND ? GROUP BY id_guru`, [ids,tgl_m,tgl_a], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results)
        }
    })
}

exports.guru_rekap_rinci = (idg,tgl_m,tgl_a, result) => {
    db.query(`SELECT id_guru, tgl_absen,hari,kehadiran
                    FROM (SELECT * FROM absen_guru GROUP BY id_guru, tgl_absen) as absen_guru 
                     WHERE id_guru = ? AND tgl_absen BETWEEN  ? AND ? GROUP BY id_guru,tgl_absen`,
                    [idg,tgl_m,tgl_a], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results)
        }
    })
}

exports.GETabsen_settingjam = (ids,result) => {
    db.query(`SELECT * FROM ${settingjam}`, [ids], (err, results)=>{
            if (err){
                console.log(err);
                result(err, null)
            }else {
                result(null, results[0])
            }
        })
}


exports.InputSettingJam = (data, result) =>{
    db.query(`REPLACE INTO ${settingjam} SET ? `,[data], (err, results) =>{
        if (err){
            console.log(err)
            result(err,null)
        }else {
            result(null, results)
        }
    })
}

exports.UpdateSettingJam = (data,ids, result) =>{
    db.query(`UPDATE ${settingjam} SET jam_hadir_g1 = ?, jam_hadir_g2 = ?, jam_pulang_g1 = ?, jam_pulang_g2 = ?, jam_hadir_s1 = ?, jam_hadir_s2 = ?, jam_pulang_s1 = ?, jam_pulang_s2 = ? WHERE id_sekolah = ?`,
        [data.jam_hadir_g1, data.jam_hadir_g2,data.jam_pulang_g1, data.jam_pulang_g2, data.jam_hadir_s1, data.jam_hadir_s2,data.jam_pulang_s1, data.jam_pulang_s2, ids], (err, results) =>{
        if (err){
            console.log(err)
            result(err,null)
        }else {
            result(null, results)
        }
    })
}

exports.getJamHadirGuru = (jam,ids,result) => {
    db.query(`SELECT * FROM ${settingjam} WHERE jam_hadir_g2 >= ? AND jam_hadir_g1 <= ? AND id_sekolah = ?`, [jam,jam,ids], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results[0])
        }
    })
}

exports.getJamPulangGuru = (jam,ids,result) => {
    db.query(`SELECT * FROM ${settingjam} WHERE jam_pulang_g2 >= ? AND jam_pulang_g1 <= ? AND id_sekolah = ?`, [jam,jam,ids], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results[0])
        }
    })
}


exports.getJamHadirSiswa = (jam,ids,result) => {
    db.query(`SELECT * FROM ${settingjam} WHERE jam_hadir_s2 >= ? AND jam_hadir_s1 <= ? AND id_sekolah = ?`, [jam,jam,ids], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results[0])
        }
    })
}

exports.getJamPulangSiswa = (jam,ids,result) => {
    db.query(`SELECT * FROM ${settingjam} WHERE jam_pulang_s2 >= ? AND jam_pulang_s1 <= ? AND id_sekolah = ?`, [jam,jam,ids], (err, results)=>{
        if (err){
            console.log(err);
            result(err, null)
        }else {
            result(null, results[0])
        }
    })
}
