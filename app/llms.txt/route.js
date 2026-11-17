export function GET() {
  const content = `# Genesis Pain Clinic

> Interventional pain management in Overland Park, Kansas.

## Pages

- Home: Clinic information, conditions treated, procedures, patient FAQs, and contact details.

## Contact

- Address: 6700 W 121st St, Suite 300, Overland Park, KS 66209
- Phone: +1-913-871-9888
- Website: https://www.genesispain.com/
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
