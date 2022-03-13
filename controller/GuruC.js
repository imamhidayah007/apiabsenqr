const GuruModel = require('../model/GuruM')
const response = require('../config/Response')
const encode = require('nodejs-base64-encode');
const UplaodConfig = require('../config/UploadConfig')
var nodemailer = require('nodemailer');
const KirimEmail = require('../config/SendEmail')

exports.getjadwalguru =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    const ids    = encode.decode(req.params.ids, 'base64')
    GuruModel.getJadwalGuru(id,ids,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Mengambil Data Jadwal Guru'),
                    "data" : results,
                }
            );
        }
    });
}

exports.getjadwalguruFull =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    const ids    = encode.decode(req.params.ids, 'base64')
    GuruModel.getJadwalGuruFull(id,ids,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Mengambil Data Jadwal Guru'),
                    "data" : results,
                }
            );
        }
    });
}

exports.getjadwalRekap =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    const ids    = encode.decode(req.params.ids, 'base64')
    GuruModel.getJadwalRekap(id,ids,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Mengambil Data Rekap Guru'),
                    "data" : results,
                }
            );
        }
    });
}
