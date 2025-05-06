---
title: Python  - Ringkasan Perintah os + Command Linux
date: 2025-05-04T23:49:16+07:00
tags:
  - python
  - pemrograman
  - module
categories:
  - Python
  - Pemrograman
---

| Tujuan                   | Python `os` Module          | Command Linux       |
| ------------------------ | --------------------------- | ------------------- |
| Cek folder saat ini      | `os.getcwd()`               | `pwd`               |
| Lihat isi folder         | `os.listdir()`              | `ls`                |
| Buat folder baru         | `os.mkdir('nama_folder')`   | `mkdir nama_folder` |
| Hapus file               | `os.remove('nama_file')`    | `rm nama_file`      |
| Hapus folder             | `os.rmdir('nama_folder')`   | `rmdir nama_folder` |
| Ganti nama file/folder   | `os.rename('lama', 'baru')` | `mv lama baru`      |
| Jalankan perintah manual | `os.system('perintah')`     | ketik langsung      |

> **Note:**  
> `subprocess` lebih aman untuk jalankan command dibanding `os.system`, tapi basic-nya sama.

---

## Latihan Praktik

### 1. Latihan Dasar

Bikin script Python yang:

- Cek lokasi sekarang (`os.getcwd()`)
- Buat folder baru `folder_latihan`
- Rename folder jadi `folder_baru`
- Hapus folder tersebut

**Contoh:**

```python
import os
import time

# Cek lokasi sekarang
print("Lokasi saat ini:", os.getcwd())

# Buat folder baru
os.mkdir('folder_latihan')
print("Folder 'folder_latihan' dibuat.")

# Tunda sebentar
time.sleep(1)

# Rename folder
os.rename('folder_latihan', 'folder_baru')
print("Folder di-rename jadi 'folder_baru'.")

# Tunda lagi
time.sleep(1)

# Hapus folder
os.rmdir('folder_baru')
print("Folder 'folder_baru' dihapus.")
```

---

### 2. Challenge Tambahan

Bikin script Python yang:

- Menjalankan `ls -l` untuk lihat isi folder.
- Menjalankan `ping -c 3 google.com` untuk cek koneksi internet.
- Menyimpan hasil `ls -l` ke file teks.

**Contoh:**

```python
import subprocess

# List isi folder
print("Isi folder saat ini:")
subprocess.run(['ls', '-l'])

# Ping Google
print("\nPing ke Google:")
subprocess.run(['ping', '-c', '3', 'google.com'])

# Simpan hasil 'ls -l' ke file
with open('hasil_ls.txt', 'w') as f:
    hasil = subprocess.run(['ls', '-l'], stdout=f)
print("\nHasil 'ls -l' disimpan ke 'hasil_ls.txt'")
```

---

## Mini Project Malam Ini

**Judul:** "Folder Manager Sederhana"

**Deskripsi:**

- User pilih:
    - 1 → Buat Folder
    - 2 → Rename Folder
    - 3 → Hapus Folder
    - 4 → Lihat Isi Folder
- Semua aksi pakai `os` dan `subprocess`
- Tambahin validasi kalau folder sudah ada atau tidak ditemukan.