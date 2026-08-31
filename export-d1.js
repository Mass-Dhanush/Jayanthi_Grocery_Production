const Database = require("better-sqlite3");
const fs = require("fs");

const db = new Database("data.sqlite", { readonly: true });

function sql(v) {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "number") return String(v);
  return "'" + String(v).replace(/'/g, "''") + "'";
}

const out = [];

out.push("PRAGMA foreign_keys=OFF;");
out.push("BEGIN;");

// Categories
for (const r of db.prepare(`
  SELECT id,name,slug,image,active,created_at
  FROM categories ORDER BY id
`).all()) {
  out.push(
    `INSERT INTO categories (id,name,slug,image,active,created_at) VALUES ` +
    `(${r.id},${sql(r.name)},${sql(r.slug)},${sql(r.image)},${r.active},${sql(r.created_at)});`
  );
}

// Products
for (const r of db.prepare(`
  SELECT id,name,size,category_id,description,icon,price,stock,discount,
         image,active,created_at,updated_at
  FROM products ORDER BY id
`).all()) {
  out.push(
    `INSERT INTO products ` +
    `(id,name,size,category_id,description,icon,price,stock,discount,image,active,created_at,updated_at) VALUES ` +
    `(${r.id},${sql(r.name)},${sql(r.size)},${r.category_id},${sql(r.description)},${sql(r.icon)},` +
    `${r.price},${r.stock},${r.discount},${sql(r.image)},${r.active},${sql(r.created_at)},${sql(r.updated_at)});`
  );
}

// Admins — password_hash is copied, never printed to terminal
for (const r of db.prepare(`
  SELECT id,username,password_hash
  FROM admins ORDER BY id
`).all()) {
  out.push(
    `INSERT INTO admins (id,username,password_hash) VALUES ` +
    `(${r.id},${sql(r.username)},${sql(r.password_hash)});`
  );
}

out.push("COMMIT;");
out.push("PRAGMA foreign_keys=ON;");

fs.writeFileSync("d1-data.sql", out.join("\n"), "utf8");

console.log("D1 export created successfully.");
console.log("Categories:", db.prepare("SELECT COUNT(*) n FROM categories").get().n);
console.log("Products:", db.prepare("SELECT COUNT(*) n FROM products").get().n);
console.log("Admins:", db.prepare("SELECT COUNT(*) n FROM admins").get().n);
console.log("Orders: 0 (nothing to migrate)");
console.log("Output: d1-data.sql");

db.close();
