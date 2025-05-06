---
title: Linux - Navigasi Dasar
date: 2025-05-04T20:48:44+07:00
tags:
  - linux
  - terminal
  - cli
categories:
  - Linux
---

Pertama, buka terminal. Di Ubuntu yang aku pakai, biasanya dengan menekan <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>. Setelah terbuka, kamu akan melihat tampilan awal seperti ini:

```bash
john@ubuntu:~$
````

**Penjelasan singkat**:

- `john`: nama **user** yang sedang login.
- `ubuntu`: nama **komputer** (hostname).
- `~`: lokasi folder saat ini (**home directory**) untuk user tersebut, yaitu `/home/john`.
- `$`: menandakan kamu adalah **user biasa** (bukan root). Jika kamu login sebagai root, akan terlihat `#`.

## Perintah Untuk Navigasi

Beberapa perintah dasar yang paling sering digunakan adalah:

- `ls`: untuk melihat isi direktori.
	Jika baru pertama kali install linux biasanya default nya seperti ini, tapi tergantung distro juga
	
	```bash
	john@ubuntu:~$ ls
	 Applications   Desktop   Documents   Downloads   Music   Pictures   Public   Templates   Videos
	```

- `pwd`: untuk menampilkan direktori kerja saat ini.

	```bash
	john@ubuntu:~$ pwd
	/home/john
	```

- `cd`: untuk berpindah direktori.
	Coba pindah ke Documents
	
	```bash
	john@ubuntu:~$ cd Documents
	```

- `mkdir`: untuk membuat direktori baru.
	Coba buat direktori baru
	
	```bash
	mkdir folder_baru
	```

- `rmdir`: untuk menghapus direktori (hanya jika direktori kosong).
	Jika direktori memiliki isi, kamu harus menggunakan `rm -r` untuk menghapus direktori beserta isinya.
	Coba hapus direktori
	
	```bash
	rmdir folder_baru
	```

- `touch`: untuk membuat file baru.
	Coba buat file baru
	
	```bash
	touch file_baru.txt
	```

- `rm`: untuk menghapus file.
	Coba hapus file
	
	```bash
	rm file_baru.txt
	```