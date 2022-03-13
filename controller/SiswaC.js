const SiswaModel = require('../model/SiswaM')
const response = require('../config/Response')
const encode = require('nodejs-base64-encode');
const UplaodConfig = require('../config/UploadConfig')
var nodemailer = require('nodemailer');
const KirimEmail = require('../config/SendEmail')


exports.getjadwalsiswa =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    SiswaModel.getJadwalSiswa(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Mengambil Data Jadwal Siswa'),
                    "data" : results,
                }
            );
        }
    });
}

exports.getjadwalsiswaFull =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    SiswaModel.getJadwalSiswaFull(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Mengambil Data Jadwal Siswa'),
                    "data" : results,
                }
            );
        }
    });
}
