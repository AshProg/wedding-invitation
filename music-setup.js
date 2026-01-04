// Background Music Setup
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// Set default volume (0.0 to 1.0)
bgMusic.volume = 0.3; // 30% volume - adjust as needed

// Function to start music
function startMusic() {
    bgMusic.play().then(() => {
        console.log('Music playing');
    }).catch(error => {
        console.log('Autoplay prevented, will play on first interaction:', error);
    });
}

// Function to toggle mute/unmute
function toggleMute() {
    if (bgMusic.muted) {
        bgMusic.muted = false;
        musicToggle.textContent = '🔊';
        musicToggle.classList.add('playing');
    } else {
        bgMusic.muted = true;
        musicToggle.textContent = '🔇';
        musicToggle.classList.remove('playing');
    }
}

// Add click event to mute toggle button
musicToggle.addEventListener('click', toggleMute);

// Autoplay attempts
// Attempt 1: On page load
window.addEventListener('load', () => {
    startMusic();
});

// Attempt 2: On any user interaction (if autoplay was blocked)
function handleFirstInteraction() {
    if (bgMusic.paused) {
        startMusic();
    }
}

document.addEventListener('click', handleFirstInteraction, { once: true });
document.addEventListener('scroll', handleFirstInteraction, { once: true });
document.addEventListener('touchstart', handleFirstInteraction, { once: true });
document.addEventListener('keydown', handleFirstInteraction, { once: true });

// Attempt 3: Try playing after a short delay
setTimeout(() => {
    if (bgMusic.paused) {
        startMusic();
    }
}, 100);
