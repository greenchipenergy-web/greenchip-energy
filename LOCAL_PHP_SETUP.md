# 🎯 Local Development with PHP

How to test email functionality locally before uploading to Hostinger.

---

## Option 1: PHP Built-in Server (Simplest)

### Step 1: Run PHP Server

In project root directory:

```bash
php -S localhost:8000
```

Your site will be at: `http://localhost:8000`

### Step 2: Run React Frontend (different terminal)

```bash
npm run dev
```

This will be on: `http://localhost:5173` (or similar)

### Step 3: Update API URLs for Local Dev

**For local testing, update React components:**

In `src/components/LeadForm.jsx`:
```javascript
// For local dev: use PHP server
const API_URL = 'http://localhost:8000/api/send-lead.php'

// For production: remove the domain
// const API_URL = '/api/send-lead.php'
```

Same for `src/pages/Other.jsx`:
```javascript
// For local dev:
const CONTACT_API = 'http://localhost:8000/api/send-contact.php'

// For production:
// const CONTACT_API = '/api/send-contact.php'
```

### Step 4: Test Forms

1. Go to `http://localhost:5173`
2. Submit a form
3. Check your email!

---

## Option 2: Using Vite Dev Server (Recommended)

Vite can proxy API requests to PHP:

Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})
```

Then run both:
```bash
# Terminal 1: PHP server
php -S localhost:8000

# Terminal 2: React dev (with proxy)
npm run dev
```

React will proxy `/api/` calls to PHP automatically!

---

## Troubleshooting Local Dev

### "Emails not sending"

**Check:**
1. PHP mail() function works on your system
2. PHP server is running (`php -S localhost:8000`)
3. API files exist in `public/api/`

### "CORS Error"

**Solution:** Update API URLs to match your PHP server:
```javascript
const API_URL = 'http://localhost:8000/api/send-lead.php'
```

### "Cannot find module nodemailer"

**This is fine!** You don't need Node.js dependencies for local PHP testing:
1. Delete `server.js` (not needed)
2. Delete Node dependencies from package.json (optional)
3. Just use PHP server instead

---

## Quick Setup Checklist

- [ ] Have PHP installed (`php -v` to check)
- [ ] API files in `public/api/send-*.php`
- [ ] Run `php -S localhost:8000`
- [ ] Run `npm run dev` in another terminal
- [ ] Test forms at `http://localhost:5173`
- [ ] Check emails arrived ✓

---

## Production: Build & Upload

Once happy with local testing:

```bash
# Build React
npm run build

# Upload dist/ and public/api/ to Hostinger
# See HOSTINGER_DEPLOYMENT.md for details
```

---

That's it! Happy testing! 🚀
