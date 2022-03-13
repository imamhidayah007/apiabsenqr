const Master = require('../model/MasterM')
const response = require('../config/Response')
const encode = require('nodejs-base64-encode');
const UplaodConfig = require('../config/UploadConfig')
var nodemailer = require('nodemailer');
const KirimEmail = require('../config/SendEmail')

exports.getSekolah =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Master.getSekolah(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Sekolah'),
                    "data" : results,
                }
            );
        }
    });
}

exports.setSekolah =  (req, res)=>{
    const isi = JSON.parse(req.body.data)
     const data  = isi;
    const id    = encode.decode(req.params.id, 'base64')
    if (!req.file){
        data.logo = data.logo
    }else{
        UplaodConfig.deleteImage(data.logolama)
        data.logo = req.file.filename
    }

    //console.log(data)

    Master.setSekolah(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Sekolah'),
                    "data" : results,
                }
            );
        }
    });
}

exports.inputGuru = (req, res)=>{

    const isi = JSON.parse(req.body.data)
    const data  = isi;

    if (!req.file){
        data.Foto = 'profile.png'
    }else{
        data.Foto = req.file.filename
    }

    Master.getNIPGuru(data.NIP, data.id_sekolah, (err, results) => {
        if (err){
            res.send(err);
        }else{

            if(results !=''){
                res.json(
                    {
                        "msg" : response.gagal('NIP Guru/Staff Telah Terpakai'),

                    }
                );
            }else{
                Master.getNIKGuru(data.NIK,data.id_sekolah, (err, resultsNIK)=>{

                    if (err){
                        res.send(err);
                    }else{
                        if (resultsNIK != ''){
                            res.json(
                                {
                                    "msg" : response.gagal('NIK Guru/Staff Telah Terpakai'),

                                }
                            );
                        }else{
                            Master.InputGuru(data, (err, resultsInput) => {
                                if (err){
                                    res.send(err);
                                }else{
                                    res.json(
                                        {
                                            "msg" : response.sukes('Berhasil Menambah Guru / Staff'),
                                            "data" : resultsInput,
                                        }
                                    );
                                }
                            })
                        }
                    }

                });
            }
        }
    });

}

exports.detailGuru =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Master.detailGuru(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Detail Guru/Staff'),
                    "data": results
                }
            );
        }
    });
}

exports.getGuru =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Master.GetGuru(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Guru dan Staff'),
                    "data" : results,
                }
            );
        }
    });
}


exports.updateGuru =  (req, res)=>{
    const isi = JSON.parse(req.body.data)
    const data  = isi;
    const id    = encode.decode(req.params.id, 'base64')
    if (!req.file){
        data.Foto = data.Foto
    }else{
        UplaodConfig.deleteImage(data.FotoLama)
        data.Foto = req.file.filename
    }

    //console.log(data)

    Master.updateGuru(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Guru'),
                    "data" : results,
                }
            );
        }
    });
}

exports.hapusGuru =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    const foto    = encode.decode(req.params.foto, 'base64')
    Master.DelGuru(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            UplaodConfig.deleteImage(foto)
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menghapus Data'),
                    "data" : results,
                }
            );
        }
    });
}


//--------------Siswa

exports.inputSiswa = (req, res)=>{

    const isi = JSON.parse(req.body.data)
    const data  = isi;

    if (!req.file){
        data.Foto = 'profile.png'
    }else{
        data.Foto = req.file.filename
    }

    Master.getNISNSiswa(data.nisn,data.id_sekolah, (err, results) => {
        if (err){
            res.send(err);
        }else{

            if(results !=''){
                res.json(
                    {
                        "msg" : response.gagal('NISN Siswa Telah Terpakai'),

                    }
                );
            }else{
                Master.getNISSiswa(data.nis,data.id_sekolah, (err, resultsNIK)=>{

                    if (err){
                        res.send(err);
                    }else{
                        if (resultsNIK != ''){
                            res.json(
                                {
                                    "msg" : response.gagal('NIS Siswa Telah Terpakai'),

                                }
                            );
                        }else{
                            Master.InputSiswa(data, (err, resultsInput) => {
                                if (err){
                                    res.send(err);
                                }else{
                                    res.json(
                                        {
                                            "msg" : response.sukes('Berhasil Menambah Data Siswa'),
                                            "data" : resultsInput,
                                        }
                                    );
                                }
                            })
                        }
                    }

                });
            }
        }
    });

}

exports.getSiswa =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Master.GetSiswa(id,(err, results) => {
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


exports.detailSiswa =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    Master.detailSiswa(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Detail Siswa'),
                    "data": results
                }
            );
        }
    });
}

exports.updateSiswa =  (req, res)=>{
    const isi = JSON.parse(req.body.data)
    const data  = isi;
    const id    = encode.decode(req.params.id, 'base64')
    if (!req.file){
        data.Foto = data.Foto
    }else{
        UplaodConfig.deleteImage(data.FotoLama)
        data.Foto = req.file.filename
    }

    //console.log(data)

    Master.updateSiswa(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menyimpan Data Siswa'),
                    "data" : results,
                }
            );
        }
    });
}


exports.hapusSiswa =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    const foto    = encode.decode(req.params.foto, 'base64')
    Master.DelSiswa(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            UplaodConfig.deleteImage(foto)
            res.json(
                {
                    "msg" : response.sukes('Berhasil Menghapus Data'),
                    "data" : results,
                }
            );
        }
    });
}
