var nodemailer = require('nodemailer');

exports.send =  (email,judul,isi)=>{

    var transporter = nodemailer.createTransport({
        host: 'mail.petikbm-bpjnlampung.com',
        port: '465',
        auth: {
            user: 'balai@petikbm-bpjnlampung.com',
            pass: 'bpjnlampung#'
        }
    });

    var mailOptions = {
        from: 'balai@petikbm-bpjnlampung.com',
        to: email,
        subject: judul,
        html: isi
    };


    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
