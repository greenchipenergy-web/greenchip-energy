# 📦 Deployment Guide - Hostinger Shared Hosting

This project uses **React frontend + PHP backend** - works perfectly on Hostinger!

---

## 🚀 Step 1: Build Your Project

```bash
npm run build
```

This creates a `dist/` folder with all optimized files.

---

## 📁 Step 2: Upload to Hostinger

### Via File Manager (Easy)

1. Login to **Hostinger Dashboard** → **File Manager**
2. Navigate to `/public_html/` folder
3. Upload everything from your `dist/` folder to `public_html/`
4. Upload the `public/api/` folder to your hosting (keep the structure)

### Final Structure Should Be:
```
public_html/
├── index.html              (from dist/)
├── assets/                 (from dist/assets/)
├── api/
│   ├── send-lead.php
│   └── send-contact.php
└── images/                 (from public/images/)
```

### Via FTP (Recommended for larger files)

1. Download FileZilla or WinSCP
2. Connect to your Hostinger FTP:
   - Host: `ftp.your-domain.com`
   - Username: Your FTP username
   - Password: Your FTP password
3. Drag `dist/` contents to `public_html/`
4. Drag `public/api/` folder to `public_html/`

---

## ⚙️ Step 3: Configure Email on Hostinger

The PHP files use your hosting account's email setup. No additional config needed!

**To verify email is working:**
1. Go to **Hostinger Dashboard** → **Email**
2. Make sure you have email accounts set up
3. The forms will send to: `sudeep@crawlerstechnologies.com`
4. Users get confirmation emails automatically ✓

---

## ✅ Step 4: Test It!

1. Visit `https://your-domain.com`
2. Click "Request a Quote" or "Contact Us"
3. Fill out form and submit
4. Check email (arrives in seconds!)

---

## 🔒 Important Security Notes

✅ **Email credentials are NOT in the code**
- They're part of your Hostinger hosting account
- Each hosting account can send emails automatically
- No passwords or API keys needed

✅ **PHP handles email sending securely**
- All input is sanitized
- Email addresses validated
- CORS headers prevent unauthorized access

---

## 🐛 Troubleshooting

### Forms not sending?
**Problem:** "Failed to send: Failed to send email"

**Solution:**
1. Check Hostinger email is configured
2. Verify `public/api/` folder exists with both PHP files
3. Check file permissions are readable (644)
4. Contact Hostinger support - they can enable mail() function

### Getting 404 errors?

**Problem:** "Failed to send: 404"

**Solution:**
1. Verify API files uploaded to correct location
2. Check path: `https://your-domain.com/api/send-lead.php`
3. Make sure no `.htaccess` blocking PHP files

### CORS errors in browser?

**Problem:** "Cross-Origin Request Blocked"

**Solution:** 
- The PHP files already handle CORS headers
- Make sure you're accessing via `https://your-domain.com`
- Not via IP address or `http://`

---

## 📝 File Structure After Upload

```
your-domain.com/
├── index.html
├── assets/
│   ├── index-xxxxx.css
│   └── index-xxxxx.js
├── images/
│   └── (all image files)
├── api/
│   ├── send-lead.php      ← Lead form emails
│   └── send-contact.php   ← Contact form emails
└── (other static files)
```

---

## 🔄 Making Changes

After making changes to your React code:

1. **Edit files locally**
2. **Rebuild:** `npm run build`
3. **Upload new `dist/` contents to Hostinger**
4. **Keep `public/api/` folder as-is** (PHP files don't change)

---

## 📧 Email Configuration for Different Providers

**If you want to use your own SMTP server instead of Hostinger's mail():**

Edit the PHP files to use SMTP instead (advanced):
```php
// Alternative: SMTP configuration
$smtp_server = 'smtp.gmail.com';
$smtp_port = 587;
$smtp_user = 'your-email@gmail.com';
$smtp_pass = 'your-app-password';
```

(Contact support if you need help with this)

---

## ✨ Done!

Your website is now live with working email forms! 🎉

Questions? Check:
- Hostinger Help Center: [hostinger.com/help](https://hostinger.com/help)
- Our Code: Check `public/api/*.php` files
