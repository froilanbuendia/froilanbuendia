import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://froilanbuendia.com"),
  title: "Froilan Buendia — Software Engineer",
  description:
    "Portfolio and resume of Froilan Buendia, showcasing projects in full-stack development and cloud infrastructure.",
  openGraph: {
    title: "Froilan Buendia — Software Engineer",
    description:
      "Portfolio and resume of Froilan Buendia, showcasing projects in full-stack development and cloud infrastructure.",
    url: "https://froilanbuendia.com",
    siteName: "Froilan Buendia",
    images: [
      {
        url: "/favicon-32.png",
        alt: "Froilan Buendia — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Froilan Buendia — Software Engineer",
    description:
      "Portfolio and resume of Froilan Buendia, showcasing projects in full-stack development and cloud infrastructure.",
    images: ["/favicon-32.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
