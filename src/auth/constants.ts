// Membuat konstanta jwtConstants yang berisi konfigurasi untuk JWT
export const jwtConstants = {
  
  // Membuat properti secret yang berisi kunci rahasia untuk mengenerate token JWT
  // Catatan: di produksi, sebaiknya menggunakan variabel environment untuk menyimpan kunci rahasia
  secret: 'secretKey', // Gunakan variabel environment di produksi
};