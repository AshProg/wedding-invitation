// Countdown Timer
function updateCountdown() {
    // Set your wedding date here (Year, Month-1, Day, Hour, Minute)
    const weddingDate = new Date(2026, 11, 31, 10, 0, 0).getTime();
    
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update the countdown display
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<h3>The Wedding Day is Here! 🎉</h3>';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvpForm');
const formStatus = document.getElementById('formStatus');

rsvpForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(rsvpForm);
    
    try {
        // Show loading state
        const submitBtn = rsvpForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Submit to Formspree (or your chosen service)
        const response = await fetch(rsvpForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formStatus.textContent = '✓ Thank you! Your RSVP has been received.';
            formStatus.className = 'form-status success';
            rsvpForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    } catch (error) {
        formStatus.textContent = '✗ Sorry, there was an error. Please try again or contact us directly.';
        formStatus.className = 'form-status error';
        
        const submitBtn = rsvpForm.querySelector('.btn-submit');
        submitBtn.textContent = 'Send RSVP';
        submitBtn.disabled = false;
    }
    
    // Hide status message after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Add entrance animation to cards
const cards = document.querySelectorAll('.event-card');
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});
