// Background Music Setup
const bgMusic = document.getElementById('bgMusic');
const splashScreen = document.getElementById('splashScreen');
const enterBtn = document.getElementById('enterBtn');

// Set default volume (0.0 to 1.0)
bgMusic.volume = 0.3; // 30% volume - adjust as needed

// Function to start music
function startMusic() {
    // Load the audio first (important for mobile)
    bgMusic.load();
    
    // Attempt to play
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Music started successfully');
        }).catch(error => {
            console.log('Music play error:', error);
            // Retry once for iOS
            setTimeout(() => {
                bgMusic.play().catch(e => console.log('Retry failed:', e));
            }, 100);
        });
    }
}

// Function to hide splash screen
function hideSplash() {
    // Fade out splash screen
    splashScreen.style.opacity = '0';
    
    // Remove splash screen after fade
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 800);
}

// Enter button click handler (for desktop)
enterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startMusic();
    hideSplash();
});

// Enter button touch handler (for mobile)
enterBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startMusic();
    hideSplash();
}, { passive: false });
