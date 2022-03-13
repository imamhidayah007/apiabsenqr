const table = 'tb_user'
const tbjoin = 'v_user'

exports.inputUsers = (data, result) => {
    db.query(`INSERT INTO ${table} SET ?`, [data], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}


exports.authLogin = (data, result) => {
    db.query(`SELECT * FROM ${table} WHERE username = ? AND password = md5(?)`, [data.username, data.password], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.simpanLastSeen = (data, id, result)=>{
    db.query(`UPDATE ${table} SET last_login = ? WHERE id = ?`,
        [data.last_login, id], (err, results) => {
            if(err) {
                console.log(err);
                result(err, null);
            } else {
                result(null, results);
            }
        });
}



exports.getUsers = (id, result) =>{
    db.query(`SELECT * FROM ${table} WHERE id_sekolah = ? `,[id],  (err, results) =>{
        if (err){
            console.log(err);
            result(err, null);
        }else{
            result(null, results)
        }
    })
}


exports.DelUsers = (id, result)=>{
    db.query(`DELETE  FROM ${table} WHERE id = ?`, [id],(err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.resetPW = (id, result)=>{
    db.query(`UPDATE ${table} SET password = MD5('12345678') WHERE ${table}.id = ?`, [id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

exports.updatepassword = (data,id, result)=>{
    db.query(`UPDATE ${table} SET password = MD5(?) WHERE ${table}.id = ?`, [data.password, id], (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}
