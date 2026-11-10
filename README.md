# Tejas Photography — Website

React website for **Tejas Photography** (photographer: **Tejas Dolas**).
All photos are local (`public/images/`), bookings go through **WhatsApp**, no subscribe pop-up.

## 1. Fastest way — just open it
Double-click **`build/index.html`**. No install, no server needed.

## 2. FIRST THING TO DO — put in your real WhatsApp number
Open **`build/site-config.js`** in Notepad / VS Code and change:

```js
whatsappNumber: '919876543210',      // country code + number, digits only
phoneDisplay:   '+91 98765 43210',
email:          'hello@tejasphotography.in',
instagram:      'https://instagram.com/your_page',
```
Save and refresh the page. Every WhatsApp button, the floating icon, the footer and the
contact form all use this one number. (`98765 43210` is only a placeholder.)

Do the same edit in **`public/site-config.js`** so it is kept when you rebuild.

## 3. Run it for development / editing
```bash
npm install
npm start          # opens http://localhost:3000
```
Windows: double-click `run-website.bat` · Mac/Linux: `./run-website.sh`

## 4. Make a fresh production build
```bash
npm run build      # creates / updates the build/ folder
```
Upload the **`build`** folder to any free host (Netlify Drop, Vercel, GitHub Pages, Cloudflare Pages).

## What is where
| What | File |
|---|---|
| Photos | `public/images/` |
| Which photo is used where, gallery list, owner bio, services, packages, testimonials | `src/data/siteData.js` |
| WhatsApp number & contact details | `public/site-config.js` |
| Owner section (Tejas Dolas) | `src/components/Owner.jsx` / `Owner.css` |
| Floating WhatsApp icon | `src/components/WhatsAppFloat.jsx` |

### Changing / adding photos
1. Copy the new photo into `public/images/` (keep it under ~2000 px wide, ~500 KB).
2. In `src/data/siteData.js` add a line to `GALLERY_ITEMS` with `cat` set to `wedding`, `prewedding`, `portrait` or `fashion`, plus the photo's width (`w`) and height (`h`).

## How WhatsApp booking works
- Nav button, hero, each service, each package, "Check Availability" and the floating icon open
  `wa.me/<your number>` with a ready-typed message (service / package name included).
- The contact form turns the filled details into one WhatsApp message and opens it — the customer
  only presses **Send**.
