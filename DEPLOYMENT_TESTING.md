# Portfolio Deployment & Testing Guide

## ✅ What's Done

- ✅ All 8 HTML pages upgraded with responsive design, SEO, and animations
- ✅ CSS restructured with mobile hamburger menu, skill bar animations, badging system
- ✅ Email contact form setup (awaiting EmailJS credentials)
- ✅ Assets folder created (needs your Resume PDF)
- ✅ All changes committed to GitHub

---

## 🚀 Deploy to GitHub Pages

Your repo is already pushed to GitHub. Now enable GitHub Pages:

### Step 1: Go to GitHub Repository Settings

1. Open [github.com/Pushkar1306/Portfolio](https://github.com/Pushkar1306/Portfolio)
2. Click **Settings** (top right)
3. Scroll left sidebar → click **Pages**

### Step 2: Enable GitHub Pages

1. Under "Build and deployment"
2. Source: Select **Deploy from a branch**
3. Branch: Select **main** 
4. Folder: Select **/(root)**
5. Click **Save**

### Step 3: Wait for Deployment

- GitHub will build your site (takes 1-2 minutes)
- Once complete, you'll see:
  ```
  ✅ Your site is published at https://pushkar1306.github.io/Portfolio/
  ```

### Step 4: Verify Live Site

Visit: **https://pushkar1306.github.io/Portfolio/**

---

## 🧪 Testing Checklist

### Before EmailJS Setup
- [ ] Home page loads with avatar "PC" placeholder
- [ ] Navigation menu visible and clickable
- [ ] All page links work (Home, About, Skills, Projects, Education, Contact)
- [ ] Resume link (will 404 until you add PDF)

### Responsive Design Testing
1. Open portfolio on your phone OR
2. In browser, press **F12** (DevTools) → Click device icon → Select "iPhone 12"
3. Test:
   - [ ] Hamburger menu ☰ appears on mobile (<768px)
   - [ ] Click hamburger → menu opens/closes
   - [ ] Layout stacks vertically on mobile
   - [ ] Text readable on small screens
   - [ ] Images responsive (avatar, project cards)

### Skills Page Animation Testing
1. Go to Skills page
2. [ ] Watch skill bars animate from 0% → full width
3. [ ] Bars stagger in sequence (not all at once)
4. Expected: "HTML & CSS" starts first, "Tools" finishes last

### Project Badges Testing
1. Go to Projects page
2. [ ] See tech badges (JavaScript, CSS, React, etc.)
3. [ ] Badges are pill-shaped with teal color
4. [ ] Live Demo & GitHub links both present

### Contact Form Testing
1. Go to Contact page
2. Fill out form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Message: "Testing form"
3. Click "Send"
4. [ ] Button shows "Sending…"
5. [ ] After form sends → button shows "Sent ✓"
6. [ ] Check your email for the message

---

## 📋 Before Going Live - Final Checklist

- [ ] Add your actual resume to `assets/Pushkar_Resume.pdf`
- [ ] Complete EmailJS setup (see `EMAILJS_SETUP.md`)
- [ ] Test all links work (especially Resume, GitHub links)
- [ ] Test contact form on live site
- [ ] Check site on phone/tablet (mobile responsiveness)
- [ ] Test hamburger menu functionality

---

## 🔧 Local Testing Before Deploy

To test locally before pushing to GitHub:

```bash
# On Windows, just open files in your default browser
start home.html

# Or use Python's built-in server (if installed)
python -m http.server 8000
# Then visit: http://localhost:8000
```

---

## 📝 Adding Your Resume

1. Get your resume PDF
2. Rename it exactly to: `Pushkar_Resume.pdf`
3. Place in: `Portfolio/assets/` folder
4. Commit & push to GitHub:
   ```bash
   git add assets/Pushkar_Resume.pdf
   git commit -m "Add resume PDF"
   git push origin main
   ```
5. Resume link will now work

---

## 🐛 Troubleshooting

**Contact form shows "Failed"?**
- Make sure EmailJS credentials are filled in `contact.html`
- Check browser console (F12) for error messages

**Hamburger menu doesn't appear on mobile?**
- Check DevTools is set to mobile view (<768px)
- Refresh page (Ctrl+Shift+R for hard refresh)

**Skills bars not animating?**
- Check portfolio.css was updated (search for `skillBarGrow`)
- Refresh page with Ctrl+Shift+R

**Resume link shows 404?**
- File is missing from `assets/` folder
- Filename must be exactly: `Pushkar_Resume.pdf` (case-sensitive)

**Navigation highlights wrong page?**
- This works based on filename matching `home.html`, `about.html`, etc.
- Make sure you're using exact filenames

---

## 📊 Site Performance Metrics

After deploy, check performance at:
- [PageSpeed Insights](https://pagespeed.web.dev/) → Paste your GitHub Pages URL
- Test on mobile & desktop
- Look for optimization suggestions

---

## 🎯 Next Steps (Optional Enhancements)

1. Add project live demo links (update `#` placeholders in projects.html)
2. Add custom domain (GitHub Pages → custom domain setting)
3. Add Google Analytics (track visitor stats)
4. Add more projects as you build them
5. Update resume when you complete coursework/internships

---

**Site is live!** 🎉

Share your portfolio: **https://pushkar1306.github.io/Portfolio/**
