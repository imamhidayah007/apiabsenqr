module.exports = {
    sukes: (msg) => {
        return {
            status: true,
            msg: msg
        }
    },
    gagal: (msg) => {

        return {
            status: false,
            msg: msg
        }
    },

    suksesWithData: (data) => {
        return{
            status: true,
            msg: 'Berhasil MEMUAT DATA',
            result: data
        }
    },
    failedWithData: (data) =>{
        return{
            status: false,
            msg: 'Gagal Memuat DATA',
            result: [data]
        }

    }

}
