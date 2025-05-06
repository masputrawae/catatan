---
title: Python - Kalkulator Sederhana
date: 2025-05-04T21:49:18+07:00
tags:
  - python
  - kalkulator_sederhana
  - belajar
  - latihan
categories:
  - Latihan
  - Python
---

Latihan membuat kalkulator sederhana dengan Python untuk memahami:
- Penggunaan `input()` dan `print()`
- Struktur `if-elif-else`
- Operasi aritmatika dasar

## Kode

```python
print("Kalkulator Sederhana")
print(f'''
Pilih Operasi:
[1] Penjumlahan
[2] Pengurangan
[3] Perkalian
[4] Pembagian''')

operasi = int(input("Pilih 1 - 4 >>> "))
angka_pertama = int(input("Masukkan Angka Pertama: "))
angka_kedua = int(input("Masukkan Angka Kedua: "))

if operasi == 1:
    print(angka_pertama + angka_kedua)
elif operasi == 2:
    print(angka_pertama - angka_kedua)
elif operasi == 3:
    print(angka_pertama * angka_kedua)
elif operasi == 4:
    print(angka_pertama / angka_kedua)
else:
    print("Pilihan hanya 1 - 4")
```

### Apa yang Saya Pelajari
- Cara menangkap input angka dari user
- Operator aritmatika
- Operator perbandingan
- Cara membuat menu pilihan
- Pentingnya memeriksa nilai input (misalnya user memasukkan "5" akan error)


## Rencana Perbaikan
- [ ] Tambahkan validasi input agar tidak error kalau user salah ketik
- [ ] Ubah ke bentuk fungsi biar lebih rapi
- [ ] Tambahkan loop supaya bisa menghitung lagi tanpa keluar program
