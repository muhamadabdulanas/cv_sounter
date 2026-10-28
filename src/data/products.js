// Ganti data perusahaan dan nomor WhatsApp di file ini sebelum website dipublikasikan.
// Nomor WhatsApp gunakan format internasional tanpa +, spasi, atau tanda hubung.
// Contoh Indonesia: 6281234567890
export const company = {
  name: 'CV.SOUNTER ONE TECH',
  email: 'email@perusahaananda.com',
  address: 'Alamat perusahaan Anda',
  about: 'Kami adalah mitra pengadaan dan teknologi yang berfokus pada penyediaan perlengkapan sekolah, solusi jaringan, perangkat elektronik, serta pengembangan website. Kami mengutamakan komunikasi yang jelas, solusi sesuai kebutuhan, dan layanan yang profesional.'
};

export const whatsappNumber = '6281234567890'; // WA placeholder — WAJIB diganti

export const products = [
  { name: 'Paket Alat Tulis Sekolah', category: 'ATK', description: 'Perlengkapan belajar dan administrasi untuk kebutuhan harian.', art: 'stationery', artLabel: 'SCHOOL SUPPLIES', symbol: '✎' },
  { name: 'Kertas & Perlengkapan Kantor', category: 'ATK', description: 'Kertas, map, ordner, tinta, dan kebutuhan administrasi.', art: 'paper', artLabel: 'OFFICE ESSENTIALS', symbol: '▤' },
  { name: 'Router WiFi', category: 'Jaringan', description: 'Perangkat jaringan untuk koneksi rumah, kantor, dan sekolah.', art: 'router', artLabel: 'NETWORK DEVICE', symbol: '⌁' },
  { name: 'Access Point', category: 'Jaringan', description: 'Perluasan jangkauan WiFi untuk ruang kelas dan area kerja.', art: 'accesspoint', artLabel: 'WIRELESS NETWORK', symbol: '◉' },
  { name: 'Laptop & Komputer', category: 'Elektronik', description: 'Perangkat komputasi untuk pembelajaran dan administrasi.', art: 'laptop', artLabel: 'COMPUTING', symbol: '▱' },
  { name: 'Printer & Proyektor', category: 'Elektronik', description: 'Perangkat cetak dan presentasi untuk kegiatan sekolah.', art: 'printer', artLabel: 'CLASSROOM TECH', symbol: '▣' }
];
