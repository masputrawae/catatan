---
title: Python - Kondisi
date: 2025-05-04T06:28:56+07:00
tags:
  - python
  - pemrograman
  - kondisi
categories:
  - Python
  - Pemrograman
---

Struktur kondisi digunakan untuk mengevaluasi suatu kondisi dan menjalankan kode tertentu berdasarkan hasil evaluasi tersebut. Misalnya:

```python
ada_kayu = True

if ada_kayu:
  print("Lompat")
else:
  print("Jalan terus")
```

Penjelasan:
Variabel `ada_kayu` bernilai `True`. Karena kondisinya benar, maka program mencetak `Lompat`. Jika `ada_kayu` bernilai `False`, maka akan mencetak `Jalan terus`.

Struktur kondisi membantu menentukan alur logika program. Jika tidak diberikan alternatif (`else` atau `elif`), maka program tidak melakukan apa-apa saat kondisi tidak terpenuhi—bukan error, hanya tidak ada output.

Contoh lain:

```python
nilai = 85

if nilai >= 90:
  print("Mendapatkan nilai A")
elif nilai >= 80:
  print("Mendapatkan nilai B")
elif nilai >= 70:
  print("Mendapatkan nilai C")
elif nilai >= 60:
  print("Mendapatkan nilai D")
else:
  print("Mendapatkan nilai E")
```

Penjelasan:
Program membandingkan nilai variabel `nilai` dengan beberapa kondisi. Jika `nilai = 85`, maka akan mencetak `Mendapatkan nilai B`, karena `85 >= 80`.

## Operator Perbandingan

Berikut adalah daftar operator perbandingan yang digunakan di Python:

| Operator | Penjelasan                   |
| -------- | ---------------------------- |
| `>`      | Lebih dari                   |
| `<`      | Kurang dari                  |
| `>=`     | Lebih dari atau sama dengan  |
| `<=`     | Kurang dari atau sama dengan |
| `==`     | Sama dengan                  |
| `!=`     | Tidak sama dengan            |
