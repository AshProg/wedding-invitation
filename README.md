# Digital Wedding Invitation Card 💒

A beautiful, responsive digital wedding invitation with RSVP functionality that can be hosted for free!

## ✨ Features

- 🎨 **Elegant Design** - Beautiful golden theme with smooth animations
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⏰ **Live Countdown** - Real-time countdown to your wedding day
- 📝 **RSVP Form** - Guests can RSVP directly through the website
- 🗺️ **Venue Details** - Complete wedding ceremony and reception information
- 💝 **Gift Registry** - Optional section for gift information
- 🌟 **Animations** - Smooth scroll effects and entrance animations

## 🚀 Quick Setup Guide

### Step 1: Customize Your Invitation

Open `index.html` and update the following:

1. **Couple Names** (Line 24-26):
   ```html
   <span class="bride-name">Your Bride Name</span>
   <span class="ampersand">&</span>
   <span class="groom-name">Your Groom Name</span>
   ```

2. **Wedding Date** (Line 31):
   ```html
   <p class="date-number">25 • 12 • 2026</p>
   ```

3. **Event Details** (Lines 54-75):
   - Update ceremony and reception times
   - Update venue names and addresses
   - Update map link

4. **Your Story** (Lines 42-48):
   - Personalize the story text

5. **Gift Registry Info** (Lines 172-177):
   - Update bank account details (if needed)

### Step 2: Configure Countdown Timer

Open `script.js` and update the wedding date (Line 3):
```javascript
const weddingDate = new Date(2026, 11, 31, 10, 0, 0).getTime();
// Format: (Year, Month-1, Day, Hour, Minute)
// Example: December 31, 2026 at 10:00 AM = new Date(2026, 11, 31, 10, 0, 0)
```

### Step 3: Setup RSVP Form (Choose One Option)

#### Option A: Formspree (Recommended - Easiest)

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint
5. In `index.html` (Line 125), replace `YOUR_FORM_ID`:
   ```html
   <form class="rsvp-form" id="rsvpForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

#### Option B: Web3Forms (Alternative Free Option)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Get your free access key
3. In `index.html`, update the form:
   ```html
   <form class="rsvp-form" id="rsvpForm" action="https://api.web3forms.com/submit" method="POST">
       <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
       <!-- rest of the form -->
   </form>
   ```

#### Option C: Google Forms (If you prefer)

1. Create a Google Form with matching fields
2. Get the form's embed code or action URL
3. Update the form accordingly

## 🌐 Free Hosting Options

### Option 1: GitHub Pages (Recommended)

1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository (name it: `wedding-invitation`)
3. Upload all files (index.html, styles.css, script.js)
4. Go to Settings → Pages
5. Select main branch and save
6. Your site will be live at: `https://yourusername.github.io/wedding-invitation`

**Step-by-step:**
```bash
# In your terminal/command prompt:
git init
git add .
git commit -m "Initial wedding invitation"
git branch -M main
git remote add origin https://github.com/yourusername/wedding-invitation.git
git push -u origin main
```

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your folder to deploy
4. Get instant custom domain: `yourname.netlify.app`
5. Can add custom domain later

### Option 3: Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Deploy automatically
5. Get URL: `yourname.vercel.app`

### Option 4: Render

1. Go to [render.com](https://render.com)
2. Create a free static site
3. Connect your GitHub repo
4. Auto-deploys on every update

## 📋 Files Included

- `index.html` - Main invitation page
- `styles.css` - All styling and animations
- `script.js` - Countdown timer and interactive features
- `README.md` - This setup guide

## 🎨 Customization Tips

### Change Colors

In `styles.css`, update the color variables (Lines 9-15):
```css
:root {
    --primary-color: #d4af37;  /* Gold */
    --secondary-color: #8b7355; /* Brown */
    --text-dark: #2c2c2c;
    --text-light: #666;
    --bg-light: #faf8f5;
    --white: #ffffff;
}
```

### Add Photos

To add couple photos, insert in `index.html`:
```html
<section class="photo-section">
    <div class="container">
        <img src="your-photo.jpg" alt="Couple Photo">
    </div>
</section>
```

### Add Music (Optional)

Add background music:
```html
<audio autoplay loop>
    <source src="wedding-song.mp3" type="audio/mpeg">
</audio>
```

## 📱 Sharing Your Invitation

Once hosted, share your invitation link via:
- WhatsApp
- Email
- Social Media
- QR Code (generate at [qr-code-generator.com](https://www.qr-code-generator.com))

## 🔧 Troubleshooting

**RSVP not working?**
- Check your Formspree form ID is correct
- Ensure you're using https:// not http://
- Check browser console for errors

**Countdown showing wrong time?**
- Verify date in script.js
- Remember: months are 0-indexed (January = 0, December = 11)

**Page not loading on mobile?**
- Clear browser cache
- Check all file names match exactly

## 💡 Tips

- Test your invitation on different devices before sharing
- Ask a friend to test the RSVP form
- Keep backup of guest responses
- Update content as needed (venue changes, etc.)

## 📧 Need Help?

If you encounter any issues:
1. Check this README carefully
2. Verify all customizations are correct
3. Test locally first (open index.html in browser)
4. Check hosting platform documentation

## 🎉 Congratulations!

Your digital wedding invitation is ready to share with your guests. May your special day be filled with joy and love! 💑

---

**Quick Checklist:**
- [ ] Updated couple names
- [ ] Updated wedding date and time
- [ ] Updated venue details
- [ ] Updated countdown timer date
- [ ] Set up RSVP form (Formspree/Web3Forms)
- [ ] Tested on mobile and desktop
- [ ] Deployed to hosting service
- [ ] Tested RSVP form submission
- [ ] Created QR code for easy sharing
- [ ] Ready to share with guests! 🎊
