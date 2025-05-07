---
title: Linux - Text Editor
date: 2025-05-05T12:00:59+07:00
tags:
  - vim
  - nano
  - text_editor
  - linux
categories:
  - Linux
  - Pemrograman
image: "https://placehold.co/1080x512"
---

Text editor di Linux yang paling populer adalah **Vim** atau **Vi** (Vi sebenarnya merupakan versi ringan dari Vim yang menjadi bawaan di banyak sistem Linux). Menggunakan Vim memang agak sulit di awal, tetapi tetap bisa dipelajari. Sebagai alternatif, ada **Nano**, yang lebih mudah digunakan. Namun, Nano tidak secanggih dan sefleksibel Vim. Meski begitu, Nano sudah cukup untuk kebutuhan mengetik ringan sehari-hari.

> [!info] Penting: Daripada restart PC 😅  
>  
> Terlanjur buka Vim dan nggak bisa keluar? 😅  
> Cukup ketik:  
> 
> - `:q!` → keluar tanpa menyimpan  
> - `:q` → keluar (jika tidak ada perubahan)  
> - `:wq` → simpan dan keluar  
>  
> *Itu pengalaman pribadi, hehe...* 😅

Yang penting sekarang sudah tahu cara keluar 😄  
Shortcut lengkap bisa dilihat di: [Kumpulan Shortcut Vim](../tools/202505050004_shortcut_vim.md)

---

## Praktik Menggunakan Vim

Buat file baru atau buka file yang sudah ada dengan:

```bash
vim nama_file.txt
```

atau `vi`

```bash
vi nama_file.txt
```

Masuk ke mode insert dengan menekan `i` hingga muncul `-- INSERT --`, yang artinya kamu sudah bisa mulai mengetik. Beberapa mode di Vim:

- `i` → `-- INSERT --`
- `v` → `-- VISUAL --`
- `V` → `-- VISUAL LINE --`
- <kbd>Esc</kbd> → Mode normal
- <kbd>Ctrl</kbd> + <kbd>v</kbd> → `-- VISUAL BLOCK --`
    
Untuk menyimpan dan keluar:

1. Tekan `<Esc>` untuk kembali ke mode normal
2. Ketik:
    - `:w` → simpan
    - `:q` → keluar
    - `:wq` → simpan dan keluar
    - `:q!` → Keluar tanpa menyimpan
        

Shortcut lainnya: [Kumpulan Shortcut Vim](../tools/202505050004_shortcut_vim.md)

---

## Praktik Menggunakan Nano

Jika belum terpasang, install terlebih dahulu (pada beberapa distro sudah terpasang secara default):

```bash
sudo apt install nano
```

Buat atau buka file dengan:

```bash
nano nama_file.txt
```

Kamu langsung bisa mengetik tanpa perlu masuk mode apa pun. Di bagian bawah terminal sudah ada panduan shortcut. Untuk menyimpan dan keluar:

-  <kbd>Ctrl</kbd> + <kbd>O</kbd> lalu tekan <kbd>Enter</kbd> untuk menyimpan
-  <kbd>Ctrl</kbd> + <kbd>X</kbd> untuk keluar