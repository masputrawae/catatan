---
title: JavaScript - Naming Rules & Best Practices
date: 2025-05-04T22:28:12+07:00
tags:
  - javascript
  - pemrograman
  - naming_rulers
categories:
  - JavaScript
  - Pemrograman
---

Apa itu Identifier?
Identifier = Nama untuk variabel, fungsi, class, parameter, dll.

Contoh:

```js
let username = "John Doe";
function sayHello() {}
class UserAccount {}
```

---

## Aturan Dasar Penamaan Identifier (Syntax Valid)

- Tidak boleh diawali dengan angka

  ```js
  let 1user; // Error
  ```

- Tidak boleh mengandung spasi atau simbol selain `_` dan `$`

  ```js
  let user-name; // Error
  ```
  
- Tidak boleh menggunakan kata kunci JavaScript

  ```js
  let function = "data"; // Error
  ```

Boleh menggunakan:
  - Huruf (`a-z`, `A-Z`)
  - Angka (setelah karakter pertama)
  - Underscore (`_`) atau Dollar Sign (`$`)
  - Huruf besar & kecil berbeda (case-sensitive)

Contoh yang valid:

```js
let _privateVar;
let $dollarAmount;
let userName1;
```

---

## Konvensi Penamaan (Best Practices)

| Tipe      | Gaya Penamaan | Contoh            |
| --------- | ------------- | ----------------- |
| Variabel  | `camelCase`   | `userName`        |
| Fungsi    | `camelCase`   | `getUserData()`   |
| Class     | `PascalCase`  | `UserAccount`     |
| Konstanta | `UPPER_SNAKE` | `MAX_RETRY_LIMIT` |

---

## Tips Penamaan Baik

- Gunakan nama yang **jelas dan deskriptif**

  ```js
  let isLoggedIn = true;
  ```

- Gunakan **kata kerja** untuk fungsi

  ```js
  function fetchData() {}
  ```

- Hindari singkatan berlebihan

  ```js
  let usrNm = "John Doe"; // Kurang jelas
  ```

---

## Reserved Words (Tidak Boleh Dipakai Sebagai Identifier)

Beberapa contoh:

```
let, const, var, if, else, while, for, function, return, class,
try, catch, new, this, typeof, switch, case, default, delete,
await, async, etc.
```

---

## Catatan Penting

- JavaScript **case-sensitive** → `user`, `User`, dan `USER` berbeda
- Gunakan `let` atau `const`, **hindari `var`**
- Hindari pencampuran gaya seperti `snake_case` atau `kebab-case` dalam JavaScript

---

## Ringkasan Cepat

- Gunakan `camelCase` untuk variabel dan fungsi
- Gunakan `PascalCase` untuk class dan constructor
- Gunakan `UPPER_SNAKE_CASE` untuk konstanta global
- Jangan gunakan simbol, angka di depan, atau keyword JavaScript
- Pilih nama yang menjelaskan isi atau tujuan
