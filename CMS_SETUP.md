# NewLife Dryclean CMS (Sanity)

This project includes an embedded Sanity Studio at `/studio`.

## 1. Create/connect the Sanity project
From this project folder run:

```bash
npx sanity@latest init
```

Choose or create a Sanity project and use the `production` dataset.

## 2. Add environment variables
Create `.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
```

Add the same variables in Vercel: Project → Settings → Environment Variables.

## 3. CORS
In Sanity Manage → your project → API settings → CORS Origins, add:
- `http://localhost:3000` for local editing
- your production Vercel/custom-domain origin
Enable credentials for the Studio origin.

## 4. Open CMS
Run `npm run dev` and open:

`http://localhost:3000/studio`

CMS document types included:
- Site Settings
- Services
- Why Choose Us benefits
- About - Garment Care Process
- FAQs
- Offers & Promotions
- Branches

The public site has static fallbacks, so it remains usable while Sanity is empty or not configured.
