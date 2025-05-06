---
title: JavaScript - Tipe Data
date: 2025-05-04T14:47:09+07:00
tags:
  - javascript
  - pemrograman
  - tipe_data
  - variabel
categories:
  - JavaScript
  - Pemrograman
---

Tipe data adalah jenis nilai yang bisa disimpan dalam variabel. Misalnya:

```js
let nama = "Putra"; // String 
let umur = 21;      // Number
```

JavaScript termasuk bahasa **dynamically typed**, artinya kamu tidak perlu menyebutkan tipe data saat mendeklarasikan variabel — JavaScript akan menentukannya secara otomatis berdasarkan nilainya.

Ada dua Kategori Utama yaitu

## Primitive Types (Tipe Data Primitif)

tipe data dasar dan **immuntable** (tidak bisa di ubah nilainya langsung)

1. String - urutan karakter (teks)
2. Number - angka (integer atau float)
3. BigInt - angka sangat besar
4. Bolean - false or true
5. Undefined - nilai default variabel yang belum diinisialisasi
6. Null - nilai kosong
7. Symbol - tipe unik (untuk identitas unik)

## Non-Primitive / Reference Types

Tipe data kompleks yang mereferensikan alamat di memori.

1. Object - koleksi properti key-value
2. Array - kumpulan nilai yang diindeks
3. Function - objek yang bisa dipanggil ulang
4. Date, RegExp, Map, Set, dll - built-in object spesial

## Penjelasan dan Contoh

### String

```js
let nama = "John Doe";

console.log(typeof nama); // string
```

### Number

```js
let umur = 21;
let suhu - 36.5;

console.log(typeof umur); // number
console.log(typeof suhu); // number
```

### BigInt

```js
let big = 123456789012345678901234567890n;

console.log(typeof big); // "bigint"
```

### Boolean

```js
let isBelajar = true;

console.log(typeof isBelajar); // boolean
```

### Undefined

```js
let data;

console.log(data); // undefined
console.log(typeof data); // undefined
```

### Null

```js
let kosong = null;

console.log(typeof kosong); // "object" (bug warisan di JS)
```

### Symbol

```js
let id = Symbol("id");

console.log(typeof id); // symbol
```

### Object

```js
let user = {
	nama: "John Doe"
	umur: 21
};

console.log(typeof user); // object
```

### Array (sebenarnya object juga)

```js
let angka = [1, 2, 3, 4];

console.log(typeof angka); // object
console.log(Array.isArray(angka)); // true
```

### Function

```js
function sapa() {
	console.log("Hello!");
}

console.log(typeof sapa); // function
```

## typeof Operator

cara untuk cek tipe data

```js
console.log(typeof "Halo"); // "string"
console.log(typeof 10); // "number"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (quirk di JS)
```

## Tips dan Trik

Gunakan `===` (struct equality) supaya tidak tertipu konversi tipe otomatis

```js
0 == "0"; // true
0 === "0"; // false
```

Pahami konversi otomatis JavaScript (type coercion)

```js
"5" + 1; // "51"
"5" - 1; // 4
true + 1; // 2
false + "a"; // "falsea"
```

Cek array dengan `Array.isArray()`

```js
typeof []; // "object"
Array.isArray([]); // true
```

## Tabel Ringkas

| Tipe Data | Contoh            | typeof      |
| --------- | ----------------- | ----------- |
| String    | `"Putra"`         | "string"    |
| Number    | `21`, `3.14`      | "number"    |
| BigInt    | `123n`            | "bigint"    |
| Boolean   | `true`, `false`   | "boolean"   |
| Undefined | `let x;`          | "undefined" |
| Null      | `null`            | "object" 🐞 |
| Symbol    | `Symbol("id")`    | "symbol"    |
| Object    | `{nama: "Putra"}` | "object"    |
| Array     | `[1,2,3]`         | "object"    |
| Function  | `function() {}`   | "function"  |
