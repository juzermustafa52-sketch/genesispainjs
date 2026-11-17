# Genesis Pain Clinic (Next.js)

The Genesis Pain Clinic homepage rebuilt with the Next.js App Router. The
original image and font assets are bundled locally in `public/`.

## Run locally

1. Install Node.js 20.9 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the
   canonical production URL.
4. Run `npm run dev`, then open `http://localhost:3000`.
5. Run `npm run lint` and `npm run build` before deployment.

## Deploy to Vercel

Import the repository in Vercel and use the default Next.js build settings.
Set `NEXT_PUBLIC_SITE_URL` to the production domain in the Vercel project
environment variables. The homepage, metadata, structured data, robots route,
sitemap, and `llms.txt` route use this canonical URL.

Appointment and patient portal actions link to the clinic's existing services.
The contact details, office hours, social links, and website navigation match
the Genesis Pain Clinic reference. The contact form opens a prefilled email to
the clinic and does not store or transmit submissions from the Next.js server.
