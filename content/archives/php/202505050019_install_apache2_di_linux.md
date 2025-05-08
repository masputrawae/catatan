---
title: Instalasi Apache2 Di Linux
date: 2025-05-05T00:19:58+07:00
tags:
  - apache
  - linux
  - web_server
  - server
categories:
  - Apache
  - Server
---

## Update Package Manager 

```bash
sudo apt-get update && sudo apt-get upgrade
```

## Install Apache 

```bash
sudo apt install apache2
```
	
setelah selesai harusnya atau biasanya Apache akan berjalan secara otomatis, bisa cek dengan 
	
```bash
sudo systemctl status apache2
```

Kalau sudah jalan, kamu akan lihat statusnya “active (running)”. harusnya seperti di bawah ini:

```bash
└─$ sudo systemctl status apache2
● apache2.service - The Apache HTTP Server
     Loaded: loaded (/usr/lib/systemd/system/apache2.service; enabled; preset: >
     Active: active (running) since Mon 2024-11-18 08:02:39 WIB; 9min ago
       Docs: https://httpd.apache.org/docs/2.4/
   Main PID: 8648 (apache2)
      Tasks: 55 (limit: 18806)
     Memory: 5.9M (peak: 6.8M)
        CPU: 50ms
     CGroup: /system.slice/apache2.service
             ├─8648 /usr/sbin/apache2 -k start
             ├─8650 /usr/sbin/apache2 -k start
             └─8651 /usr/sbin/apache2 -k start
```

## Coba akses di browser

`http://localhost/` Kalau instalasi berhasil, kamu akan melihat halaman “Apache2 Ubuntu Default Page”. Artinya, Apache sudah berjalan dengan baik!

## Konfigurasi Firewall (Opsional)

Kalau kamu pakai firewall, kamu bisa buka akses untuk Apache dengan perintah:

```bash
sudo ufw allow 'Apache'
```