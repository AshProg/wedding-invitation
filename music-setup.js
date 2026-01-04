// Background Music Setup
const bgMusic = document.getElementById('bgMusic');
const splashScreen = document.getElementById('splashScreen');
const enterBtn = document.getElementById('enterBtn');

// Set default volume (0.0 to 1.0)
bgMusic.volume = 0.3; // 30% volume - adjust as needed

// Enter button click handler
enterBtn.addEventListener('click', () => {
    // Start music
    bgMusic.play().then(() => {
        console.log('Music started');
    }).catch(error => {
        console.log('Music play error:', error);
    });
    
    // Fade out splash screen
    splashScreen.style.opacity = '0';
    
    // Remove splash screen after fade
    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 800);
});
