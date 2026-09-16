# Port Redirector

A dark-themed Next.js app that displays configured ports and redirects them to their destination service.

## Setup

1. Edit `config/redirects.json` and add your port mappings.
2. Run locally:
   ```bash
   npm install
   npm run dev
   ```
3. Open: `http://localhost:3000`

## Vercel

1. Push this repo to GitHub.
2. Import into Vercel.
3. In project settings, add an environment variable:
   ```bash
   PORT_REDIRECTS={"3000":"https://example.com:3000","8080":"https://example.com:8080"}
   ```
4. Deploy.

## Runtime behavior

- `/` shows a card for each configured port.
- `/go/:port` redirects to the configured destination.
- Invalid or missing ports redirect back to `/`.
