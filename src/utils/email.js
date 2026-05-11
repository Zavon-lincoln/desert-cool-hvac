// EmailJS Configuration — replace placeholders with real keys from emailjs.com
// 1. Sign up free at https://www.emailjs.com
// 2. Create an Email Service (Gmail, Outlook, etc.) → copy Service ID
// 3. Create two Email Templates (client confirmation + owner notification) → copy Template IDs
// 4. Copy your Public Key from Account → API Keys

import emailjs from '@emailjs/browser'

const EMAILJS_PUBLIC_KEY  = 'YOUR_EMAILJS_PUBLIC_KEY'   // e.g. 'user_xXxXxXxXxXxX'
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'            // e.g. 'service_abc123'
const CLIENT_TEMPLATE_ID  = 'YOUR_CLIENT_TEMPLATE_ID'   // confirmation to lead
const OWNER_TEMPLATE_ID   = 'YOUR_OWNER_TEMPLATE_ID'    // notification to business

const OWNER_EMAIL = 'demo@desertcoolhvac.com'

export async function sendConfirmationEmail(lead) {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      CLIENT_TEMPLATE_ID,
      {
        to_name:    lead.name,
        to_email:   lead.email,
        service:    lead.service,
        date:       lead.preferredDate,
        time:       lead.preferredTime,
        company:    'Desert Cool HVAC',
        phone:      '(702) 555-0192',
      },
      EMAILJS_PUBLIC_KEY
    )
  } catch (err) {
    console.warn('Email (client) not sent — add EmailJS keys:', err)
  }
}

export async function sendOwnerNotification(lead) {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      OWNER_TEMPLATE_ID,
      {
        owner_email: OWNER_EMAIL,
        lead_name:   lead.name,
        lead_phone:  lead.phone,
        lead_email:  lead.email,
        service:     lead.service,
        date:        lead.preferredDate,
        time:        lead.preferredTime,
        notes:       lead.notes || 'None',
      },
      EMAILJS_PUBLIC_KEY
    )
  } catch (err) {
    console.warn('Email (owner) not sent — add EmailJS keys:', err)
  }
}
