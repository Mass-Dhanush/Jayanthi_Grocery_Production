# Migration notes from the old Jayanthi Grocery repository

Preserved concepts:
- Jayanthi Grocery branding and green/gold visual language
- Sri Lankan LKR pricing
- Categories and grocery catalogue
- Search and responsive storefront
- Cart and quantity controls
- Admin product/stock concepts
- Server-side admin authentication/security direction

Upgraded:
- Server-authoritative products and prices
- Database-backed categories
- Checkout and order creation
- Atomic stock reduction inside the order transaction
- Order confirmation and order lookup
- Admin order management
- Admin category management
- Product image URL support
- Loading/error states and responsive checkout

Not copied into this package:
- `.env` secrets
- `node_modules`
- SQLite runtime WAL/SHM files

This package is intentionally a clean production-ready upgrade rather than a blind overwrite of the old repository.
