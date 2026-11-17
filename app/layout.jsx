import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.genesispain.com";
const siteName = "Genesis Pain Clinic";
const description =
  "Genesis Pain Clinic provides interventional pain management in Overland Park, Kansas, including diagnosis, treatment, and individualized care for chronic pain.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pain Management Clinic of Overland Park, Kansas | Genesis Pain Clinic",
    template: "%s | Genesis Pain Clinic"
  },
  description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Pain Management Clinic of Overland Park, Kansas | Genesis Pain Clinic",
    description,
    siteName
  },
  twitter: {
    card: "summary",
    title: "Pain Management Clinic of Overland Park, Kansas | Genesis Pain Clinic",
    description
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteName,
    description,
    url: siteUrl,
    image: `${siteUrl}/images/genesispain-slide-photo.jpg`,
    logo: `${siteUrl}/images/logo.png`,
    telephone: "+1-913-871-9888",
    email: "admin@genesispain.com",
    medicalSpecialty: "PainManagement",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6700 W 121st St, Suite 300",
      addressLocality: "Overland Park",
      addressRegion: "KS",
      postalCode: "66209",
      addressCountry: "US"
    },
    openingHours: "Mo-Fr 08:00-17:00",
    sameAs: [
      "https://www.facebook.com/genesispainclinic/",
      "https://twitter.com/GenesisPainCli2",
      "https://www.instagram.com/genesispain/"
    ]
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </body>
    </html>
  );
}
