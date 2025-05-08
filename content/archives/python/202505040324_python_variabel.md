---
title: Python - Variabel
date: 2025-05-04T03:24:32+07:00
tags:
  - python
  - pemrograman
  - variabel
categories:
  - Pemrograman
  - Python
---

Di python membuat variabel tidak memerlukan pendeklarasian tipe datanya, contoh:

```python
nama = "Dudung" # string
usia = 15 # integer
tinggi = 1.6 # float
is_active = True # boolean
```

Beberapa aturan penulisan variabel di python sebagai berikut:

Harus diawali dengan huruf atau undescore `_`

```python
nama = "John"
_nama = "Doe"
```

Contoh Salah (Tidak boleh diawali dengan angka):

```python
2nama = "Salah"   # ERROR
```

Hanya boleh mengandung huruf, angka, dan undescore

```python
umur_1 = 20       # Benar
alamat_rumah = "Jakarta"   # Benar
```

Tidak boleh ada spasi

```python
nama_lengkap = "John Doe"   # Benar
nama lengkap = "John Doe"   # SALAH
```

Case-sensitive (Huruf besar kecil dibedakan)

```python
nilai = 90
Nilai = 80

print(nilai)  # Output: 90
print(Nilai)  # Output: 80
```

Secara best practices penulisan variabel di python menggunakan snake_case untuk variabel biasa

```python
total_harga = 1000
```

Gunakan Kapital untuk Konstanta

```python
PI = 3.14
```