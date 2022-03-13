const UsersModel = require('../model/UsersM')
const response = require('../config/Response')
const encode = require('nodejs-base64-encode');
var nodemailer = require('nodemailer');
const KirimEmail = require('../config/SendEmail')
const jwt = require('jsonwebtoken');

var md5 = require('md5');

exports.inputUsers = (req, res) => {

    const data = req.body
    data.password = md5(data.password)
    data.status_aktif = 'Aktif'

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    var waktu = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds

    data.last_login = '0000:00:00'
    data.created_at = waktu

    UsersModel.inputUsers(data, (err, resultsInput) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Meyimpan Pengguna/Users'),
                    "data" : resultsInput,
                }
            );
        }
    })



}


exports.authLogin =  (req, res)=>{

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();

    var waktu = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds


    const data  = req.body;
    data.last_login = waktu

    UsersModel.authLogin(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            if(results !=''){

                var id = results[0].id
                UsersModel.simpanLastSeen(data, id, (err, resultsX) => {
                    if (err) {
                        res.send(err);
                    } else {

                        res.json({
                                "msg" : response.sukes('Berhasil Login'),
                                "data" : results[0],
                            });
                    }
                })
            }else{
                res.json(
                    {
                        "msg" : response.gagal('Maaf, Username / Password Tidak Ditemukan'),
                        "form" : data
                    }
                );

            }

        }
    });
}


exports.getUsers =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    UsersModel.getUsers(id,(err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Berhasil Memuat Data Users'),
                    "data" : results,
                }
            );
        }
    });
}


exports.hapusUsers =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    UsersModel.DelUsers(id,(err, results) => {
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

exports.resetPW =  (req, res)=>{

    const id = encode.decode(req.params.id, 'base64')
    UsersModel.resetPW(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Password Berhasil Direset Menjadi: 12345678'),
                    "data" : results,
                }
            );
        }
    });
}


exports.updatepassword =  (req, res)=>{
    const id    = encode.decode(req.params.id, 'base64')
    const data = req.body

    UsersModel.updatepassword(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(
                {
                    "msg" : response.sukes('Password Berhasil Diubah'),
                    "data" : results,
                }
            );
        }
    });
}


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}






// function f() {
//     return require('crypto').randomBytes(64).toString('hex')
//
// }
//
//
// function generateAccessToken(username) {
//     return jwt.sign(username, f(), { expiresIn: '1800s' });
// }




