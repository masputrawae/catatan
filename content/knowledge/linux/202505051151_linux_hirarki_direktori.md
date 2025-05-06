---
title: Linux - Hirarki Direktori
date: 2025-05-05T11:51:03+07:00
tags:
  - linux
categories:
  - Linux
---

| Direktori | Fungsi Utama                                                                          |
| --------- | ------------------------------------------------------------------------------------- |
| `/`       | Akar dari semua direktori (root filesystem). Semua file dan folder berawal dari sini. |
| `/bin`    | Berisi perintah penting (seperti `ls`, `cp`, `mv`, `cat`) yang dibutuhkan semua user. |
| `/sbin`   | Perintah penting untuk administrasi sistem (biasanya hanya bisa digunakan oleh root). |
| `/etc`    | Semua file konfigurasi sistem (contoh: jaringan, user, service).                      |
| `/lib`    | Library penting untuk menjalankan file di `/bin` dan `/sbin`.                         |
| `/usr`    | Software dan library tambahan untuk user (seperti editor, compiler, dll).             |
| `/home`   | Direktori personal tiap user (seperti `/home/john`).                                  |
| `/root`   | Direktori personal khusus untuk user root.                                            |
| `/boot`   | Berisi kernel dan file untuk booting sistem.                                          |
| `/dev`    | Representasi perangkat keras (contoh: `/dev/sda` untuk harddisk).                     |
| `/proc`   | Info runtime tentang sistem dan proses, seperti CPU, memori, dll.                     |
| `/var`    | File yang sering berubah seperti log (`/var/log`), cache, dan mail.                   |
| `/tmp`    | Tempat file sementara, biasanya dihapus saat reboot.                                  |

---

**Paling sering diakses oleh pengguna biasa:**

- `/home` → folder kerja kamu.
- `/bin` & `/usr/bin` → tempat perintah-perintah umum.
- `/etc` → untuk konfigurasi sistem.    
- `/var/log` → untuk melihat log sistem.
