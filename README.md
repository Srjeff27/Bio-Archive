# 🧬 BIO-ARCHIVE: Synthetic DNA Storage Simulation

![Project Status](https://img.shields.io/badge/Status-Experimental-00ff41?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0.0-00f3ff?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)

> **"Where Digital Bits Meet Biological Bases."** > Sebuah simulasi konseptual penyimpanan data digital ke dalam genom tanaman hidup (*Nicotiana benthamiana*).

---

## 🖥️ Overview

**Bio-Archive** adalah antarmuka web interaktif yang mensimulasikan proses pengkodean data teks digital menjadi sekuens DNA sintetis. Proyek ini menggabungkan estetika *Cyberpunk/Sci-Fi* dengan konsep *Bio-Informatics* untuk memvisualisasikan masa depan penyimpanan data yang berkelanjutan ("Cold Storage").

Dibuat sebagai eksplorasi antarmuka antara Sistem Informasi dan Bioteknologi.

### 🌟 Key Features

* **Real-time Encoding:** Konversi instan dari Teks ASCII → Biner → Basa Nitrogen (A, C, G, T).
* **Cyber-Botanic UI:** Desain *Glassmorphism* dengan aksen neon reaktif dan tipografi teknikal.
* **Dynamic Visuals:** Latar belakang animasi partikel DNA berbasis HTML5 Canvas.
* **Eco-Metrics:** Perbandingan data statistik antara penyimpanan Hard Drive vs DNA (Densitas & Durabilitas).
* **Responsive Design:** Tampilan adaptif untuk Desktop dan Mobile.

---

## 🔧 Technical Architecture

### The Stack
| Tech | Description |
| :--- | :--- |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Struktur Semantik & Layout Grid |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | Glassmorphism, CSS Variables, Keyframe Animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | DOM Manipulation, Canvas Rendering, Logic Encoding |

### The Logic (Encoding Algorithm)
Sistem ini menggunakan pemetaan **2-bit** sederhana untuk simulasi:

1.  **Input:** String Teks (UTF-8).
2.  **Process 1:** Konversi ke Binary Stream (8-bit).
3.  **Process 2:** Mapping ke Basa Nukleotida:
    * `00` ➔ **Adenine (A)** 🟢
    * `01` ➔ **Cytosine (C)** 🔵
    * `10` ➔ **Guanine (G)** 🟠
    * `11` ➔ **Thymine (T)** 🔴

---

## 🚀 Getting Started

Proyek ini bersifat *client-side* sepenuhnya (Static Web), tidak memerlukan instalasi server atau dependensi Node.js.

### Cara Menjalankan
1.  **Clone** repository ini atau unduh sebagai ZIP.
2.  Pastikan struktur folder adalah sebagai berikut:
    ```text
    /bio-archive
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
    ```
3.  Buka file `index.html` menggunakan browser modern (Chrome, Firefox, Edge).
4.  *Optional:* Gunakan ekstensi "Live Server" di VS Code untuk pengalaman pengembangan terbaik.

---

## 📸 Screenshots & Interface

| **Dashboard Utama** | **Proses Encoding** |
| :---: | :---: |
| *Tampilan full dashboard dengan latar belakang animasi matrix.* | *Visualisasi pengetikan sekuens DNA secara real-time.* |
<img width="1795" height="937" alt="image" src="https://github.com/user-attachments/assets/5b862593-b3f6-4bb8-b497-cde6fcae1729" />

<img width="1471" height="948" alt="image" src="https://github.com/user-attachments/assets/19925a92-dc59-4298-a087-948076dc021c" />



---

## 📚 References & Inspiration

Konsep ilmiah di balik proyek ini didasarkan pada riset penyimpanan data DNA nyata:
* **Densitas:** Hingga 455 Exabytes per gram (teoritis).
* **Durabilitas:** DNA dapat bertahan ribuan tahun dalam kondisi fosil, tidak seperti HDD yang degradasi dalam 5-10 tahun.
* **Energi:** Menggunakan fotosintesis tanaman sebagai sumber daya pemeliharaan data (*Zero-energy maintenance*).

---

## 👥 Authors

Developed with 💻 & 🌱 by:

* **Jefri Hamid Jaya** - *System Engineer & Logic*
* **Sifra Poalusia** - *Bio-Concept & Research*

---

<div align="center">

**[ UNIB Cyber Security Community ]** *Exploring the intersection of Code and Life.*

</div>
