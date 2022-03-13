const Kurikulum = require('../model/KurikulumM')
const response = require('../config/Response')
const encode = require('nodejs-base64-encode');
const UplaodConfig = require('../config/UploadConfig')
var nodemailer = require('nodemailer');
const KirimEmail = require('../config/SendEmail')

exports.getTahunAjaran =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.getTahunAjaran(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Tahun Ajaran'),
                    "data" : results,
                }
            );
        }
    });
}

exports.getTahunAjaranAktif =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.getTahunAjaranAktif(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Tahun Ajaran'),
                    "data" : results,
                }
            );
        }
    });
}

exports.inputTahunAjaran = (req, res)=> {
    const data = req.body

    if(data.status == 'Aktif'){

        Kurikulum.NonAktifTASemua((err, results) =>{
            if (err){
                res.send(err);
            }else{

                Kurikulum.InputTahunAjaran(data, (err, resultsInput) => {
                    if (err){
                        res.send(err);
                    }else{
                        res.json(
                            {
                                "msg" : response.sukes('Berhasil Menambah Tahun Ajaran'),
                                "data" : resultsInput,
                            }
                        );
                    }
                })

            }
        })

    }else{
        Kurikulum.InputTahunAjaran(data, (err, resultsInput) => {
            if (err){
                res.send(err);
            }else{
                res.json(
                    {
                        "msg" : response.sukes('Berhasil Menambah Tahun Ajaran'),
                        "data" : resultsInput,
                    }
                );
            }
        })
    }

}

exports.updateTA =  (req, res)=>{

    const data  = req.body;
    const id    = encode.decode(req.params.id, 'base64')

    if(data.status == 'Aktif'){

        Kurikulum.NonAktifTASemua((err, results) => {
            if (err) {
                res.send(err);
            } else {

                Kurikulum.updateTA(data, id, (err, results) => {
                    if (err){
                        res.send(err);
                    }else{
                        res.json(
                            {
                                "msg" : response.sukes('Berhasil Menyimpan Data Tahun Ajaran'),
                                "data" : results,
                            }
                        );
                    }
                });

            }
        })

    }else{

        Kurikulum.updateTA(data, id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(
                    {
                        "msg" : response.sukes('Berhasil Menyimpan Data Tahun Ajaran'),
                        "data" : results,
                    }
                );
            }
        });

    }
}


exports.hapusTahunAjaran =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.DelTahunAjaran(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menghapus Data'),
                    "data" : results,
                }
            );
        }
    });
}


exports.inputKelompokKelas = (req, res)=> {
    const data = req.body
    data.status = 'Aktif'

    Kurikulum.InputKelompokKelas(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Kelompok Kelas'),
                    "data" : results,
                }
            );
        }
    });

}

exports.getKelompokKelas =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.getKelompokKelas(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Kelompok Kelas'),
                    "data" : results,
                }
            );
        }
    });
}

exports.getKelompokKelasAktif =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.getKelompokKelasAktif(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Kelompok Kelas'),
                    "data" : results,
                }
            );
        }
    });
}

exports.hapusKelompokKelas =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.DelKelompokKelas(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menghapus Data'),
                    "data" : results,
                }
            );
        }
    });
}
exports.updateKelompokKelas =  (req, res)=>{
    const data  = req.body;
    const id    = encode.decode(req.params.id, 'base64')

    Kurikulum.updateKelompokKelas(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Kelompok Kelas'),
                    "data" : results,
                }
            );
        }
    });
}


exports.inputMapel = (req, res)=> {
    const data = req.body

    Kurikulum.InputMapel(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Mata Pelajaran'),
                    "data" : results,
                }
            );
        }
    });

}

exports.getMapel =  (req, res)=>{

    const id    = encode.decode(req.params.id, 'base64')

    Kurikulum.getMapel(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Mata Pelajaran'),
                    "data" : results,
                }
            );
        }
    });
}

exports.getMapelAktif =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')

    Kurikulum.getMapelAktif(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Kelompok Kelas'),
                    "data" : results,
                }
            );
        }
    });
}

exports.hapusMapel =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.DelMapel(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menghapus Data'),
                    "data" : results,
                }
            );
        }
    });
}

exports.updateMapel =  (req, res)=>{
    const data  = req.body;
    const id    = encode.decode(req.params.id, 'base64')

    Kurikulum.updateMapel(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Mata Pelajaran'),
                    "data" : results,
                }
            );
        }
    });
}


exports.inputKelasBerjalan = (req, res)=> {
    const data = req.body

    Kurikulum.InputKelasBerjalan(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Kelas Berjalan'),
                    "data" : results,
                }
            );
        }
    });

}

exports.getKelasBerjalan =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.getKelasBerjalan(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Kelas Berjalan'),
                    "data" : results,
                }
            );
        }
    });
}

exports.getKelasBerjalanByTA =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    const ids    = encode.decode(req.params.ids, 'base64')

    Kurikulum.getKelasBerjalanByTA(id,ids,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Kelas Berjalan'),
                    "data" : results,
                }
            );
        }
    });
}

exports.updateKelasBerjalan =  (req, res)=>{
    const data  = req.body;
    const id    = encode.decode(req.params.id, 'base64')

    Kurikulum.updateKelasBerjalan(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Kelas Berjalan'),
                    "data" : results,
                }
            );
        }
    });
}

exports.inputJadwal = (req, res)=> {
    const data = req.body
    data.hari_angka = angkahari(data.hari)

    Kurikulum.InputJadwal(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Jadwal'),
                    "data" : results,
                }
            );
        }
    });

}

exports.getJadwal =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')

    Kurikulum.getJadwal(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Jadwal'),
                    "data" : results,
                }
            );
        }
    });
}


exports.hapusJadwal =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Kurikulum.DelJadwal(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menghapus Data'),
                    "data" : results,
                }
            );
        }
    });
}


//-------------

exports.inputSetSiswa = (req, res)=> {
    const data = req.body

    Kurikulum.InputSetSiswa(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Siswa'),
                    "data" : results,
                }
            );
        }
    });

}

exports.hapusSetSiswa =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    const idk    = encode.decode(req.params.idk, 'base64')
    Kurikulum.DelSetSiswa(id,idk,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menghapus Data'),
                    "data" : results,
                }
            );
        }
    });
}

exports.getSetSiswa =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')

    Kurikulum.getSettSiswa(id,(err, results) => {
      //  console.log(results)
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Siswa'),
                    "data" : results,
                }
            );
        }
    });
}

exports.daftarDataSiswa = async  (req, res)=>{
    const idk    = encode.decode(req.params.id, 'base64')

   await Kurikulum.daftarDataSiswa()
       .then( async(datasiswa) => {
           const listSiswa = []
           for (i in datasiswa) {
               const cek = await Kurikulum.cekSiswa(datasiswa[i].id, idk).then();
               if(cek.length < 1) {
                   Object.assign(datasiswa[i], {status: false})
                   listSiswa.push(datasiswa[i])
               }else {
                   Object.assign(datasiswa[i], {status: true})
                   listSiswa.push(datasiswa[i])
               }
           }
          // console.log(listSiswa)
           res.json(
               {
                   "msg" : response.sukes('Berhasil Memuat Data Siswa'),
                   "data" : listSiswa,
               }
           );
   })
}

const CekSiswa = async (id) => {
    let data = {}
    const test = []
    //  await Kurikulum.cekSiswa(id,(err, results) => {
    //     if (err){
    //         Object.assign(data, {status : false})
    //         test.push({status : false})
    //     }else{
    //         if (results.length < 1 ){
    //             Object.assign(data, {status : false})
    //             test.push({status : false})
    //         }else{
    //             // resolve(results)
    //             test.push({status : true})
    //             Object.assign(data, {status : true})
    //         }
    //     }
    // });
    console.log(test)
    return data
}


// function CekSiswa(id) {
//     return 0;
//
//
//     // db.query('SELECT * FROM v_jadwal_siswa WHERE idSiswa = '+id+'  and status = "Aktif" GROUP BY id,idSiswa', (err, results) => {
//     //     if(err) {
//     //         console.log(err);
//     //
//     //     } else {
//     //        if (results.length < 1){
//     //            a = '404'
//     //        }else{
//     //           a =  '404'
//     //        }
//     //
//     //     }
//     // });
//
// }

function angkahari(hari) {

    if (hari == 'Senin'){
        return 1
    }else if (hari == 'Selasa'){
        return 2
    }else if (hari == 'Rabu'){
        return 3
    }else if (hari == 'Kamis'){
        return 4
    }else if (hari == 'Jumat'){
        return 5
    }else if (hari == 'Sabtu'){
        return 6
    }else if (hari == 'Minggu'){
        return 7
    }

}
