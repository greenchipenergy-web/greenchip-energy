# 📧 Email Setup Guide - Direct Email Sending (No Third Party Services)

This project uses **Node.js + Nodemailer** to send emails directly - just like PHP! You only need your email address and app password.

## 🚀 Quick Setup (2 minutes)

### Step 1: Get Your App Password

**For Gmail:**
1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication (if not already)
3. Create App Password: Security > App passwords > Select "Mail" & "Windows Computer"
4. Copy the 16-character password

**For Outlook/Hotmail:**
1. Go to [account.microsoft.com/security](https://account.microsoft.com/security)
2. Create App Password
3. Copy it

**For Yahoo:**
1. Go to [login.yahoo.com/account/security](https://login.yahoo.com/account/security)
2. Generate App Password
3. Copy it

### Step 2: Add Credentials to .env

Edit `.env` file in project root:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=info@greenchipenergy.com
BACKEND_PORT=5000
```

### Step 3: Run the Server

Open terminal in project root and run:
```bash
node server.js
```

You'll see:
```
🚀 Email Server running on http://localhost:5000
📧 Using email: your-email@gmail.com
📬 Sending to: info@greenchipenergy.com
```

### Step 4: Run Frontend (in another terminal)

```bash
npm run dev
```

### Step 5: Test It!

1. Go to http://localhost:5173 (or your Vite port)
2. Submit a form (Lead Form or Contact Form)
3. Check your email - it should arrive in seconds!

---

## 📁 Files Created/Modified

- **`server.js`** - Node.js Express server with email endpoints
- **`.env`** - Your email credentials (NEVER commit this!)
- **`src/components/LeadForm.jsx`** - Updated to call backend API
- **`src/pages/Other.jsx`** - Contact form updated to call backend API
- **`package.json`** - Added `"server"` script

---

## 🔌 API Endpoints

### Lead Form Endpoint
```
POST http://localhost:5000/api/send-lead
```
Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "84648 84642",
  "location": "Hyderabad",
  "eb_bill": "5000",
  "customer_type": "Residential",
  "installation_type": "New Installation",
  "solution": "Rooftop Solar",
  "message": "Interested in solar"
}
```

### Contact Form Endpoint
```
POST http://localhost:5000/api/send-contact
```
Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "84648 84642",
  "subject": "Sales Inquiry",
  "message": "I want to know more"
}
```

---

## ⚙️ How It Works

1. **User submits form** → React component sends data to backend
2. **Backend receives data** → Node.js validates it
3. **Nodemailer sends 2 emails:**
   - ✉️ **To company** - Lead/contact details
   - ✉️ **To user** - Confirmation message
4. **User sees success message** ✓

---

## 🔐 Security Notes

- **`.env` file is in `.gitignore`** - credentials never pushed to GitHub
- **App passwords are safe** - they only work for email, not full account access
- **CORS enabled** - frontend on different port can call backend

---

## 🐛 Troubleshooting

**"Failed to send" error:**
- Check `.env` has correct EMAIL_USER and EMAIL_PASSWORD
- Make sure server is running on port 5000
- Check browser console for backend URL errors

**"Cannot GET /api/send-lead":**
- Server not running - run `node server.js`

**Emails not arriving:**
- Check spam/junk folder
- Gmail may block "less secure apps" - use App Password instead

**Port already in use:**
- Change `BACKEND_PORT=5000` in `.env` to a different port (e.g., 3001)

---

## 📝 Environment Variables

```env
EMAIL_USER         # Your email address
EMAIL_PASSWORD     # App password (NOT your regular password!)
EMAIL_TO          # Where to send submissions
BACKEND_PORT      # Server port (default: 5000)
```

---

## ✨ Features

✅ No third-party email services  
✅ Direct SMTP sending via Nodemailer  
✅ Auto-confirmation emails to users  
✅ Error handling & validation  
✅ Loading states & success messages  
✅ Works with Gmail, Outlook, Yahoo, etc.  

---

**That's it! Your email system is ready to go. 🚀**
