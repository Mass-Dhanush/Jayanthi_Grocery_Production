# Deployment notes

## Before production

- Set a long random `SESSION_SECRET`.
- Change `ADMIN_PASSWORD` before exposing the admin panel.
- Keep `.env` private.
- Use HTTPS.
- Replace placeholder phone/WhatsApp details in `public/index.html`.
- Replace the map placeholder with the verified business map embed.
- Add real product image URLs through the admin panel.
- Back up `data.sqlite` when using SQLite on persistent storage.

## Recommended hosting

This version is designed for a persistent Node.js host because it uses Express + SQLite. If you later choose Cloudflare Workers/D1, migrate the database and API layer deliberately rather than running two competing backends.
