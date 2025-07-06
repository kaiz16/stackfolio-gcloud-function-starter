<h1 align="center">
 Stackfolio Gcloud Function Starter
</h1>

## Introduction

A starter template for building google cloud functions using NodeJS. You can use this template to quickly get started with building cloud functions.

---

## Running Locally

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Setup Environment Variables:**
   - Copy the `.env.example` file to `.env.development`. This file contains sample environment variable values. You can contact the team lead for the actual values of the environment variables.

   **Contact the team lead for the actual values of the environment variables.**

   ```bash
    cp .env.example .env.development
   ```

3. **Running the app:**

   ```bash
   npm run dev
   ```

4. **Formatting:** Format code using Prettier.

   ```bash
   npm run format
   ```

## API Documentation

Base URL:

- **Development**: https://stackfolio-gcloud-function-dev-26461205929.australia-southeast1.run.app
- **Production**: https://stackfolio-gcloud-function-prod-26461205929.australia-southeast1.run.app

Health Check Route: `/health`

Documentation is done using Insomnia, a REST client for testing APIs. Download Insomnia from [Insomnia](https://insomnia.rest/download).

API Documentation is available in the `Insomnia_latest.yaml` file. Import this file into Insomnia to view and test the API endpoints.
