/**
 * SIMKLINIK - Konfigurasi Endpoint Backend
 * Ubah nilai GAS_API_URL di file ini apabila membuat Deployment ID baru di Google Apps Script.
 */
const APP_CONFIG = {
  GAS_API_URL: 'https://script.google.com/macros/s/AKfycbwvf5Pacl023fHuFVdnZfBnaMjqXACci4U6D5ChVbMF4Ki-I91KGzfuoN8tlPf6lv9W/exec',
  APP_NAME: 'SIMKLINIK',
  VERSION: '1.0.0'
};

// Kompatibilitas variabel global untuk index.html
const GAS_API_URL = APP_CONFIG.GAS_API_URL;