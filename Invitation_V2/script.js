// Music Player for Wedding Invitation
const bgMusic = document.getElementById('bgMusic');
const splashScreen = document.getElementById('splashScreen');
const enterBtn = document.getElementById('enterBtn');
const mainContent = document.getElementById('mainContent');
const musicControl = document.getElementById('musicControl');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = musicToggle.querySelector('.music-icon');

// Set default volume
bgMusic.volume = 0.3; // 30% volume

let isPlaying = false;

// Function to start music
function startMusic() {
    bgMusic.load();
    
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('Music started successfully');
            isPlaying = true;
            updateMusicIcon();
        }).catch(error => {
            console.log('Music play error:', error);
            // Retry for iOS/Safari
            setTimeout(() => {
                bgMusic.play()
                    .then(() => {
                        isPlaying = true;
                        updateMusicIcon();
                    })
                    .catch(e => console.log('Retry failed:', e));
            }, 100);
        });
    }
}

// Function to toggle music
function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        isPlaying = false;
    } else {
        bgMusic.play()
            .then(() => {
                isPlaying = true;
            })
            .catch(e => console.log('Play error:', e));
    }
    updateMusicIcon();
}

// Update music icon
function updateMusicIcon() {
    if (isPlaying) {
        musicIcon.classList.add('playing');
        musicIcon.textContent = '♪';
    } else {
        musicIcon.classList.remove('playing');
        musicIcon.textContent = '⏸';
    }
}

// Function to show main content
function showMainContent() {
    splashScreen.style.opacity = '0';
    
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.classList.add('show');
        musicControl.classList.remove('hidden');
        
        // Initialize scroll animations
        initScrollAnimations();
    }, 800);
}

// Scroll Animation Observer
function initScrollAnimations() {
    const sections = document.querySelectorAll('.fade-in-section');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Enter button click handler
enterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startMusic();
    showMainContent();
});

// Enter button touch handler (for mobile)
enterBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startMusic();
    showMainContent();
}, { passive: false });

// Music toggle button
musicToggle.addEventListener('click', toggleMusic);

// Keyboard support (spacebar to toggle music)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && splashScreen.style.display === 'none') {
        e.preventDefault();
        toggleMusic();
    }
});

// Open Google Maps for venue location
function openMaps() {
    // Replace with actual coordinates or address of BALAIRONG SERI BANQUET HALL
    const address = encodeURIComponent('BALAIRONG SERI BANQUET HALL');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
}
