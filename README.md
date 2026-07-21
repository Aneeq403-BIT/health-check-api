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

├── index.js          # Express app + /health endpoint

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
   - `https://health-check-api-v89w.vercel.app/health` → health check JSON

## Example Response

```json
{
  "Status": "OK",
  "timestamp": "2026-07-21T15:57:14.630Z"
}
```

## Deployment

Deployed on Vercel(vercel.com) as a free-tier Web Service.

- Build command: `npm install`
- Start command: `npm start`
- Live URL: `https://health-check-api-v89w.vercel.app`
