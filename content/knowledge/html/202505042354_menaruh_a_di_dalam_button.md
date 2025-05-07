---
title: HTML - Menaruh a di dalam button
date: 2025-05-04T23:54:21+07:00
tags:
  - html
  - button
  - link
categories:
  - HTML
pinned: true
image: "https://placehold.co/1080x1080"
---

aku bertanya tentang bagaimana jika menggunakan `<a>` di dalam elemen `button` _apakah bisa dilakukan?_, _apakah ini umum?_

## Konteks

awalnya berencana membuat tombol **Collapsible** tetap untuk teks nya bisa di klik untuk mengarahkan ke halaman lain, cuma aku berfikir daripada menulis seperti ini:

```html
<div>
	<a href="/halaman/"> Halaman </a>
	<button id="collapse-button">Button Collapse</button>
</div>
```

Bukanya lebih ringkas seperti ini:

```html
<button>
	<a href="/halaman/"> Halaman </a>
	Button Collapse
</button>
```

## Jawaban

jawaban sementara yang aku temui

- **Secara teknis**
	- Bisa dilakukan
	- Memungkinkan untuk dibuat
	- Dan boleh boleh saja
	- Browser akan merender nya dengan benar
- **Tetapi**
	- Tidak mengikuti praktik terbaik HTML
	- Tidak umum
	- Tidak valid secara semantik
	- Mengacaukan aksesibilitas
	- Kemungkinan masalah
	- Sulit difahami karena cara tersebut tidak umum
	- Perilaku tidak konsisten

## Kesimpulan

Pendekatan cara pertama lebih baik dan sangat disarankan daripada memasukkan `<a>` kedalam `<Button>`
