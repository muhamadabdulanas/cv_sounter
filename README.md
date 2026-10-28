# Website Company Profile CV

Website company profile statis menggunakan HTML, CSS, JavaScript ES Modules, dan Vite. Tidak menggunakan database atau admin panel.

## 1. Persiapan
- Install Node.js versi LTS dari https://nodejs.org/
- Buka folder proyek di VS Code.
- Buka terminal VS Code: Terminal > New Terminal.

## 2. Jalankan di komputer
```bash
npm install
npm run dev
```
Buka alamat lokal yang tampil di terminal (biasanya http://localhost:5173).

## 3. Sebelum dipublikasikan
Buka `src/data/products.js`, lalu ubah:
- `company.name`: nama resmi CV.
- `company.email`: email yang aktif.
- `company.address`: alamat perusahaan.
- `company.about`: profil perusahaan.
- `whatsappNumber`: nomor WhatsApp aktif dengan format internasional, tanpa `+`, spasi, atau tanda hubung. Contoh format Indonesia: `6281234567890`.

Edit katalog di array `products` dalam file yang sama. Harga tidak ditampilkan karena sebaiknya diberikan berdasarkan penawaran dan ketersediaan. Portofolio website di halaman ini adalah konsep visual, bukan klaim proyek klien; ganti dengan proyek nyata jika sudah tersedia.

## 4. Build dan tes hasil build
```bash
npm run build
npm run preview
```
Vite akan membuat folder `dist`.

## 5. Deploy gratis ke Vercel
Cara termudah:
1. Buat akun di https://vercel.com/
2. Upload/push folder proyek ke repository GitHub.
3. Di Vercel pilih **Add New → Project**, lalu impor repository tersebut.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Klik **Deploy**.

Alternatif: install Vercel CLI (`npm i -g vercel`), login dengan `vercel login`, lalu dari folder proyek jalankan `vercel`. Untuk deployment produksi jalankan `vercel --prod`.

## Catatan
- Website ini frontend statis. Form penawaran membuka WhatsApp dengan pesan yang sudah disusun; data tidak disimpan di server.
- Ganti nomor WhatsApp placeholder sebelum membagikan website.
- Foto produk dapat ditambahkan nanti di folder `public/images`; katalog awal memakai ilustrasi tipografi/CSS sehingga tetap tampil tanpa file gambar eksternal.
- Font Google membutuhkan koneksi internet; jika tidak tersedia, font cadangan tetap digunakan.
