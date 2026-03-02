self.addEventListener('install', (e) => {
    console.log('[Service Worker] Terinstal sayang!');
});

self.addEventListener('fetch', (e) => {
    // Biarkan kosong dulu, yang penting terdaftar biar muncul tombol Install
});