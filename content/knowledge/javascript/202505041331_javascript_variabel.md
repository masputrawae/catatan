---
title: JavaScript - Variabel
date: 2025-05-04T13:31:09+07:00
tags:
  - javascript
  - pemrograman
  - variabel
categories:
  - JavaScript
  - Pemrograman
---

Seperti namanya, variabel adalah elemen umum dan wajib dalam bahasa pemrograman. Variabel berfungsi untuk menyimpan data agar dapat digunakan berulang kali tanpa perlu menuliskan ulang nilainya.

## Cara Menulis Variabel

```js
let nama = "John Doe"
let usia = 18
let isActive = true

console.log(nama) // Tampilkan log nama
```

Di JavaScript, variabel dapat ditulis menggunakan `let`, `const`, atau `var`. Namun, penggunaan `var` sudah tidak direkomendasikan karena merupakan cara lama yang rentan terhadap hoisting dan bug, sehingga menyulitkan proses debugging. Oleh karena itu, disarankan menggunakan `let` dan `const`.

- `var` adalah cara lama.
- `let` adalah cara modern yang lebih fleksibel dan aman.
- `const` digunakan untuk nilai tetap yang tidak bisa diubah setelah dideklarasikan.

