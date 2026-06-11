# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`rubel-accordion` is an embedded Shopify app built on the [Shopify App React Router template](https://github.com/Shopify/shopify-app-template-react-router) (React Router 7, formerly the Remix template). It runs inside the Shopify admin iframe via App Bridge and uses Polaris web components for UI.

Note: despite README references to `.ts`/`.tsx`, the app code in this repo is authored in **`.js`/`.jsx`**. TypeScript is configured (`tsconfig.json`, `npm run typecheck`) for type-checking but routes and server code are plain JS.

## Commands

```shell
npm run dev          # shopify app dev — main dev loop; logs in, tunnels, injects env vars. Press P to open the app.
npm run build        # react-router build
npm run start        # serve the production build (react-router-serve ./build/server/index.js)
npm run lint         # eslint over the repo
npm run typecheck    # react-router typegen && tsc --noEmit
npm run deploy       # shopify app deploy — pushes config (incl. webhooks/scopes from shopify.app.toml) to Shopify
npm run setup        # prisma generate && prisma migrate deploy — run if you hit "table does not exist"
npm run config:link  # link local code to a Shopify app config
```

There is no test runner configured in this repo.

## Architecture

**Auth & Shopify SDK boundary.** `app/shopify.server.js` is the single source for the configured `shopifyApp` instance. Always import `authenticate`, `login`, `unauthenticated`, `sessionStorage`, etc. from here — never reconstruct the client. In loaders/actions, call `await authenticate.admin(request)` to get `{ admin, session }`, then use `admin.graphql(...)` for Admin API calls.

**Routing** is file-system based via `@react-router/fs-routes` (`app/routes.js` just calls `flatRoutes()`). Route file naming:
- `app.jsx` is the authenticated layout — it calls `authenticate.admin`, wraps children in `<AppProvider embedded>`, renders the `<s-app-nav>`, and exports the `ErrorBoundary`/`headers` via Shopify's `boundary` helpers. **Every `app.*` route inherits this auth + error-boundary wrapper.** New embedded admin pages should be `app.<name>.jsx`.
- `auth.$.jsx` / `auth.login/` handle the OAuth flow.
- `webhooks.app.*.jsx` are webhook handlers (uninstalled, scopes_update).
- `_index/` is the unauthenticated public landing page.

**Embedded-app constraints** (critical — see README "Gotchas"): use `Link`/`useSubmit` from `react-router` and the `redirect` returned by `authenticate.admin` — never raw `<a>` tags or react-router's own `redirect`, or you break the iframe session.

**Session storage.** Sessions persist via `@shopify/shopify-app-session-storage-prisma` into Prisma (`prisma/schema.prisma`, SQLite `prisma/dev.sqlite` by default). `app/db.server.js` exports a singleton `PrismaClient` (reused via `global` in dev to survive HMR). Changing the DB means changing the `datasource provider` and re-running migrations.

**API version mismatch to watch:** `app/shopify.server.js` pins `ApiVersion.October25` for the SDK/GraphQL client, while `shopify.app.toml` declares `api_version = "2026-07"` for webhooks. Keep these intentional when editing.

## Configuration (shopify.app.toml)

`shopify.app.toml` is the declarative source of truth for app config that gets pushed on `deploy`:
- **Access scopes**: `write_products,write_metaobjects,write_metaobject_definitions`.
- **Webhooks**: declare app-specific webhook subscriptions here (not via `afterAuth`/`registerWebhooks`) — Shopify syncs them on every `deploy`. Adding a webhook = add a `[[webhooks.subscriptions]]` block + create the matching `webhooks.<topic>.jsx` route.
- **Metafields / metaobjects**: declarative custom-data definitions (e.g. the `product.metafields.app.demo_info` field and `metaobjects.app.example`) live here.

## Shopify Dev MCP

The Shopify Dev MCP server (`shopify-dev-mcp`) is configured in `.mcp.json` and `.cursor/mcp.json`. Use it to look up Shopify Admin API schemas, GraphQL queries/mutations, and Shopify documentation rather than guessing API shapes. GraphQL codegen is wired through `.graphqlrc.js` + `@shopify/api-codegen-preset` (`npm run graphql-codegen`).
