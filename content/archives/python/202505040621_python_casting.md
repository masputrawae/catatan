---
title: Python - Casting
date: 2025-05-04T06:21:57+07:00
tags:
  - python
  - pemrograman
  - casting
  - type_conversion
categories:
  - Python
  - Pemrograman
---

Casting atau dalam istilah lain, "type conversion" adalah proses mengubah tipe data dari satu bentuk ke bentuk lain. Misalnya, dari `int` (bilangan bulat) jadi `float` (bilangan desimal) atau `string` ke `int` dan sebaliknya

## Fungsi-fungsi Casting yang Umum di Python

| Fungsi    | Penjelasan          | Contoh                      |
| --------- | ------------------- | --------------------------- |
| `int()`   | Mengubah ke integer | `int(3.7)` hasilnya `3`     |
| `float()` | Mengubah ke float   | `float(5)` hasilnya `5.0`   |
| `str()`   | Mengubah ke string  | `str(123)` hasilnya `'123'` |
| `bool()`  | Mengubah ke boolean | `bool(0)` hasilnya `False`  |

## Contoh Penggunaan

### Integer

```python
data_int = 9
print("data: ", data_int, "tipe: ", type(data_int))

data_float = float(data_int)
print("data: ", data_float, "tipe: ", type(data_float))

data_str = str(data_int)
print("data: ", data_str, "tipe: ", type(data_str))

data_bool = bool(data_int) # Akan false jika nilai int = 0
print("data: ", data_bool, "tipe: ", type(data_bool))
```

### Float

```python
data_float = 9.0
print("data: ", data_float, "tipe: ", type(data_float))

data_int = int(data_float)
print("data: ", data_int, "tipe: ", type(data_int))

data_str = str(data_float)
print("data: ", data_str, "tipe: ", type(data_str))

data_bool = bool(data_float)
print("data: ", data_bool, "tipe: ", type(data_bool))
```

### String

```python
data_str = "10"
print("data: ", data_str, "tipe: ", type(data_str))

data_int = int(data_str)
print("data: ", data_int, "tipe: ", type(data_int))

data_float = float(data_str)
print("data: ", data_float, "tipe: ", type(data_float))

data_bool = bool(data_str)
print("data: ", data_bool, "tipe: ", type(data_bool))
```

### Boolean

```python
data_bool = False
print("data: ", data_bool, "tipe: ", type(data_bool))

data_int = int(data_bool)
print("data: ", data_int, "tipe: ", type(data_int))

data_float = float(data_bool)
print("data: ", data_float, "tipe: ", type(data_float))

data_str = str(data_bool)
print("data: ", data_str, "tipe: ", type(data_str))
```

## Kesalahan Umum Saat Casting

### Meng-cast string yang isinya bukan angka

  ```python
  int("abc")  # Akan error: ValueError
  ```

### Casting list/dictionary langsung ke int/float tanpa pemrosesan

  ```python
  int([1,2,3])  # Error: TypeError
  ```
  