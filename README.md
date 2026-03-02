# Cabaña Carapé — Website

A luxurious yet rustic website for the farm house rental in Sierras de Carapé, Uruguay.

## Quick Start

Open `index.html` in your browser, or run a local server:

```bash
cd cabana-carape
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Customization

### Photos
Replace the Unsplash placeholder URLs in `index.html` with your own images. Recommended:
- Hero: Wide landscape of the house or mountains at golden hour
- Gallery: Exterior, interior, views, terrace
- Activities: One photo per experience (horses, asado, breakfast, hiking, night, stars, wildlife, cattle)
- About: Atmospheric landscape

### Contact Form
The booking form currently shows a success message. To receive inquiries:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the form
- **Netlify Forms**: Add `netlify` attribute to the form when deploying to Netlify
- Or connect to your own backend API

### Email
Update any placeholder email (e.g. `reservas@cabanacarape.com`) with your real address.

## Structure

- **La Cabaña** — Overview, gallery, location
- **Experiencias** — All 8 activities
- **Reservar** — Booking/contact form
- **Nosotros** — About section

## Deployment

Upload the `cabana-carape` folder to any static hosting (Netlify, Vercel, GitHub Pages, or your own server). No build step required.
