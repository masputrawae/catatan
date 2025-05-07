---
title: Php My Admin
date: 2025-05-05T00:24:14+07:00
tags:
  - inbox
categories:
  - Inbox
---

# Install PhpMyAdmin

phpMyAdmin adalah alat berbasis web yang digunakan untuk mengelola database MySQL secara grafis. Dengan phpMyAdmin, pengguna bisa melakukan berbagai tugas seperti membuat, mengedit, menghapus database, tabel, dan data, serta menjalankan query SQL tanpa perlu menggunakan baris perintah. Alat ini memudahkan pengelolaan database bagi pengembang web, terutama yang baru mengenal MySQL.

## Langkah 1: Install phpMyAdmin

Ketik perintah ini di terminal untuk install phpMyAdmin:

```bash
sudo apt install phpmyadmin
```

Saat proses instalasi:

- Kamu akan diminta memilih **web server** yang akan dikonfigurasi secara otomatis untuk phpMyAdmin. Pilih **Apache** (dengan spasi untuk memilihnya, lalu tekan `Enter`).
- Saat diminta **konfigurasi database untuk phpMyAdmin**, pilih `Yes`, lalu masukkan password MySQL root yang sudah kamu buat tadi atau password baru khusus untuk phpMyAdmin.

## Langkah 2: Verifikasi Konfigurasi

Pastikan phpMyAdmin terpasang di folder yang benar dengan perintah:

```bash
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Langkah 3: Restart Apache

Setelah instalasi selesai, restart Apache untuk memastikan perubahan diterapkan:

```bash
sudo systemctl restart apache2
```

## Langkah 4: Akses phpMyAdmin

Sekarang, buka browser dan akses:

```
http://localhost/phpmyadmin
```

Kamu akan melihat halaman login phpMyAdmin. Masukkan **username root** dan **password MySQL** untuk login, dan kamu siap mengelola database melalui antarmuka phpMyAdmin!

Gimana, sudah bisa diakses? 😊

## Langkah 5: Sett password (jika di awal belum set password)

Sekarang kita bisa atur password root MySQL supaya bisa login di phpMyAdmin. Berikut langkah-langkahnya:

### Langkah 1: Masuk ke MySQL tanpa password

Coba login ke MySQL dengan perintah ini:

```bash
sudo mysql
```

Karena autentikasi berbasis _socket_, kamu bisa langsung masuk tanpa password.

### Langkah 2: Setel Password untuk root

Sekarang kita setel password untuk root MySQL supaya bisa login. Gunakan perintah ini:

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password_anda';
```

Gantilah `password_anda` dengan password yang kamu inginkan.

### Langkah 3: Keluar dari MySQL

Setelah password berhasil diubah, ketik:

```sql
exit;
```

### Langkah 4: Coba Login ke phpMyAdmin

Sekarang coba login ke phpMyAdmin lagi dengan menggunakan username `root` dan password yang baru kamu setel tadi. Seharusnya sudah bisa masuk!
