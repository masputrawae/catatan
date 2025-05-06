---
title: Python - Tipe Data
date: 2025-05-04T06:14:57+07:00
tags:
  - python
  - pemrograman
  - tipe_data
categories:
  - Python
  - Pemrograman
---

Biasanya Tipe data itu adalah value atau isi dari sebuah [[202505040324_python_variabel|variabel]], dan tipe data ini memiliki beberapa jenis yaitu

## Tipe Data Dasar

| Tipe Data            | Contoh                  | Penjelasan                           |
| :------------------- | :---------------------- | :----------------------------------- |
| **Integer (`int`)**  | `1`, `-20`, `0`         | Bilangan bulat, positif atau negatif |
| **Float (`float`)**  | `3.14`, `-0.001`, `2.0` | Bilangan pecahan atau desimal        |
| **String (`str`)**   | `'Hello'`, `"Python"`   | Teks, kumpulan karakter              |
| **Boolean (`bool`)** | `True`, `False`         | Nilai logika (benar atau salah)      |

---

## Tipe Data Struktur/Koleksi

| Tipe Data               | Contoh                             | Penjelasan                                                        |
| :---------------------- | :--------------------------------- | :---------------------------------------------------------------- |
| **List (`list`)**       | `[1, 2, 3]`, `['a', 'b', 'c']`     | Koleksi elemen yang terurut, bisa diubah (mutable)                |
| **Tuple (`tuple`)**     | `(1, 2, 3)`, `('a', 'b')`          | Koleksi elemen yang terurut, **tidak bisa diubah** (immutable)    |
| **Set (`set`)**         | `{1, 2, 3}`, `{'apple', 'banana'}` | Koleksi elemen **unik** (tidak ada duplikat), **tidak berurutan** |
| **Dictionary (`dict`)** | `{'name': 'John', 'age': 30}`      | Koleksi pasangan **key-value**                                    |

---

## Tipe Data Lain yang Penting

| Tipe Data                     | Contoh                | Penjelasan                              |
| :---------------------------- | :-------------------- | :-------------------------------------- |
| **NoneType (`None`)**         | `None`                | Menunjukkan "tidak ada nilai"           |
| **Bytes (`bytes`)**           | `b'hello'`            | Untuk data biner (binary data)          |
| **Bytearray (`bytearray`)**   | `bytearray(b'hello')` | Seperti `bytes`, tetapi dapat diubah    |
| **MemoryView (`memoryview`)** | `memoryview(b'abc')`  | Mengakses data buffer tanpa menyalinnya |

---

## Cara Mengecek Tipe Data

Kamu bisa menggunakan fungsi `type()`:

```python
a = 10
print(type(a))  # Output: <class 'int'>

b = [1, 2, 3]
print(type(b))  # Output: <class 'list'>
```

Kalau mau memeriksa tipe sambil memastikan tipe data yang diinginkan, gunakan `isinstance()`:

```python
if isinstance(a, int):
    print("a adalah integer")
```

---

## Konversi Antar Tipe Data

Python sangat fleksibel dalam mengubah atau Casting Tipe Data :

```python
# Int ke Float
a = 5
b = float(a)  # b = 5.0

# String ke Int
s = "123"
i = int(s)  # i = 123

# List ke Set
l = [1, 2, 2, 3]
s = set(l)  # s = {1, 2, 3}
```
