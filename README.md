# 🛒 Jayanthi Grocery

A production-ready grocery e-commerce application with a responsive customer storefront, secure checkout, product and category management, order management, and a Cloudflare Workers + D1 production backend.

🌐 **Live Demo:** https://jayanthi-grocery-production.balakrishnanpremnath135.workers.dev/

## ✨ Features

### Customer Storefront

* Responsive grocery storefront
* Product categories
* Product search and filtering
* Product pricing and discounts
* Stock availability
* Shopping cart
* Delivery / store pickup checkout
* Order confirmation
* WhatsApp order handoff

### Checkout & Orders

* Server-side order creation
* Server-authoritative pricing
* Stock validation
* Customer details and delivery information
* Payment method selection
* Order number generation
* Order status tracking
* WhatsApp order message generation

### Admin

* Secure admin authentication
* Product management
* Category management
* Stock management
* Order management
* Order statistics
* Session-based authentication

### Security

* Password hashing with `bcryptjs`
* Production-aware sessions
* HTTP security headers
* Rate limiting
* Server-side input validation
* Server-side price and stock validation
* Environment-based secrets
* Local runtime/database files excluded from Git

---

## 🏗️ Architecture

```text
Customer Browser
       │
       ▼
Cloudflare Worker
       │
       ├── Static Assets
       │      └── public/
       │
       ├── REST API
       │      ├── Products
       │      ├── Categories
       │      ├── Orders
       │      └── Admin
       │
       ▼
Cloudflare D1
       │
       └── Jayanthi Grocery Database
```

Production configuration is defined in `wrangler.jsonc`.

The Worker entry point is:

```text
worker.js
```

Static frontend assets are served from:

```text
public/
```

The production database is Cloudflare D1.

---

## 🛠️ Tech Stack

| Layer               | Technology                              |
| ------------------- | --------------------------------------- |
| Frontend            | HTML, CSS, JavaScript                   |
| Backend             | Cloudflare Workers                      |
| Database            | Cloudflare D1                           |
| Authentication      | Session-based authentication + bcryptjs |
| Deployment          | Wrangler                                |
| Local Development   | Node.js                                 |
| Legacy/Local Server | Express + SQLite                        |

---

## 📁 Project Structure

```text
Jayanthi_Grocery_Production/
│
├── public/
│   └── index.html
│
├── worker.js
├── server.js
├── wrangler.jsonc
├── schema.sql
│
├── package.json
├── package-lock.json
│
├── DEPLOYMENT.md
├── MIGRATION_NOTES.md
├── README.md
│
└── .gitignore
```

Local runtime files such as `.env`, SQLite databases, logs and browser cookie files are excluded from version control.

---

## 🔌 API

### Public API

| Method | Endpoint          | Purpose                     |
| ------ | ----------------- | --------------------------- |
| GET    | `/api/categories` | Retrieve product categories |
| GET    | `/api/products`   | Retrieve active products    |
| POST   | `/api/orders`     | Create a customer order     |

### Authentication

| Method | Endpoint        | Purpose                     |
| ------ | --------------- | --------------------------- |
| POST   | `/api/login`    | Admin login                 |
| POST   | `/api/logout`   | Admin logout                |
| GET    | `/api/admin/me` | Check current admin session |

### Admin API

| Endpoint                | Purpose                   |
| ----------------------- | ------------------------- |
| `/api/admin/products`   | Manage products           |
| `/api/admin/categories` | Manage categories         |
| `/api/admin/orders`     | Manage orders             |
| `/api/admin/stats`      | Retrieve admin statistics |

---

## 📱 WhatsApp Ordering

After a successful checkout, the storefront prepares an order message containing information such as:

* Order number
* Customer name
* Phone number
* Delivery / pickup method
* Address
* Payment method
* Ordered products
* Quantities
* Subtotal
* Delivery charge
* Total
* Customer notes

The customer can then send the prepared order through WhatsApp.

> **Note:** The WhatsApp destination number should be configured carefully and should never be stored as a secret in public documentation.

---

## ☁️ Cloudflare Deployment

### Prerequisites

* Node.js 20+
* Cloudflare account
* Wrangler CLI

Install dependencies:

```bash
npm install
```

Check Wrangler:

```bash
npx wrangler --version
```

Deploy the Worker:

```bash
npx wrangler deploy
```

The deployment configuration is stored in:

```text
wrangler.jsonc
```

It defines:

* Worker name
* Worker entry point
* Compatibility settings
* Static asset directory
* D1 database binding

---

## 🗄️ Database

Production uses **Cloudflare D1**.

Database configuration is declared through the D1 binding in:

```text
wrangler.jsonc
```

The database schema is maintained in:

```text
schema.sql
```

Never commit local SQLite runtime databases or production secrets.

---

## 🔐 Environment & Secrets

Do not commit sensitive values.

The repository ignores:

```text
.env
data.sqlite*
*.log
cookies.txt
node_modules/
```

For production deployments, sensitive credentials should be managed through the appropriate Cloudflare secret/environment configuration rather than committed to Git.

---

## 🧪 Health Check

The Worker exposes:

```text
/health
```

Use it to verify that the production Worker is responding.

Example:

```bash
curl https://jayanthi-grocery-production.balakrishnanpremnath135.workers.dev/health
```

---

## 💻 Local Development

Install dependencies:

```bash
npm install
```

Run the local Node server:

```bash
npm start
```

Development mode:

```bash
npm run dev
```

The local Node/Express server is retained for local development and compatibility. Production deployment uses the Cloudflare Worker defined by `worker.js`.

---

## 🚀 Production Workflow

```text
1. Update source code
        ↓
2. Test locally
        ↓
3. Commit changes
        ↓
4. Push to GitHub
        ↓
5. Deploy with Wrangler
        ↓
6. Verify /health
        ↓
7. Test storefront + checkout
```

---

## 📋 Current Project Status

* ✅ Customer storefront
* ✅ Product catalog
* ✅ Categories
* ✅ Shopping cart
* ✅ Server-side checkout
* ✅ Order management
* ✅ Admin authentication
* ✅ Product/stock management
* ✅ Cloudflare Workers deployment
* ✅ Cloudflare D1 database
* ✅ WhatsApp order handoff
* ✅ Responsive UI
* ✅ Git version control

---

## 🔮 Future Improvements

Potential improvements include:

* Automated GitHub Actions deployment
* Automated tests
* Better product image management
* Enhanced order notifications
* Customer order tracking
* Analytics dashboard
* Automated database backup strategy
* Improved accessibility
* Progressive Web App support

---

## 👨‍💻 Development

This project is maintained as a production-oriented grocery ordering platform for Jayanthi Grocery.

For development changes, prefer small, focused commits using conventional commit-style messages such as:

```text
feat: add product filtering
fix: resolve checkout validation issue
docs: update deployment guide
chore: update dependencies
ci: add deployment workflow
```

---

## 📄 License

This project is currently maintained as a private application. Add an appropriate open-source license before distributing the source publicly.
