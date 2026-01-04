// Background Music Setup
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

// Function to play music
function playMusic() {
    bgMusic.play().then(() => {
        isPlaying = true;
        musicToggle.textContent = '🔊';
        musicToggle.classList.add('playing');
    }).catch(error => {
        console.log('Autoplay prevented by browser:', error);
        // Show message to user to click to play
        isPlaying = false;
    });
}

// Function to toggle music
function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔇';
        musicToggle.classList.remove('playing');
        isPlaying = false;
    } else {
        playMusic();
    }
}

// Add click event to toggle button
musicToggle.addEventListener('click', toggleMusic);

// Try to autoplay when page loads
// Note: Most browsers block autoplay until user interaction
window.addEventListener('load', () => {
    // Attempt autoplay (might be blocked by browser)
    playMusic();
});

// Play music on first user interaction (if autoplay was blocked)
let firstInteraction = true;
function handleFirstInteraction() {
    if (firstInteraction && !isPlaying) {
        playMusic();
        firstInteraction = false;
    }
}

// Add event listeners for first interaction
document.addEventListener('click', handleFirstInteraction, { once: true });
document.addEventListener('scroll', handleFirstInteraction, { once: true });
document.addEventListener('touchstart', handleFirstInteraction, { once: true });

// Set default volume (0.0 to 1.0)
bgMusic.volume = 0.3; // 30% volume - adjust as needed
