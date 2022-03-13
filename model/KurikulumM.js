const tbtahunajaran = 'kurikulum_tahunajaran'
const tbkelompokkelas = 'kurikulum_kelompokkelas'
const tbmapel = 'kurikulum_mapel'
const tbkelasberjalan = 'kurikulum_kelasberjalan'
const vkelasberjalan = 'v_kelas_berjalan'
const tbjadwal = 'kurikulum_jadwal'
const vjadwal = 'v_jadwal_kelasdanguru'
const tbsetsiswa = 'kurikulum_siswa'
const vsetsiswa = 'v_jadwal_siswa'
const vsettingsiswa = 'v_setting_siswa'
const tbsiswa = 'master_siswa'

exports.InputTahunAjaran = (data, result) => {
    db.query(`INSERT INTO ${tbtahunajaran} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getTahunAjaran = (id, result)=>{
    db.query(`SELECT * FROM ${tbtahunajaran}  WHERE id_sekolah = ? Order BY id ASC `,[id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getTahunAjaranAktif = (id,result)=>{
    db.query(`SELECT * FROM ${tbtahunajaran} Where status = 'Aktif' AND id_sekolah = ?`,[id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.NonAktifTASemua = ( result)=>{
    db.query(`UPDATE ${tbtahunajaran} SET status = 'Tidak Aktif' Where status = 'Aktif'`, (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}

exports.DelTahunAjaran = (id, result)=>{
    db.query(`DELETE  FROM ${tbtahunajaran} WHERE id = ?`, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.updateTA = (data, id, result)=>{
    db.query(`UPDATE ${tbtahunajaran} SET tahun_ajaran = ?, semester = ?, status = ? WHERE id = ?`,
        [data.tahun_ajaran, data.semester, data.status, id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}


exports.InputKelompokKelas = (data, result) => {
    db.query(`INSERT INTO ${tbkelompokkelas} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getKelompokKelas = (id,result)=>{
    db.query(`SELECT * FROM ${tbkelompokkelas} WHERE id_sekolah = ? Order BY id ASC  `, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getKelompokKelasAktif = (id,result)=>{
    db.query(`SELECT * FROM ${tbkelompokkelas} Where status = 'Aktif' AND id_sekolah = ? `,[id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.DelKelompokKelas = (id, result)=>{
    db.query(`DELETE  FROM ${tbkelompokkelas} WHERE id = ?`, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


exports.updateKelompokKelas = (data, id, result)=>{
    db.query(`UPDATE ${tbkelompokkelas} SET tingkat_kelas = ?, nama_kelas = ?, kelompok_kelas = ? WHERE id = ?`,
        [data.tingkat_kelas, data.nama_kelas, data.kelompok_kelas, id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}


exports.InputMapel = (data, result) => {
    db.query(`INSERT INTO ${tbmapel} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getMapel = (id,result)=>{
    db.query(`SELECT * FROM ${tbmapel} WHERE id_sekolah = ? Order BY id ASC  `, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getMapelAktif = (id,result)=>{
    db.query(`SELECT * FROM ${tbmapel} Where status_mapel = 'Aktif' AND id_sekolah = ?   `, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.DelMapel = (id, result)=>{
    db.query(`DELETE  FROM ${tbmapel} WHERE id = ?`, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.updateMapel = (data, id, result)=>{
    db.query(`UPDATE ${tbmapel} SET kode_mapel = ?, nama_mapel = ?, kkm = ?,status_mapel = ? WHERE id = ?`,
        [data.kode_mapel, data.nama_mapel, data.kkm, data.status_mapel, id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}


exports.InputKelasBerjalan = (data, result) => {
    db.query(`INSERT INTO ${tbkelasberjalan} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getKelasBerjalan = (id,result)=>{
    db.query(`SELECT * FROM ${vkelasberjalan}  WHERE id_sekolah = ?`, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getKelasBerjalanByTA = (idta,ids, result)=>{
    db.query(`SELECT * FROM ${vkelasberjalan} WHERE id_ta = ? AND id_sekolah = ?`,[idta,ids], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.updateKelasBerjalan = (data, id, result)=>{
    db.query(`UPDATE ${tbkelasberjalan} SET id_walikelas = ?, ruang_kelas = ? WHERE id = ?`,
        [data.id_walikelas, data.ruang_kelas, id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}


exports.InputJadwal = (data, result) => {
    db.query(`INSERT INTO ${tbjadwal} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.getJadwal = (id,result)=>{
    db.query(`SELECT * FROM ${vjadwal} Where id = ? `, [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


exports.DelJadwal = (id, result)=>{
    db.query(`DELETE  FROM ${tbjadwal} WHERE id = ?`, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

//------------------Setting Siswa--

exports.getSettSiswa = (id, result) =>{
    db.query(`SELECT * FROM ${vsettingsiswa} Where idkelasberjalan = ? Group BY id_siswa`, [id], (err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results)
        }
    })
}


exports.daftarDataSiswa = ()=>
    new Promise( async (resolve, reject) =>{

       await db.query(`SELECT * FROM ${tbsiswa}  Order BY  nama_siswa`, (err, results) => {
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

exports.cekSiswa = (id, idk)=>
    new Promise(async (resolve, reject) => {
        await db.query(`SELECT * FROM ${vsettingsiswa} WHERE id_siswa = ? and status = ?  GROUP BY idkelasberjalan,id_siswa`,[id, idk], (err, results) => {
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


exports.InputSetSiswa = (data, result) => {
    db.query(`INSERT INTO ${tbsetsiswa} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.DelSetSiswa = (id,idk, result)=>{
    db.query(`DELETE  FROM ${tbsetsiswa} WHERE id_siswa = ? and id_kelasberjalan = ?`, [id,idk],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
