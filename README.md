# Jayanthi Grocery — Production-Ready Upgrade

This package upgrades the old Jayanthi Grocery concept without requiring a ZIP upload to GitHub. It provides a clean Express + SQLite application with a customer storefront, server-authoritative cart checkout, orders, categories, admin product/stock/order management, validation, security headers, rate limiting, and responsive UI.

## Run

1. Install Node.js 20+.
2. Copy `.env.example` to `.env` and set a strong `SESSION_SECRET` and admin password.
3. Run `npm install`.
4. Run `npm start`.
5. Open `http://localhost:3000`.
6. Admin: `http://localhost:3000/admin`.

## Important

- Do not commit `.env` or SQLite runtime files.
- Product price and stock are validated server-side at checkout.
- Existing old repository functionality should be migrated into this structure rather than blindly deleted.
- Product images can be supplied as safe HTTPS image URLs through the admin panel.
