# ShopLedger

## Stack

- Node.js with CommonJS modules
- Express 4 for the HTTP server and API
- Browser UI in plain HTML, CSS, and JavaScript
- `data/db.json` is the JSON file store
- GST, coupons, inventory, orders, and customer credit are implemented in `lib/`

## Module map

- `server.js` creates the Express app and mounts the routers.
- `routes/` implements product, order, customer, and report endpoints.
- `lib/` contains domain logic for pricing, tax, coupons, inventory, orders, ledger, reports, dates, invoices, and persistence.
- `public/` contains the UI.
- `config.js` contains the port, shop details, GST slabs, inventory defaults, and coupon definitions.
- `data/db.json` contains products, orders, customers, settlements, and audit entries.

## Commands

- Start the app: `npm start` (requires dependencies installed)
- Run tests: `node --test`

## Working rules

- Write characterization tests before changing behavior.
- Change only the module the ticket is about, plus the tests needed for that ticket.
- Tests must use in-memory data and never read or write `data/db.json`.
- Do not add dependencies.
- Preserve `data/db.json` during development and verification.
