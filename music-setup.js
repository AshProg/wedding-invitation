// Background Music Setup
const bgMusic = document.getElementById('bgMusic');

// Set default volume (0.0 to 1.0)
bgMusic.volume = 0.3; // 30% volume - adjust as needed

// Autoplay music
bgMusic.play().catch(error => {
    console.log('Autoplay blocked by browser:', error);
});
