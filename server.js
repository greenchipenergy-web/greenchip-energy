import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || process.env.BACKEND_PORT || 5000

// Configure Nodemailer (just like PHP mail!)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service (outlook, yahoo, etc.)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // App password, NOT your regular password
  },
})

// Endpoint for Lead Form (Request a Quote)
app.post('/api/send-lead.php', async (req, res) => {
  try {
    const { name, email, phone, location, eb_bill, customer_type, installation_type, solution, message } = req.body

    // Validate required fields
    if (!name || !email || !solution) {
      return res.status(400).json({ error: 'Missing required fields: name, email, solution' })
    }

    // Email to company
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `🌞 New Lead: ${name} - ${solution}`,
      html: `
        <h2>New Lead Generation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Location:</strong> ${location || 'Not provided'}</p>
        <p><strong>Monthly EB Bill:</strong> ₹${eb_bill || 'Not provided'}</p>
        <p><strong>Customer Type:</strong> ${customer_type}</p>
        <p><strong>Installation Type:</strong> ${installation_type}</p>
        <p><strong>Solution:</strong> ${solution}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <hr/>
        <p><small>Reply to: ${email}</small></p>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Also send confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✅ We received your quote request - GreenChip Energy',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your solar quote request for <strong>${solution}</strong>.</p>
        <p>Our team will review your details and contact you within 24 hours.</p>
        <p>In the meantime, feel free to explore more about our solutions at <strong>greenchipenergy.com</strong></p>
        <p>Best regards,<br/>GreenChip Energy Team</p>
      `,
    })

    res.json({ success: true, message: 'Lead submitted successfully!' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Failed to send email: ' + error.message })
  }
})

// Endpoint for Contact Form
app.post('/api/send-contact.php', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' })
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `📧 Contact Form: ${subject || name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        <hr/>
        <p><small>Reply to: ${email}</small></p>
      `,
      replyTo: email,
    }

    await transporter.sendMail(mailOptions)

    // Confirmation to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: '✅ We received your message - GreenChip Energy',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br/>GreenChip Energy Team</p>
      `,
    })

    res.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Failed to send email: ' + error.message })
  }
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend running ✓' })
})

// Serve images directly from the source public/ folder — this is guaranteed to
// exist (committed to git), unlike dist/images which depends on the host's
// build step correctly copying Vite's public/ output.
app.use('/images', express.static(path.join(__dirname, 'public', 'images')))
app.use('/videos', express.static(path.join(__dirname, 'public', 'videos')))

// Serve the built frontend (npm run build output)
const distDir = path.join(__dirname, 'dist')
app.use(express.static(distDir))
app.use((req, res) => {
  res.sendFile(path.join(distDir, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`\n🚀 Email Server running on http://localhost:${PORT}`)
  console.log(`📧 Using email: ${process.env.EMAIL_USER}`)
  console.log(`📬 Sending to: ${process.env.EMAIL_TO}\n`)
})
