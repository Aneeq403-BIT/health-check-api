# Health Check API

## Purpose

A minimal backend skeleton built to verify that the full pipeline —
local environment, version control, and cloud deployment — works
end-to-end before any real application logic is built on top of it.

It exposes a single `GET /health` endpoint that returns a JSON status
and timestamp, confirming the service is alive and reachable.

Built as part of the Remote Internship onboarding task at **Neurofive Solutions**.

## Tech Stack

- Node.js
- Express

## Project Structure
health-check-api/
├── index.jsx          # Express app + /health endpoint
├── package.json        # Project manifest + dependencies
├── package-lock.json
├── .gitignore
├── api/
├   ├──index.js
└── README.md

## Run Locally

1. Clone the repo:
```bash
   git clone https://github.com/Aneeq403-BIT/health-check-api.git
   cd health-check-api
```

2. Install dependencies:
```bash
   npm install
```

3. Start the server:
```bash
   npm start
```

4. Visit:
   - `http://localhost:3000/health` → health check JSON

## Example Response

```json
{
  "status": "ok",
  "timestamp": "2026-07-18T10:22:41.123Z"
}
```

## Deployment

Deployed on [Render](https://render.com) as a free-tier Web Service.

- Build command: `npm install`
- Start command: `npm start`
- Live URL: `<add your live URL here after deploying>`