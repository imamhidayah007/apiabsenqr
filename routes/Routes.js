const router = require('express').Router()
const UsersController = require('../controller/UsersC')
const MasterController = require('../controller/MasterC')
const KurikulumController = require('../controller/KurikulumC')
const SiswaController = require('../controller/SiswaC')
const GuruController = require('../controller/GuruC')
const AbsensiController = require('../controller/AbsenC')


const uploadSetting = require('../config/UploadConfig')
const fields = uploadSetting.upload.single('logo')
const foto = uploadSetting.upload.single('Foto')


//-------Users-----
//insert Users
router.post('/insertUsers', UsersController.inputUsers)
router.post('/login', UsersController.authLogin)

router.get('/getusers/:id', UsersController.getUsers)
router.delete('/hapususers/:id', UsersController.hapusUsers)
router.get('/resetpw/:id', UsersController.resetPW)
router.put('/updatepassword/:id', UsersController.updatepassword)
//-------Master-----
//Set Sekolah
router.get('/getSekolah/:id', MasterController.getSekolah)
router.put('/setSekolah/:id', fields,MasterController.setSekolah);

//insert Guru Staff
router.post('/inputGuru/', foto,MasterController.inputGuru);
router.get('/getGuru/:id', MasterController.getGuru);
router.get('/detailGuru/:id', MasterController.detailGuru);
router.put('/updateguru/:id', foto,MasterController.updateGuru);
router.delete('/hapusGuru/:id/:foto', MasterController.hapusGuru);

//insert Siswa
router.post('/inputSiswa/', foto,MasterController.inputSiswa);
router.get('/getSiswa/:id', MasterController.getSiswa);
router.get('/detailSiswa/:id', MasterController.detailSiswa);
router.put('/updatesiswa/:id', foto,MasterController.updateSiswa);
router.delete('/hapusSiswa/:id/:foto', MasterController.hapusSiswa);


//-----Kurikulum
router.post('/inputTahunAjaran/', KurikulumController.inputTahunAjaran);
router.get('/getTahunAjaran/:id', KurikulumController.getTahunAjaran);
router.get('/getTahunAjaranAktif/:id', KurikulumController.getTahunAjaranAktif);
router.put('/updateTA/:id', KurikulumController.updateTA);
router.delete('/hapusTahunAjaran/:id', KurikulumController.hapusTahunAjaran);

router.post('/inputkelomokkelas/', KurikulumController.inputKelompokKelas);
router.get('/getkelompokkelas/:id', KurikulumController.getKelompokKelas);
router.get('/getkelompokkelasAktif/:id', KurikulumController.getKelompokKelasAktif);
router.delete('/hapuskelompokkelas/:id', KurikulumController.hapusKelompokKelas);
router.put('/updateKelompokKelas/:id', KurikulumController.updateKelompokKelas);


router.post('/inputmapel/', KurikulumController.inputMapel);
router.get('/getmapel/:id', KurikulumController.getMapel);
router.get('/getmapelaktif/:id', KurikulumController.getMapelAktif);
router.delete('/hapusmapel/:id', KurikulumController.hapusMapel);
router.put('/updatemapel/:id', KurikulumController.updateMapel);

router.post('/inputkelasberjalan/', KurikulumController.inputKelasBerjalan);
router.get('/getkelasberjalan/:id', KurikulumController.getKelasBerjalan);
router.get('/getkelasberjalanbyta/:id/:ids', KurikulumController.getKelasBerjalanByTA);
router.put('/updatekelasberjalan/:id', KurikulumController.updateKelasBerjalan);

router.post('/inputjadwal/', KurikulumController.inputJadwal);
router.get('/getjadwal/:id', KurikulumController.getJadwal);
router.delete('/hapusjadwal/:id', KurikulumController.hapusJadwal);

router.get('/getsetsiswa/:id', KurikulumController.getSetSiswa);
router.get('/daftardatasiswa/:id', KurikulumController.daftarDataSiswa);
router.post('/inputsetSiswa/', KurikulumController.inputSetSiswa);
router.delete('/hapussetsiswa/:id/:idk', KurikulumController.hapusSetSiswa);

//-----------------Siswa-------
router.get('/getjadwalsiswa/:id', SiswaController.getjadwalsiswa);
router.get('/getjadwalsiswafull/:id', SiswaController.getjadwalsiswaFull);


//-----------------Guru-------
router.get('/getjadwalguru/:id/:ids', GuruController.getjadwalguru);
router.get('/getjadwalgurufull/:id/:ids', GuruController.getjadwalguruFull);
router.get('/getjadwalrekap/:id/:ids', GuruController.getjadwalRekap);


//---------------Absen-----
router.post('/inputabsen/', AbsensiController.inputAbsen);
router.post('/inputabsenpulang/', AbsensiController.inputAbsenPulang);
// router.post('/saveabsen/', AbsensiController.saveabsen);
router.get('/cekabsensi/:id', AbsensiController.cekAbsen);
router.get('/rekapabsensiswa/:id', AbsensiController.rekapabsen_siswa);
router.get('/detailrekapabsensiswa/:id/:idkelas', AbsensiController.detailrekapabsen_siswa);

router.get('/admrekapabsenkelas/:id', AbsensiController.admrekap_absensiswa);
router.get('/guru_cekabsen/:idk', AbsensiController.guru_cekabsen);

router.post('/guru_inputabsen/', AbsensiController.manual_inputAbsen);
router.put('/guru_ubahabsen/:ids/:idk', AbsensiController.manual_updateabsen);

router.get('/getjamabsen/:id', AbsensiController.get_jamabsen);
router.post('/inputjamabsen/', AbsensiController.input_jamabsen);
router.put('/updatejamabsen/:id', AbsensiController.update_jamabsen);

//---------absen guru-------
router.post('/guru_inputabsenharian/', AbsensiController.inputabsen_guru);
router.post('/guru_inputabsenharian_pulang/', AbsensiController.inputabsen_guru_pulang);
router.get('/detailrekapabsenguru/:id', AbsensiController.detailrekapabsen_guru);

router.get('/guru_rekapabsen_all/:ids/:tglm/:tgla', AbsensiController.guru_rekap_all);
router.get('/guru_rekapabsen_rinci/:idg/:tglm/:tgla', AbsensiController.guru_rekap_rinci);

//----------------------------
router.get('/jamhadirguru/:jam/:ids', AbsensiController.JamHadirGuru);
router.get('/jampulangguru/:jam/:ids', AbsensiController.JamPulangGuru);

router.get('/jamhadirsiswa/:jam/:ids', AbsensiController.JamHadirSiswa);
router.get('/jampulangsiswa/:jam/:ids', AbsensiController.JamPulangSiswa);


module.exports = router

