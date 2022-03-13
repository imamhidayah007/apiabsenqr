-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 13, 2022 at 04:58 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_metro_absen`
--

-- --------------------------------------------------------

--
-- Table structure for table `absen_guru`
--

CREATE TABLE `absen_guru` (
  `id` int(11) NOT NULL,
  `id_guru` int(11) NOT NULL,
  `hari` varchar(40) NOT NULL,
  `hari_angka` int(11) NOT NULL,
  `kehadiran` varchar(50) NOT NULL,
  `kehadiran_angka` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `absen_guru`
--

INSERT INTO `absen_guru` (`id`, `id_guru`, `hari`, `hari_angka`, `kehadiran`, `kehadiran_angka`, `tgl_absen`, `created_at`) VALUES
(1, 3, 'Kamis', 4, 'Hadir', 1, '2022-02-24', '2022-02-24 15:30:08'),
(2, 18, 'Kamis', 4, 'Hadir', 1, '2022-02-24', '2022-02-24 15:34:42'),
(3, 18, 'Kamis', 4, 'Hadir', 1, '2022-02-24', '2022-02-24 15:34:42'),
(4, 18, 'Kamis', 4, 'Hadir', 1, '2022-02-24', '2022-02-24 15:34:42'),
(5, 18, 'Kamis', 4, 'Hadir', 1, '2022-02-14', '2022-02-14 15:34:42'),
(6, 18, 'Kamis', 4, 'Hadir', 1, '2022-02-15', '2022-02-15 15:34:42'),
(7, 3, 'Kamis', 4, 'Hadir', 1, '2022-02-15', '2022-02-15 15:30:08'),
(8, 3, 'Kamis', 4, 'Hadir', 1, '2022-03-03', '2022-03-03 16:46:19');

-- --------------------------------------------------------

--
-- Table structure for table `absen_guru_pulang`
--

CREATE TABLE `absen_guru_pulang` (
  `id` int(11) NOT NULL,
  `id_guru` int(11) NOT NULL,
  `hari` varchar(40) NOT NULL,
  `hari_angka` int(11) NOT NULL,
  `kehadiran` varchar(50) NOT NULL,
  `kehadiran_angka` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `absen_guru_pulang`
--

INSERT INTO `absen_guru_pulang` (`id`, `id_guru`, `hari`, `hari_angka`, `kehadiran`, `kehadiran_angka`, `tgl_absen`, `created_at`) VALUES
(1, 3, 'Kamis', 4, 'Hadir', 1, '2022-03-03', '2022-03-03 16:47:43');

-- --------------------------------------------------------

--
-- Table structure for table `absen_pulang`
--

CREATE TABLE `absen_pulang` (
  `id` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `id_kelasberjalan` int(11) NOT NULL,
  `hari` varchar(40) NOT NULL,
  `hari_angka` int(11) NOT NULL,
  `kehadiran` varchar(50) NOT NULL,
  `kehadiran_angka` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `absen_pulang`
--

INSERT INTO `absen_pulang` (`id`, `id_siswa`, `id_kelasberjalan`, `hari`, `hari_angka`, `kehadiran`, `kehadiran_angka`, `tgl_absen`, `created_at`) VALUES
(1, 7, 7, 'Kamis', 4, 'Hadir', 1, '2022-03-03', '2022-03-03 16:21:54');

-- --------------------------------------------------------

--
-- Table structure for table `absen_settingjam`
--

CREATE TABLE `absen_settingjam` (
  `id` int(11) NOT NULL,
  `id_sekolah` int(11) NOT NULL,
  `jam_hadir_g1` time NOT NULL,
  `jam_hadir_g2` time NOT NULL,
  `jam_pulang_g1` time NOT NULL,
  `jam_pulang_g2` time NOT NULL,
  `jam_hadir_s1` time NOT NULL,
  `jam_hadir_s2` time NOT NULL,
  `jam_pulang_s1` time NOT NULL,
  `jam_pulang_s2` time NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `absen_settingjam`
--

INSERT INTO `absen_settingjam` (`id`, `id_sekolah`, `jam_hadir_g1`, `jam_hadir_g2`, `jam_pulang_g1`, `jam_pulang_g2`, `jam_hadir_s1`, `jam_hadir_s2`, `jam_pulang_s1`, `jam_pulang_s2`, `created_at`) VALUES
(1, 1, '07:00:00', '11:58:00', '21:01:00', '23:58:00', '07:00:00', '08:30:00', '19:01:00', '23:55:00', '2022-03-03 14:50:14');

-- --------------------------------------------------------

--
-- Table structure for table `input_absen`
--

CREATE TABLE `input_absen` (
  `id` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `id_kelasberjalan` int(11) NOT NULL,
  `hari` varchar(40) NOT NULL,
  `hari_angka` int(11) NOT NULL,
  `kehadiran` varchar(50) NOT NULL,
  `kehadiran_angka` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `input_absen`
--

INSERT INTO `input_absen` (`id`, `id_siswa`, `id_kelasberjalan`, `hari`, `hari_angka`, `kehadiran`, `kehadiran_angka`, `tgl_absen`, `created_at`) VALUES
(37, 7, 7, 'Jumat', 5, 'Hadir', 1, '2022-02-04', '2022-02-16 16:04:09'),
(38, 7, 7, 'Jumat', 5, 'Hadir', 1, '2022-02-04', '2022-02-16 16:04:18'),
(39, 1, 7, 'Jumat', 5, 'Hadir', 1, '2022-02-04', '2022-02-16 16:04:25'),
(44, 7, 7, 'Jumat', 5, 'Hadir', 1, '2022-02-25', '2022-02-25 10:42:29'),
(45, 7, 7, 'Jumat', 5, 'Hadir', 1, '2022-02-25', '2022-02-25 10:42:29'),
(46, 7, 7, 'Jumat', 5, 'Hadir', 1, '2022-02-25', '2022-02-25 10:42:29'),
(47, 7, 7, 'Kamis', 4, 'Hadir', 1, '2022-03-03', '2022-03-03 16:16:28');

-- --------------------------------------------------------

--
-- Table structure for table `kurikulum_jadwal`
--

CREATE TABLE `kurikulum_jadwal` (
  `id` int(11) NOT NULL,
  `id_kelasberjalan` int(11) NOT NULL,
  `id_mapel` int(11) NOT NULL,
  `id_guru` int(11) NOT NULL,
  `hari_angka` int(11) NOT NULL,
  `hari` varchar(20) NOT NULL,
  `jam_mulai` time NOT NULL,
  `jam_selesai` time NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kurikulum_jadwal`
--

INSERT INTO `kurikulum_jadwal` (`id`, `id_kelasberjalan`, `id_mapel`, `id_guru`, `hari_angka`, `hari`, `jam_mulai`, `jam_selesai`, `created_at`) VALUES
(21, 7, 1, 17, 5, 'Jumat', '08:00:00', '09:01:00', '2022-02-04 02:38:31'),
(22, 7, 4, 3, 1, 'Senin', '09:00:00', '11:01:00', '2022-02-04 03:16:15'),
(23, 7, 4, 18, 4, 'Kamis', '02:00:00', '10:01:00', '2022-03-03 16:09:16');

-- --------------------------------------------------------

--
-- Table structure for table `kurikulum_kelasberjalan`
--

CREATE TABLE `kurikulum_kelasberjalan` (
  `id` int(11) NOT NULL,
  `id_sekolah` int(11) NOT NULL,
  `id_ta` int(11) NOT NULL,
  `id_kelompokkelas` int(11) NOT NULL,
  `id_walikelas` int(11) NOT NULL,
  `ruang_kelas` varchar(55) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kurikulum_kelasberjalan`
--

INSERT INTO `kurikulum_kelasberjalan` (`id`, `id_sekolah`, `id_ta`, `id_kelompokkelas`, `id_walikelas`, `ruang_kelas`, `created_at`) VALUES
(7, 1, 13, 1, 17, 'R.1A01', '2022-02-09 15:20:39');

-- --------------------------------------------------------

--
-- Table structure for table `kurikulum_kelompokkelas`
--

CREATE TABLE `kurikulum_kelompokkelas` (
  `id` int(11) NOT NULL,
  `id_sekolah` int(11) NOT NULL,
  `tingkat_kelas` varchar(10) NOT NULL,
  `nama_kelas` varchar(50) DEFAULT NULL,
  `kelompok_kelas` int(11) DEFAULT NULL,
  `status` varchar(15) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kurikulum_kelompokkelas`
--

INSERT INTO `kurikulum_kelompokkelas` (`id`, `id_sekolah`, `tingkat_kelas`, `nama_kelas`, `kelompok_kelas`, `status`, `created_at`) VALUES
(1, 1, 'I', 'A', 1, 'Aktif', '2022-01-05 17:28:40'),
(2, 1, 'II', 'B', 2, 'Aktif', '2022-01-05 17:28:44'),
(5, 1, 'III', 'A', NULL, 'Aktif', '2022-01-05 17:37:11'),
(6, 1, 'I', 'A', NULL, 'Aktif', '2022-01-05 17:38:25'),
(7, 1, 'IV', 'A', 2, 'Aktif', '2022-01-31 16:44:59'),
(8, 1, 'I', 'B', 2, 'Aktif', '2022-02-04 03:15:16'),
(9, 1, 'VI', 'A', 2, 'Aktif', '2022-02-10 04:17:59');

-- --------------------------------------------------------

--
-- Table structure for table `kurikulum_mapel`
--

CREATE TABLE `kurikulum_mapel` (
  `id` int(11) NOT NULL,
  `id_sekolah` int(11) NOT NULL,
  `kode_mapel` varchar(25) NOT NULL,
  `nama_mapel` varchar(100) NOT NULL,
  `kkm` int(11) NOT NULL,
  `status_mapel` varchar(15) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kurikulum_mapel`
--

INSERT INTO `kurikulum_mapel` (`id`, `id_sekolah`, `kode_mapel`, `nama_mapel`, `kkm`, `status_mapel`, `created_at`) VALUES
(1, 1, 'IMTK01', 'Matematika', 76, 'Aktif', '2022-02-09 15:21:10'),
(2, 1, 'IVFSKA01', 'Fisika 1', 81, 'Aktif', '2022-02-09 15:21:14'),
(4, 1, 'Bio01', 'Biologi', 70, 'Aktif', '2022-02-09 15:21:17');

-- --------------------------------------------------------

--
-- Table structure for table `kurikulum_siswa`
--

CREATE TABLE `kurikulum_siswa` (
  `id` int(11) NOT NULL,
  `id_kelasberjalan` int(11) NOT NULL,
  `id_siswa` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kurikulum_siswa`
--

INSERT INTO `kurikulum_siswa` (`id`, `id_kelasberjalan`, `id_siswa`, `created_at`) VALUES
(48, 7, 7, '2022-02-04 02:38:00'),
(49, 7, 1, '2022-02-04 03:17:14');

-- --------------------------------------------------------

--
-- Table structure for table `kurikulum_tahunajaran`
--

CREATE TABLE `kurikulum_tahunajaran` (
  `id` int(11) NOT NULL,
  `id_sekolah` int(11) NOT NULL,
  `tahun_ajaran` varchar(30) DEFAULT NULL,
  `semester` varchar(30) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kurikulum_tahunajaran`
--

INSERT INTO `kurikulum_tahunajaran` (`id`, `id_sekolah`, `tahun_ajaran`, `semester`, `status`, `created_at`) VALUES
(4, 1, '2021/2022', 'Genap', 'Tidak Aktif', '2022-01-03 07:12:27'),
(13, 1, '2022/2023', 'Ganjil', 'Aktif', '2022-01-27 16:54:00');

-- --------------------------------------------------------

--
-- Table structure for table `master_guru`
--

CREATE TABLE `master_guru` (
  `id` int(11) NOT NULL,
  `id_sekolah` int(11) NOT NULL,
  `NIP` varchar(25) DEFAULT NULL,
  `NIK` varchar(25) DEFAULT NULL,
  `Nama` varchar(120) DEFAULT NULL,
  `Agama` varchar(50) DEFAULT NULL,
  `Tempat_Lahir` text DEFAULT NULL,
  `Tanggal_Lahir` date DEFAULT NULL,
  `Jenis_Kelamin` varchar(25) DEFAULT NULL,
  `Alamat` text DEFAULT NULL,
  `Telepon` varchar(20) DEFAULT NULL,
  `Email` varchar(90) DEFAULT NULL,
  `Jabatan` text DEFAULT NULL,
  `Pangkat` varchar(100) DEFAULT NULL,
  `Golongan` varchar(50) DEFAULT NULL,
  `NUPTK` varchar(100) DEFAULT NULL,
  `Status_Marital` varchar(40) DEFAULT NULL,
  `Gol_Darah` varchar(5) DEFAULT NULL,
  `Gelar_Depan` varchar(100) DEFAULT NULL,
  `Gelar_Belakang` varchar(100) DEFAULT NULL,
  `Tahun_Masuk` int(11) DEFAULT NULL,
  `Jabatan_Sekolah` text DEFAULT NULL,
  `NIY` varchar(30) DEFAULT NULL,
  `Status_Guru` varchar(40) DEFAULT NULL,
  `Sertifikasi` varchar(100) DEFAULT NULL,
  `Foto` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master_guru`
--

INSERT INTO `master_guru` (`id`, `id_sekolah`, `NIP`, `NIK`, `Nama`, `Agama`, `Tempat_Lahir`, `Tanggal_Lahir`, `Jenis_Kelamin`, `Alamat`, `Telepon`, `Email`, `Jabatan`, `Pangkat`, `Golongan`, `NUPTK`, `Status_Marital`, `Gol_Darah`, `Gelar_Depan`, `Gelar_Belakang`, `Tahun_Masuk`, `Jabatan_Sekolah`, `NIY`, `Status_Guru`, `Sertifikasi`, `Foto`, `created_at`) VALUES
(3, 1, '22012011', '180104', 'Sugeng Ing Kaweruh', 'Islam', 'Tempuran', '1969-12-30', 'L', 'Jl Lintas Sumatera KM 27 Desa Branti Raya Kec.Natar', '+6285267254841', 'sugeng@gmail.com', 'Danlanal', 'Laksamana Muda', 'IV A', '002', 'Menikah', 'A', 'Ir. Dr. Laksda ', 'S.Han,M.Kom', 2021, 'Keamanan', '001', 'Honor', 'Ya', '2022-01-04T17-13-08.339Z.png', '2022-02-09 15:21:45'),
(17, 1, '202002', '1801040292', 'Banteng Raider', 'Islam', 'Demak', '1989-01-23', 'L', 'Jl. Bersama No 2', '088374628373', 'banteng@gmail.com', 'Danru', 'Kopral Kepala', 'IIIA', '2029928282', 'Menikah', 'B', 'Ir.', 'M.KOM', 2000, 'Guru Olahraga', '180122323', 'Honor', 'Ya', '2022-01-31T16-43-51.704Z.png', '2022-02-09 15:21:48'),
(18, 1, '909090', '1802002', 'Kertasyura', 'Islam', 'disana', '2022-01-03', 'L', 'Jl Lintas Sumatera KM 27 Desa Branti Raya Kec.Natar', '+6285267254841', 'informatika.lampung@gmail.com', 'Danru', 'Sersan', 'V', '12345678', 'Menikah', 'O', 'Ir', 'Phd', 2010, 'Keamanan', '9383833', 'Honor', 'Ya', '2022-02-09T16-16-17.811Z.jpeg', '2022-02-09 16:16:17');

-- --------------------------------------------------------

--
-- Table structure for table `master_sekolah`
--

CREATE TABLE `master_sekolah` (
  `id` int(11) NOT NULL,
  `npsn` varchar(45) NOT NULL,
  `nama_sekolah` varchar(100) NOT NULL,
  `web_sekolah` varchar(125) NOT NULL,
  `telepon` varchar(20) NOT NULL,
  `alamat_sekolah` text NOT NULL,
  `provinsi` varchar(70) NOT NULL,
  `kab_kota` varchar(120) NOT NULL,
  `kecamatan` varchar(120) NOT NULL,
  `kode_pos` varchar(10) NOT NULL,
  `luas_tanah` varchar(20) NOT NULL,
  `ruang_kelas` int(11) NOT NULL,
  `lab` int(11) NOT NULL,
  `perpus` int(11) NOT NULL,
  `email_sekolah` varchar(80) NOT NULL,
  `logo` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master_sekolah`
--

INSERT INTO `master_sekolah` (`id`, `npsn`, `nama_sekolah`, `web_sekolah`, `telepon`, `alamat_sekolah`, `provinsi`, `kab_kota`, `kecamatan`, `kode_pos`, `luas_tanah`, `ruang_kelas`, `lab`, `perpus`, `email_sekolah`, `logo`, `time`) VALUES
(1, '2010634301', 'SDN 2 XYZ', 'https://sdn2.sch.id', '0721 234567', 'Jl. Kenangan Bersama No. 2', 'Lampung', 'Metro', 'Metro Timur', '352167', '1005', 12, 2, 1, 'cs@sdn2.sch.id', '2022-01-31T16-02-13.305Z.png', '2022-01-31 16:02:13'),
(2, '20106343', 'SDN 2 XYZ', 'https://sdn2.sch.id', '0721 234567', 'Jl. Kenangan Bersama No. 2', 'Lampung', 'Metro', 'Metro Timur', '352167', '1005', 12, 2, 1, 'cs@sdn2.sch.id', '2022-01-01T08-35-57.432Z.png', '2022-01-01 08:35:57');

-- --------------------------------------------------------

--
-- Table structure for table `master_siswa`
--

CREATE TABLE `master_siswa` (
  `id` int(11) NOT NULL,
  `id_sekolah` int(11) NOT NULL,
  `nisn` varchar(25) NOT NULL,
  `nis` varchar(25) NOT NULL,
  `nama_siswa` varchar(100) DEFAULT NULL,
  `jenis_kelamin` varchar(5) DEFAULT NULL,
  `tempat_lahir` text DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `agama` varchar(20) DEFAULT NULL,
  `email_siswa` varchar(100) DEFAULT NULL,
  `hp_siswa` varchar(20) DEFAULT NULL,
  `nama_ayah` varchar(100) DEFAULT NULL,
  `nama_ibu` varchar(100) DEFAULT NULL,
  `pekerjaan_ayah` text DEFAULT NULL,
  `pekerjaan_ibu` text DEFAULT NULL,
  `hp_ayah` varchar(20) DEFAULT NULL,
  `hp_ibu` varchar(20) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `nama_wali` varchar(100) DEFAULT NULL,
  `pekerjaan_wali` text DEFAULT NULL,
  `hp_wali` varchar(20) DEFAULT NULL,
  `tanggal_diterima` date DEFAULT NULL,
  `diterima_dikelas` varchar(50) DEFAULT NULL,
  `tahun_ijazah` varchar(55) DEFAULT NULL,
  `tahun_nopes` varchar(55) DEFAULT NULL,
  `no_shun_ijazah` varchar(55) DEFAULT NULL,
  `no_ijazah` varchar(55) DEFAULT NULL,
  `asal_sekolah` varchar(120) DEFAULT NULL,
  `tanggal_masuk` date DEFAULT NULL,
  `tanggal_keluar` date DEFAULT NULL,
  `anak_ke` int(11) DEFAULT NULL,
  `status_siswa` varchar(30) DEFAULT NULL,
  `Foto` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `master_siswa`
--

INSERT INTO `master_siswa` (`id`, `id_sekolah`, `nisn`, `nis`, `nama_siswa`, `jenis_kelamin`, `tempat_lahir`, `tanggal_lahir`, `agama`, `email_siswa`, `hp_siswa`, `nama_ayah`, `nama_ibu`, `pekerjaan_ayah`, `pekerjaan_ibu`, `hp_ayah`, `hp_ibu`, `alamat`, `nama_wali`, `pekerjaan_wali`, `hp_wali`, `tanggal_diterima`, `diterima_dikelas`, `tahun_ijazah`, `tahun_nopes`, `no_shun_ijazah`, `no_ijazah`, `asal_sekolah`, `tanggal_masuk`, `tanggal_keluar`, `anak_ke`, `status_siswa`, `Foto`, `created_at`) VALUES
(1, 1, '1011', '1011', 'Kesuma Putri', 'P', 'Tuban', '1998-01-21', 'Islam', 'siswa@gmail.com', '089928373632', 'Raden Bagus', 'Sri Dewi', 'Camat', 'Wakilnya', '0891928273632', '089283746527', 'Jln. Cut Mutia No.28 Gulak Galik Kec.Teluk Betung Utara', 'Van Diesel', 'Ngurus Partai', '089382736432', '2021-12-28', 'I A', '2021', '18104111', '090909', '080808', 'TK Al Huda', '2021-11-25', '2021-12-25', 1, 'Aktif', '2022-01-04T17-49-54.379Z.png', '2022-01-03 01:00:23'),
(7, 1, '1012', '1012', 'Alugoro', 'L', 'Trowulan', '1998-01-20', 'Islam', 'alugoro@gmail.com', '089928373632', 'Raden Hrun', 'Ny Kusuma Layu', 'Bupati', 'Wakilnya', '0891928273632', '089283746527', 'Jln. Cut Nyak Dien No.39B ', 'Van Tek', 'Ternak Lele', '089382736432', '2021-12-27', 'I A', '2021', '18104111', '090909', '080808', 'TK Al Huda', '2021-11-24', '2021-12-24', 1, 'Aktif', '2022-01-04T17-49-54.379Z.png', '2022-01-03 01:00:23'),
(8, 1, '1013', '1013', 'Lintang Kurnia', 'L', 'Pati', '2010-01-16', 'Islam', 'lintang@gmail.com', '08738373738', 'Cakra Gada', 'Ny Arum Dalu', 'Anggota', 'Bantu Ayah', '08736353425', '0894848484838', 'Jl. Tusuk Sate No. 3', NULL, NULL, NULL, '2019-12-31', 'I', '2020', '93039393', '343943943', '636363522', 'SMP Terbang Tinggi', '2017-10-02', '2019-12-31', 2, 'Aktif', '2022-01-31T16-51-15.165Z.png', '2022-01-31 16:51:15');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id` int(11) NOT NULL,
  `id_sekolah` int(11) NOT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `status_aktif` varchar(10) DEFAULT NULL,
  `access_token` text DEFAULT NULL,
  `level` varchar(25) DEFAULT NULL,
  `id_relasi` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id`, `id_sekolah`, `username`, `password`, `nama`, `status_aktif`, `access_token`, `level`, `id_relasi`, `created_at`, `last_login`) VALUES
(13, 1, '101007', '01cfcd4f6b8770febfb40cb906715822', 'Admin Apps', 'Aktif', NULL, 'Admin', 0, '2021-12-31 21:00:00', '2022-03-03 14:21:39'),
(15, 1, '102007', '827ccb0eea8a706c4c34a16891f84e7b', 'Admin Cadangan', 'Aktif', NULL, 'Admin', 0, '2022-01-13 16:36:48', '2022-02-09 15:22:12'),
(16, 1, '1012', '827ccb0eea8a706c4c34a16891f84e7b', 'Alugoro', 'Aktif', NULL, 'Siswa', 7, '2022-01-13 16:37:53', '2022-03-03 14:19:31'),
(17, 1, '22012011', '827ccb0eea8a706c4c34a16891f84e7b', 'Sugeng Ing Kaweruh', 'Aktif', NULL, 'Guru', 3, '2022-01-13 16:38:20', '2022-02-22 15:39:55'),
(18, 1, '1011', '827ccb0eea8a706c4c34a16891f84e7b', 'Kesuma Putri', 'Aktif', NULL, 'Siswa', 1, '2022-01-14 23:10:07', '2022-02-22 15:47:33'),
(19, 1, '202002', '827ccb0eea8a706c4c34a16891f84e7b', 'Banteng Raider', 'Aktif', NULL, 'Guru', 17, '2022-01-31 23:44:28', '2022-02-09 15:22:25');

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_jadwal_kelasdanguru`
-- (See below for the actual view)
--
CREATE TABLE `v_jadwal_kelasdanguru` (
`id` int(11)
,`id_sekolah` int(11)
,`tahun_ajaran` varchar(30)
,`semester` varchar(30)
,`tingkat_kelas` varchar(10)
,`nama_kelas` varchar(50)
,`kelompok_kelas` int(11)
,`idw` int(11)
,`NIP_WaliKelas` varchar(25)
,`Nama_Walikelas` varchar(120)
,`ruang_kelas` varchar(55)
,`status` varchar(30)
,`kode_mapel` varchar(25)
,`nama_mapel` varchar(100)
,`kkm` int(11)
,`Nama_guru_mapel` varchar(120)
,`NIP_guru_mapel` varchar(25)
,`idg` int(11)
,`idJadwal` int(11)
,`hari_angka` int(11)
,`hari` varchar(20)
,`jam_mulai` time
,`jam_selesai` time
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_jadwal_siswa`
-- (See below for the actual view)
--
CREATE TABLE `v_jadwal_siswa` (
`id` int(11)
,`id_sekolah` int(11)
,`tahun_ajaran` varchar(30)
,`semester` varchar(30)
,`tingkat_kelas` varchar(10)
,`nama_kelas` varchar(50)
,`kelompok_kelas` int(11)
,`idw` int(11)
,`NIP_WaliKelas` varchar(25)
,`Nama_Walikelas` varchar(120)
,`ruang_kelas` varchar(55)
,`status` varchar(30)
,`kode_mapel` varchar(25)
,`nama_mapel` varchar(100)
,`kkm` int(11)
,`Nama_guru_mapel` varchar(120)
,`NIP_guru_mapel` varchar(25)
,`hari` varchar(20)
,`angka_hari` int(11)
,`jam_mulai` time
,`jam_selesai` time
,`idSiswa` int(11)
,`nisn` varchar(25)
,`nis` varchar(25)
,`nama_siswa` varchar(100)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_kelas_berjalan`
-- (See below for the actual view)
--
CREATE TABLE `v_kelas_berjalan` (
`id` int(11)
,`id_sekolah` int(11)
,`tahun_ajaran` varchar(30)
,`id_ta` int(11)
,`semester` varchar(30)
,`tingkat_kelas` varchar(10)
,`nama_kelas` varchar(50)
,`kelompok_kelas` int(11)
,`idw` int(11)
,`NIP` varchar(25)
,`Nama` varchar(120)
,`ruang_kelas` varchar(55)
,`status` varchar(30)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_rekap_absensiswa`
-- (See below for the actual view)
--
CREATE TABLE `v_rekap_absensiswa` (
`id_siswa` int(11)
,`nama_siswa` varchar(100)
,`id_kelasberjalan` int(11)
,`tingkat_kelas` varchar(10)
,`nama_kelas` varchar(50)
,`kelompok_kelas` int(11)
,`tahun_ajaran` varchar(30)
,`semester` varchar(30)
,`status` varchar(30)
,`Hadir` decimal(22,0)
,`Izin` decimal(22,0)
,`Sakit` decimal(22,0)
,`Alpha` decimal(22,0)
,`Dispensasi` decimal(22,0)
,`Total` decimal(22,0)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_setting_siswa`
-- (See below for the actual view)
--
CREATE TABLE `v_setting_siswa` (
`idkelasberjalan` int(11)
,`id_sekolah` int(11)
,`status` varchar(30)
,`id_siswa` int(11)
,`nisn` varchar(25)
,`nis` varchar(25)
,`nama_siswa` varchar(100)
);

-- --------------------------------------------------------

--
-- Structure for view `v_jadwal_kelasdanguru`
--
DROP TABLE IF EXISTS `v_jadwal_kelasdanguru`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_jadwal_kelasdanguru`  AS  select `kurikulum_kelasberjalan`.`id` AS `id`,`kurikulum_kelasberjalan`.`id_sekolah` AS `id_sekolah`,`ta`.`tahun_ajaran` AS `tahun_ajaran`,`ta`.`semester` AS `semester`,`kelas`.`tingkat_kelas` AS `tingkat_kelas`,`kelas`.`nama_kelas` AS `nama_kelas`,`kelas`.`kelompok_kelas` AS `kelompok_kelas`,`wali`.`id` AS `idw`,`wali`.`NIP` AS `NIP_WaliKelas`,`wali`.`Nama` AS `Nama_Walikelas`,`kurikulum_kelasberjalan`.`ruang_kelas` AS `ruang_kelas`,`ta`.`status` AS `status`,`mapel`.`kode_mapel` AS `kode_mapel`,`mapel`.`nama_mapel` AS `nama_mapel`,`mapel`.`kkm` AS `kkm`,`guru`.`Nama` AS `Nama_guru_mapel`,`guru`.`NIP` AS `NIP_guru_mapel`,`guru`.`id` AS `idg`,`jadwal`.`id` AS `idJadwal`,`jadwal`.`hari_angka` AS `hari_angka`,`jadwal`.`hari` AS `hari`,`jadwal`.`jam_mulai` AS `jam_mulai`,`jadwal`.`jam_selesai` AS `jam_selesai` from ((((((`kurikulum_jadwal` `jadwal` join `kurikulum_kelasberjalan` on(`kurikulum_kelasberjalan`.`id` = `jadwal`.`id_kelasberjalan`)) join `kurikulum_tahunajaran` `ta` on(`ta`.`id` = `kurikulum_kelasberjalan`.`id_ta`)) join `master_guru` `wali` on(`wali`.`id` = `kurikulum_kelasberjalan`.`id_walikelas`)) join `kurikulum_kelompokkelas` `kelas` on(`kelas`.`id` = `kurikulum_kelasberjalan`.`id_kelompokkelas`)) join `kurikulum_mapel` `mapel` on(`mapel`.`id` = `jadwal`.`id_mapel`)) join `master_guru` `guru` on(`guru`.`id` = `jadwal`.`id_guru`)) order by `jadwal`.`hari_angka` ;

-- --------------------------------------------------------

--
-- Structure for view `v_jadwal_siswa`
--
DROP TABLE IF EXISTS `v_jadwal_siswa`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_jadwal_siswa`  AS  select `kurikulum_kelasberjalan`.`id` AS `id`,`kurikulum_kelasberjalan`.`id_sekolah` AS `id_sekolah`,`ta`.`tahun_ajaran` AS `tahun_ajaran`,`ta`.`semester` AS `semester`,`kelas`.`tingkat_kelas` AS `tingkat_kelas`,`kelas`.`nama_kelas` AS `nama_kelas`,`kelas`.`kelompok_kelas` AS `kelompok_kelas`,`wali`.`id` AS `idw`,`wali`.`NIP` AS `NIP_WaliKelas`,`wali`.`Nama` AS `Nama_Walikelas`,`kurikulum_kelasberjalan`.`ruang_kelas` AS `ruang_kelas`,`ta`.`status` AS `status`,`mapel`.`kode_mapel` AS `kode_mapel`,`mapel`.`nama_mapel` AS `nama_mapel`,`mapel`.`kkm` AS `kkm`,`guru`.`Nama` AS `Nama_guru_mapel`,`guru`.`NIP` AS `NIP_guru_mapel`,`jadwal`.`hari` AS `hari`,`jadwal`.`hari_angka` AS `angka_hari`,`jadwal`.`jam_mulai` AS `jam_mulai`,`jadwal`.`jam_selesai` AS `jam_selesai`,`set_siswa`.`id_siswa` AS `idSiswa`,`siswa`.`nisn` AS `nisn`,`siswa`.`nis` AS `nis`,`siswa`.`nama_siswa` AS `nama_siswa` from ((((((((`kurikulum_jadwal` `jadwal` join `kurikulum_kelasberjalan` on(`kurikulum_kelasberjalan`.`id` = `jadwal`.`id_kelasberjalan`)) join `kurikulum_tahunajaran` `ta` on(`ta`.`id` = `kurikulum_kelasberjalan`.`id_ta`)) join `master_guru` `wali` on(`wali`.`id` = `kurikulum_kelasberjalan`.`id_walikelas`)) join `kurikulum_kelompokkelas` `kelas` on(`kelas`.`id` = `kurikulum_kelasberjalan`.`id_kelompokkelas`)) join `kurikulum_mapel` `mapel` on(`mapel`.`id` = `jadwal`.`id_mapel`)) join `master_guru` `guru` on(`guru`.`id` = `jadwal`.`id_guru`)) join `kurikulum_siswa` `set_siswa` on(`set_siswa`.`id_kelasberjalan` = `kurikulum_kelasberjalan`.`id`)) join `master_siswa` `siswa` on(`siswa`.`id` = `set_siswa`.`id_siswa`)) ;

-- --------------------------------------------------------

--
-- Structure for view `v_kelas_berjalan`
--
DROP TABLE IF EXISTS `v_kelas_berjalan`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_kelas_berjalan`  AS  select `kurikulum_kelasberjalan`.`id` AS `id`,`kurikulum_kelasberjalan`.`id_sekolah` AS `id_sekolah`,`ta`.`tahun_ajaran` AS `tahun_ajaran`,`ta`.`id` AS `id_ta`,`ta`.`semester` AS `semester`,`kelas`.`tingkat_kelas` AS `tingkat_kelas`,`kelas`.`nama_kelas` AS `nama_kelas`,`kelas`.`kelompok_kelas` AS `kelompok_kelas`,`wali`.`id` AS `idw`,`wali`.`NIP` AS `NIP`,`wali`.`Nama` AS `Nama`,`kurikulum_kelasberjalan`.`ruang_kelas` AS `ruang_kelas`,`ta`.`status` AS `status` from (((`kurikulum_kelasberjalan` join `kurikulum_tahunajaran` `ta` on(`kurikulum_kelasberjalan`.`id_ta` = `ta`.`id`)) join `kurikulum_kelompokkelas` `kelas` on(`kurikulum_kelasberjalan`.`id_kelompokkelas` = `kelas`.`id`)) join `master_guru` `wali` on(`kurikulum_kelasberjalan`.`id_walikelas` = `wali`.`id`)) order by `kurikulum_kelasberjalan`.`id` desc ;

-- --------------------------------------------------------

--
-- Structure for view `v_rekap_absensiswa`
--
DROP TABLE IF EXISTS `v_rekap_absensiswa`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_rekap_absensiswa`  AS  select `input_absen`.`id_siswa` AS `id_siswa`,`db_absen`.`master_siswa`.`nama_siswa` AS `nama_siswa`,`input_absen`.`id_kelasberjalan` AS `id_kelasberjalan`,`db_absen`.`kurikulum_kelompokkelas`.`tingkat_kelas` AS `tingkat_kelas`,`db_absen`.`kurikulum_kelompokkelas`.`nama_kelas` AS `nama_kelas`,`db_absen`.`kurikulum_kelompokkelas`.`kelompok_kelas` AS `kelompok_kelas`,`db_absen`.`kurikulum_tahunajaran`.`tahun_ajaran` AS `tahun_ajaran`,`db_absen`.`kurikulum_tahunajaran`.`semester` AS `semester`,`db_absen`.`kurikulum_tahunajaran`.`status` AS `status`,sum(case when `input_absen`.`kehadiran` = 'Hadir' then 1 else 0 end) AS `Hadir`,sum(case when `input_absen`.`kehadiran` = 'Izin' then 1 else 0 end) AS `Izin`,sum(case when `input_absen`.`kehadiran` = 'Sakit' then 1 else 0 end) AS `Sakit`,sum(case when `input_absen`.`kehadiran` = 'Alpha' then 1 else 0 end) AS `Alpha`,sum(case when `input_absen`.`kehadiran` = 'Dispensasi' then 1 else 0 end) AS `Dispensasi`,sum(case when `input_absen`.`kehadiran` = 'Hadir' then 1 when `input_absen`.`kehadiran` = 'Izin' then 1 when `input_absen`.`kehadiran` = 'Sakit' then 1 when `input_absen`.`kehadiran` = 'Alpha' then 1 when `input_absen`.`kehadiran` = 'Dispensasi' then 1 else 0 end) AS `Total` from (((((select `db_absen`.`input_absen`.`id_siswa` AS `id_siswa`,`db_absen`.`input_absen`.`kehadiran` AS `kehadiran`,`db_absen`.`input_absen`.`id_kelasberjalan` AS `id_kelasberjalan`,`db_absen`.`input_absen`.`tgl_absen` AS `tgl_absen` from `db_absen`.`input_absen` group by `db_absen`.`input_absen`.`tgl_absen`,`db_absen`.`input_absen`.`id_siswa`,`db_absen`.`input_absen`.`id_kelasberjalan`) `input_absen` join `db_absen`.`master_siswa` on(`input_absen`.`id_siswa` = `db_absen`.`master_siswa`.`id`)) join `db_absen`.`kurikulum_kelasberjalan` on(`input_absen`.`id_kelasberjalan` = `db_absen`.`kurikulum_kelasberjalan`.`id`)) join `db_absen`.`kurikulum_kelompokkelas` on(`db_absen`.`kurikulum_kelasberjalan`.`id_kelompokkelas` = `db_absen`.`kurikulum_kelompokkelas`.`id`)) join `db_absen`.`kurikulum_tahunajaran` on(`db_absen`.`kurikulum_kelasberjalan`.`id_ta` = `db_absen`.`kurikulum_tahunajaran`.`id`)) group by `input_absen`.`id_siswa`,`input_absen`.`id_kelasberjalan`,`db_absen`.`master_siswa`.`nama_siswa`,`db_absen`.`kurikulum_kelompokkelas`.`tingkat_kelas`,`db_absen`.`kurikulum_kelompokkelas`.`nama_kelas`,`db_absen`.`kurikulum_kelompokkelas`.`kelompok_kelas`,`db_absen`.`kurikulum_tahunajaran`.`tahun_ajaran`,`db_absen`.`kurikulum_tahunajaran`.`semester`,`db_absen`.`kurikulum_tahunajaran`.`semester`,`db_absen`.`kurikulum_tahunajaran`.`status` ;

-- --------------------------------------------------------

--
-- Structure for view `v_setting_siswa`
--
DROP TABLE IF EXISTS `v_setting_siswa`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_setting_siswa`  AS  select `kurikulum_kelasberjalan`.`id` AS `idkelasberjalan`,`kurikulum_kelasberjalan`.`id_sekolah` AS `id_sekolah`,`kurikulum_tahunajaran`.`status` AS `status`,`master_siswa`.`id` AS `id_siswa`,`master_siswa`.`nisn` AS `nisn`,`master_siswa`.`nis` AS `nis`,`master_siswa`.`nama_siswa` AS `nama_siswa` from (((`kurikulum_siswa` join `master_siswa` on(`kurikulum_siswa`.`id_siswa` = `master_siswa`.`id`)) join `kurikulum_kelasberjalan` on(`kurikulum_kelasberjalan`.`id` = `kurikulum_siswa`.`id_kelasberjalan`)) join `kurikulum_tahunajaran` on(`kurikulum_tahunajaran`.`id` = `kurikulum_kelasberjalan`.`id_ta`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absen_guru`
--
ALTER TABLE `absen_guru`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `absen_guru_pulang`
--
ALTER TABLE `absen_guru_pulang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `absen_pulang`
--
ALTER TABLE `absen_pulang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `absen_settingjam`
--
ALTER TABLE `absen_settingjam`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `input_absen`
--
ALTER TABLE `input_absen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kurikulum_jadwal`
--
ALTER TABLE `kurikulum_jadwal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kurikulum_kelasberjalan`
--
ALTER TABLE `kurikulum_kelasberjalan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kurikulum_kelompokkelas`
--
ALTER TABLE `kurikulum_kelompokkelas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kurikulum_mapel`
--
ALTER TABLE `kurikulum_mapel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kurikulum_siswa`
--
ALTER TABLE `kurikulum_siswa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kurikulum_tahunajaran`
--
ALTER TABLE `kurikulum_tahunajaran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_guru`
--
ALTER TABLE `master_guru`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_sekolah`
--
ALTER TABLE `master_sekolah`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_siswa`
--
ALTER TABLE `master_siswa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absen_guru`
--
ALTER TABLE `absen_guru`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `absen_guru_pulang`
--
ALTER TABLE `absen_guru_pulang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `absen_pulang`
--
ALTER TABLE `absen_pulang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `absen_settingjam`
--
ALTER TABLE `absen_settingjam`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `input_absen`
--
ALTER TABLE `input_absen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `kurikulum_jadwal`
--
ALTER TABLE `kurikulum_jadwal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `kurikulum_kelasberjalan`
--
ALTER TABLE `kurikulum_kelasberjalan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `kurikulum_kelompokkelas`
--
ALTER TABLE `kurikulum_kelompokkelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `kurikulum_mapel`
--
ALTER TABLE `kurikulum_mapel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `kurikulum_siswa`
--
ALTER TABLE `kurikulum_siswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `kurikulum_tahunajaran`
--
ALTER TABLE `kurikulum_tahunajaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `master_guru`
--
ALTER TABLE `master_guru`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `master_sekolah`
--
ALTER TABLE `master_sekolah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `master_siswa`
--
ALTER TABLE `master_siswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
