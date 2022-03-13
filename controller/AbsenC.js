const AbsenModel = require('../model/AbsenM')
const SiswaModel = require('../model/SiswaM')
const Master = require('../model/MasterM')
const response = require('../config/Response')
const encode = require('nodejs-base64-encode');
const UplaodConfig = require('../config/UploadConfig')
var nodemailer = require('nodemailer');
const KirimEmail = require('../config/SendEmail')



exports.inputAbsen = (req, res)=> {

    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    var tgl = year + "-" + month + "-" + date;

    const data = req.body
    data.hari_angka = angkahari(data.hari)
    data.kehadiran_angka = hadirangka(data.kehadiran)
    data.tgl_absen = tgl

   // console.log(data)

    Master.detailSiswa(data.id_siswa, (err, resultsSiswa) => {
        if (err){
            res.send(err);
        }else{

            if (resultsSiswa != null){

                SiswaModel.getJadwalSiswa(data.id_siswa,(err, resultsJadwal) => {
                    if (err){
                        res.send(err);
                    }else{
                        if (resultsJadwal.length > 0){

                            AbsenModel.cekSudahAbsen(data.id_siswa,(err, resultsCek) =>{
                                if (err){
                                    res.send(err);
                                }else{


                                  //  console.log(resultsCek)

                                    if (resultsCek != null){

                                        res.json(
                                            {
                                                "code": 2001,
                                                "msg" : response.gagal('Presensi Telah Berhasil Diinput'),
                                                "data" : data,
                                            }
                                        );

                                    }else {
                                         data.id_kelasberjalan = resultsJadwal[0].id
                                        AbsenModel.inputAbsen(data, (err, resultsInput) => {
                                            if (err){
                                                res.send(err);
                                            }else{
                                                res.json(
                                                    {
                                                        "code": 2001,
                                                        "msg" : response.sukes('Presensi Telah Berhasil Diinput'),
                                                        "data" : resultsInput,
                                                    }
                                                );
                                            }
                                        })


                                    }
                                }
                            })

                        }else {
                            res.json(
                                {
                                    "code": 404,
                                    "msg" : response.gagal('Siswa Tidak Ada Jadwal Hari Ini'),
                                    "data" : data,
                                }
                            );
                        }
                    }
                });
            }else {
                res.json(
                    {
                        "code": 4041,
                        "msg" : response.gagal('Data Siswa Tidak Ditemukan'),
                        "data": data
                    }
                );
            }

        }
    });



}

exports.inputAbsenPulang = (req, res)=> {

    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    var tgl = year + "-" + month + "-" + date;

    const data = req.body
    data.hari_angka = angkahari(data.hari)
    data.kehadiran_angka = hadirangka(data.kehadiran)
    data.tgl_absen = tgl

    // console.log(data)

    Master.detailSiswa(data.id_siswa, (err, resultsSiswa) => {
        if (err){
            res.send(err);
        }else{

            if (resultsSiswa != null){

                SiswaModel.getJadwalSiswa(data.id_siswa,(err, resultsJadwal) => {
                    if (err){
                        res.send(err);
                    }else{
                        if (resultsJadwal.length > 0){

                            AbsenModel.cekSudahAbsenPulang(data.id_siswa,(err, resultsCek) =>{
                                if (err){
                                    res.send(err);
                                }else{


                                    //  console.log(resultsCek)

                                    if (resultsCek != null){

                                        res.json(
                                            {
                                                "code": 2001,
                                                "msg" : response.gagal('Presensi Telah Berhasil Diinput'),
                                                "data" : data,
                                            }
                                        );

                                    }else {
                                        data.id_kelasberjalan = resultsJadwal[0].id
                                        AbsenModel.inputAbsenPulang(data, (err, resultsInput) => {
                                            if (err){
                                                res.send(err);
                                            }else{
                                                res.json(
                                                    {
                                                        "code": 2001,
                                                        "msg" : response.sukes('Presensi Telah Berhasil Diinput'),
                                                        "data" : resultsInput,
                                                    }
                                                );
                                            }
                                        })


                                    }
                                }
                            })

                        }else {
                            res.json(
                                {
                                    "code": 404,
                                    "msg" : response.gagal('Siswa Tidak Ada Jadwal Hari Ini'),
                                    "data" : data,
                                }
                            );
                        }
                    }
                });
            }else {
                res.json(
                    {
                        "code": 4041,
                        "msg" : response.gagal('Data Siswa Tidak Ditemukan'),
                        "data": data
                    }
                );
            }

        }
    });



}

exports.saveabsen = (req, res)=> {
    const data = req.body

    AbsenModel.inputAbsen(data, (err, resultsInput) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "code": 2001,
                    "msg" : response.sukes('Berhasil Input Presensi'),
                    "data" : resultsInput,
                }
            );
        }
    })

}




exports.cekAbsen = (req, res) => {

    const id = encode.decode(req.params.id, 'base64')
    AbsenModel.cekSudahAbsen(id,(err, results) => {
        if (err) {
            res.send(err);
        } else {

            if (results != null){

                res.json(
                    {
                        "code": 202,
                        "msg" : response.sukes('Sudah Presensi'),
                        "data" : results,
                    });

            }else {

                res.json(
                    {
                        "code": 404,
                        "msg" : response.gagal('Belum Asbensi'),
                        "data" : results,
                    });

            }

        }
    });


}


exports.rekapabsen_siswa = (req, res) => {

    const id = encode.decode(req.params.id, 'base64')
    // const ta = req.params.ta
    // const semester = req.params.semester

    AbsenModel.rekapabsen_siswa(id,(err, results) => {
        if (err) {
            res.send(err);
        } else {
                res.json({
                    "msg" : response.sukes('Berhasil Memuat Absen'),
                    "data" : results,
                });
                //console.log(results)
        }
    });


}


exports.detailrekapabsen_siswa = (req, res) => {

    const id = encode.decode(req.params.id, 'base64')
     const idkelas = encode.decode( req.params.idkelas, 'base64')

    AbsenModel.detailrekapabsen_siswa(id,idkelas,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Memuat Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}

//----------admin

exports.admrekap_absensiswa = async  (req, res)=>{
    const idk    = encode.decode(req.params.id, 'base64')

    await AbsenModel.rekap_daftarsiswa(idk)
        .then( async(datasiswa) => {
            const listSiswa = []
            for (i in datasiswa) {
                const cek = await AbsenModel.admrekap_absensiswa(datasiswa[i].id_siswa, idk).then();

                if (cek != null ) {
                    Object.assign(datasiswa[i], {
                        Hadir: cek.Hadir,
                        Sakit: cek.Sakit,
                        Izin: cek.Izin,
                        Alpha: cek.Alpha,
                        Dispensasi: cek.Dispensasi,
                        Total: cek.Total
                    })
                    listSiswa.push(datasiswa[i])
                }else {

                    Object.assign(datasiswa[i], {
                        Hadir: 0,
                        Sakit: 0,
                        Izin: 0,
                        Alpha: 0,
                        Dispensasi: 0,
                        Total: 0
                    })
                    listSiswa.push(datasiswa[i])

                }
            }

            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Rekap Absen Siswa'),
                    "data" : listSiswa,
                }
            );
        })
}

exports.guru_cekabsen = async  (req, res)=>{

    const idk    = encode.decode(req.params.idk, 'base64')

    await AbsenModel.rekap_daftarsiswa(idk)
        .then( async(datasiswa) => {
            const listSiswa = []
            for (i in datasiswa) {
                const cek = await AbsenModel.guru_cekabsen(datasiswa[i].id_siswa, idk).then();

                if (cek != null ) {
                    Object.assign(datasiswa[i], {
                       kehadiran: cek.kehadiran,
                        id_absen: cek.id,
                        io: 1
                    })
                    listSiswa.push(datasiswa[i])
                }else {

                    Object.assign(datasiswa[i], {
                        kehadiran: 'Belum Absen',
                        id_absen: 0,
                        io: 0
                    })
                    listSiswa.push(datasiswa[i])

                }
            }

            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data  Absen Siswa'),
                    "data" : listSiswa,
                }
            );
        })
}

exports.manual_inputAbsen = (req, res)=> {

    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    var tgl = year + "-" + month + "-" + date;

    const data = req.body
    data.hari_angka = angkahari(data.hari)
    data.kehadiran_angka = hadirangka(data.kehadiran)
    data.tgl_absen = tgl

   // console.log(data)
    AbsenModel.inputAbsen(data, (err, resultsInput) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "code": 2001,
                    "msg" : response.sukes('Presensi  Berhasil'),
                    "data" : resultsInput,
                }
            );
        }
    })

}

exports.manual_updateabsen = (req, res)=> {

    const data = req.body
    const idsiswa    = encode.decode(req.params.ids, 'base64')
    const idkelasberjalan    = encode.decode(req.params.idk, 'base64')

    data.kehadiran_angka = hadirangka(data.kehadiran)

    AbsenModel.guru_ubahabsen(data,idsiswa,idkelasberjalan, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "code": 2001,
                    "msg" : response.sukes('Presensi  Berhasil'),
                    "data" : results,
                }
            );
        }
    })

}


//------------------Guru ngabsen--------

exports.inputabsen_guru = (req, res)=> {

    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    var tgl = year + "-" + month + "-" + date;

    const data = req.body
    data.hari_angka = angkahari(data.hari)
    data.kehadiran_angka = hadirangka(data.kehadiran)
    data.tgl_absen = tgl

    Master.detailGuru(data.id_guru, (err, resultsGuru) => {
        if (err) {
            res.send(err);
        } else {

            if (resultsGuru != null){

                AbsenModel.guru_ceksudahabsen(data.id_guru,(err, resultsCek) =>{
                    if (err){
                        res.send(err);
                    }else{
                                    //  console.log(resultsCek)
                        if (resultsCek != null){
                            res.json(
                                    {
                                        "code": 2001,
                                        "msg" : response.gagal('Presensi Telah Berhasil Diinput'),
                                        "data" : data,
                                    }
                                );

                        }else {

                           // console.log('cok')

                            AbsenModel.input_guru_absenharian(data, (err, resultsInput) => {
                                if (err){
                                    res.send(err);
                                }else{
                                    res.json(
                                        {
                                            "code": 2001,
                                            "msg" : response.sukes('Presensi Telah Berhasil Diinput'),
                                            "data" : resultsInput,
                                        }
                                        );
                                }
                            })

                        }
                    }
                })


            }else {
                res.json(
                    {
                        "code": 4041,
                        "msg" : response.gagal('Data Guru Tidak Ditemukan'),
                        "data": data
                    }
                );
            }

        }
    })



}

exports.inputabsen_guru_pulang = (req, res)=> {

    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    var tgl = year + "-" + month + "-" + date;

    const data = req.body
    data.hari_angka = angkahari(data.hari)
    data.kehadiran_angka = hadirangka(data.kehadiran)
    data.tgl_absen = tgl

    Master.detailGuru(data.id_guru, (err, resultsGuru) => {
        if (err) {
            res.send(err);
        } else {

            if (resultsGuru != null){

                AbsenModel.guru_ceksudahabsen_pulang(data.id_guru,(err, resultsCek) =>{
                    if (err){
                        res.send(err);
                    }else{
                        //  console.log(resultsCek)
                        if (resultsCek != null){
                            res.json(
                                {
                                    "code": 2001,
                                    "msg" : response.gagal('Presensi Telah Berhasil Diinput'),
                                    "data" : data,
                                }
                            );

                        }else {

                            // console.log('cok')

                            AbsenModel.input_guru_absenharian_pulang(data, (err, resultsInput) => {
                                if (err){
                                    res.send(err);
                                }else{
                                    res.json(
                                        {
                                            "code": 2001,
                                            "msg" : response.sukes('Presensi Telah Berhasil Diinput'),
                                            "data" : resultsInput,
                                        }
                                    );
                                }
                            })

                        }
                    }
                })


            }else {
                res.json(
                    {
                        "code": 4041,
                        "msg" : response.gagal('Data Guru Tidak Ditemukan'),
                        "data": data
                    }
                );
            }

        }
    })



}


exports.detailrekapabsen_guru = (req, res) => {

    const id = encode.decode(req.params.id, 'base64')

    AbsenModel.detailrekapabsen_guru(id,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Memuat Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}

exports.detailrekapabsen_guru = (req, res) => {

    const id = encode.decode(req.params.id, 'base64')

    AbsenModel.detailrekapabsen_guru(id,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Memuat Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}

exports.guru_rekap_all = (req, res) => {

    const tgl_m = encode.decode(req.params.tglm, 'base64')
    const tgl_a = encode.decode(req.params.tgla, 'base64')
    const ids = encode.decode(req.params.ids, 'base64')

   // console.log(ids)

    AbsenModel.guru_rekap_all(ids,tgl_m,tgl_a,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Memuat Rekap Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}

exports.guru_rekap_rinci = (req, res) => {

    const tgl_m = encode.decode(req.params.tglm, 'base64')
    const tgl_a = encode.decode(req.params.tgla, 'base64')
    const idg = encode.decode(req.params.idg, 'base64')

    // console.log(idg)

    AbsenModel.guru_rekap_rinci(idg,tgl_m,tgl_a,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Memuat Rekap Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}


exports.get_jamabsen = (req, res) => {

    const id = encode.decode(req.params.id, 'base64')

    AbsenModel.GETabsen_settingjam(id,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Jam Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}


exports.input_jamabsen = (req, res)=> {
    const data = req.body
    AbsenModel.InputSettingJam(data, (err, results) => {
        if (err){
            res.send(err);
        }else{

            res.json(
                {
                    "msg" : response.sukes('Jam Absen Berhasil Disimpan'),
                    "data" : results,
                }
            );

        }
    });
}

exports.update_jamabsen = (req, res)=> {

    const data = req.body
    const ids    = encode.decode(req.params.id, 'base64')
    AbsenModel.UpdateSettingJam(data,ids, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Jam Absen Berhasil Disimpan'),
                    "data" : results,
                }
            );
        }
    })

}


exports.JamHadirGuru = (req, res) => {

    const id = encode.decode(req.params.jam, 'base64')
    const ids = encode.decode(req.params.ids, 'base64')

    AbsenModel.getJamHadirGuru(id,ids,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Get Jam Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}

exports.JamPulangGuru = (req, res) => {

    const id = encode.decode(req.params.jam, 'base64')
    const ids = encode.decode(req.params.ids, 'base64')
    AbsenModel.getJamPulangGuru(id,ids,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Get Jam Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}


exports.JamHadirSiswa = (req, res) => {

    const id = encode.decode(req.params.jam, 'base64')
    const ids = encode.decode(req.params.ids, 'base64')
    AbsenModel.getJamHadirSiswa(id,ids,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Get Jam Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}

exports.JamPulangSiswa = (req, res) => {

    const id = encode.decode(req.params.jam, 'base64')
    const ids = encode.decode(req.params.ids, 'base64')
    AbsenModel.getJamPulangSiswa(id,ids,(err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                "msg" : response.sukes('Berhasil Get Jam Absen'),
                "data" : results,
            });
            //console.log(results)
        }
    });


}


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

function hadirangka(hadir) {

    if (hadir == 'Hadir'){
        return 1
    }else{
        return 0
    }

}
