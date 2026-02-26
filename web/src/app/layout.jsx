import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://saraldb.com"),
  title: {
    default: "SaralDB - Simplifying Modern Database Architecture",
    template: "%s | SaralDB",
  },
  description:
    "SaralDB helps developers design structured, scalable, and optimized databases without unnecessary complexity. Build smarter data systems from Day 1.",
  keywords: [
    "Database Development",
    "SQL Optimization",
    "Database Architecture",
    "Backend Development",
    "Scalable Database Design",
    "SaralDB",
  ],
  authors: [{ name: "Abhishek Jadon" }],
  creator: "SaralDB",

  openGraph: {
    title: "SaralDB - Simplifying Modern Database Architecture",
    description:
      "Build scalable, well-structured databases without overengineering.",
    url: "https://saraldb.com",
    siteName: "SaralDB",
    type: "website",
    images: [
      {
        url: "/og-image.png", // put image inside public folder
        width: 1200,
        height: 630,
        alt: "SaralDB",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SaralDB - Simplifying Modern Database Architecture",
    description:
      "Design scalable databases without unnecessary complexity.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SaralDB",
    url: "https://saraldb.com",
    logo: "https://saraldb.com/og-image.png",
    founder: {
      "@type": "Person",
      name: "Abhishek Jadon",
    },
    sameAs: [
      "https://linkedin.com/in/yourprofile"
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">

        {/* SEO Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}