---
title: Python - Setup Awal
date: 2025-05-04T02:45:49+07:00
tags:
  - python
  - pemrograman
  - instalasi
categories:
  - Pemrograman
  - Python
---

Biasanya untuk beberapa distro Linux seperti Ubuntu, Python secara bawaan sudah terinstal. ngak begitu tahu untuk distro Linux lainnya, atau Os lain?.

## Cara Paling Mudah Instalasi

Untuk Linux (Debian dan keturunannya)

```bash
sudo apt update
sudo apt install python3
python3 --version

# Pip
sudo apt install python3-pip
```

Untuk CentOs/RHEL dan keturunannya

```bash
sudo yum install python3
sudo yum install python3-pip
```

Atau pakai dnf untuk versi terbaru 

```bash
sudo dnf install python3
sudo dnf install python3-pip
```

Untuk Fedora

```bash
sudo dnf install python3
sudo dnf install python3-pip
```

Untuk Arch Linux dan keturunannya

```bash
sudo pacman -S python
```

Atau manual bisa download di situs resmi [python](https://www.python.org/downloads/)