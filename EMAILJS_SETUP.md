# EmailJS Setup Guide

Your contact form is configured to send emails via **EmailJS** (free, no backend needed).

## Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click **Sign Up** (use email/Google/GitHub)
3. Verify your email
4. Log in to your dashboard

## Step 2: Set Up Email Service

1. In dashboard, click **Add Service**
2. Select **Gmail** (recommended) or your email provider
3. Click **Connect Account**
4. Follow authorization prompts to link your email
5. Save the service

**Note**: Copy your **Service ID** (format: `service_XXXXXXXXX`)

## Step 3: Create Email Template

1. In dashboard, click **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

4. Save the template
5. Copy your **Template ID** (format: `template_XXXXXXXXX`)

## Step 4: Get Public Key

1. In dashboard, click **Account** (top right)
2. Go to **API Keys** tab
3. Copy your **Public Key** (format: `XXXXXXXXXXXXXXXX`)

## Step 5: Update contact.html

Replace the three placeholders in `contact.html`:

### Location 1: In `<head>` section
```html
<script>
    emailjs.init("YOUR_PUBLIC_KEY");
</script>
```

Replace `YOUR_PUBLIC_KEY` with your actual Public Key from Step 4.

### Location 2: In form submit handler (near bottom)
```js
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

Replace:
- `YOUR_SERVICE_ID` → from Step 2
- `YOUR_TEMPLATE_ID` → from Step 3

## Step 6: Test

1. Open `contact.html` locally
2. Fill out the form with test data
3. Click "Send"
4. Check your email inbox for the test message
5. If successful, you'll see "Sent ✓" on the button

## Troubleshooting

**Form says "Failed — try again"**:
- Double-check Public Key, Service ID, and Template ID
- Ensure your email service is activated in EmailJS dashboard
- Check browser console (F12 → Console) for error messages

**Emails not arriving**:
- Check spam/promotions folder
- Verify service is connected (not showing red X in dashboard)
- Re-authorize email service if needed

**Rate limited**:
- Free tier allows ~200 emails/month
- Upgrade plan if needed

---

**Questions?** Refer to official [EmailJS documentation](https://www.emailjs.com/docs/)
