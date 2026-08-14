# Contact form — Render → Vercel migration

This repository's contact form previously posted to a backend hosted on Render. The repository now includes a Vercel Serverless Function and frontend updates to simplify migrating to Vercel.

- Frontend: the form will call the URL in the `VITE_CONTACT_API_URL` environment variable if set; otherwise it defaults to the relative endpoint `/api/contact-form`.
- Backend: a serverless function is provided at `/api/contact-form` (file `api/contact-form.js`) that sends submissions via SendGrid.

Quick setup

1. Install dependencies:

```bash
npm install
```

2. Set required environment variables in Vercel (Project Settings → Environment Variables) or locally for `vercel dev`:

- `SENDGRID_API_KEY` — your SendGrid API key
- `FROM_EMAIL` — the verified sender email (e.g., no-reply@yourdomain.com)
- `TO_EMAIL` — destination email that receives the messages
- `VITE_CONTACT_API_URL` — optional. Leave blank to use the built-in function (`/api/contact-form`) or set to an external endpoint.

3. Deploy to Vercel

- Option A — Use the provided serverless function (recommended):
  - Connect this repository to Vercel (or use `vercel` CLI) and set the environment variables listed above.
  - Deploy. The frontend will call `/api/contact-form` in production by default.

- Option B — Deploy your existing backend to Vercel:
  - Deploy the backend separately and set `VITE_CONTACT_API_URL` to the full URL of your backend’s contact endpoint.

Local testing

- To run the site and the function locally, install the Vercel CLI and run:

```bash
npm i -g vercel
vercel dev
```

This runs the Vercel dev environment; the frontend will use the `VITE_CONTACT_API_URL` value you provide in your local environment or default to the function route.

Notes and next steps

The serverless function previously used SendGrid; it's been replaced with `nodemailer` and SMTP configuration.

Standalone backend

- A standalone Vercel-style backend is scaffolded in `vercel-backend/`. It exposes the same endpoint at `/api/contact-form` and uses `nodemailer`.
- To run the standalone backend locally:

```bash
cd vercel-backend
npm install
# copy .env.example to .env and set SMTP values
node server.js
```

Using an external backend

- If you want to deploy `vercel-backend` as its own project on Vercel, connect the `vercel-backend` folder as a separate repository or monorepo project in Vercel and set the same environment variables there. Then set `VITE_CONTACT_API_URL` in the main site's Vercel project to the full URL of the deployed backend's `/api/contact-form`.
