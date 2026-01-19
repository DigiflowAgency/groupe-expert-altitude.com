import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { generateLocalBusinessSchema } from "@/lib/schema";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Groupe Expert Altitude | Solutions complètes pour bâtiments professionnels",
  description: "5 pôles d'expertise : travaux en hauteur, terrasses & extérieurs, traitements thermiques, photovoltaïque, assainissement. Interventions partout en France. Devis gratuit.",
  keywords: "travaux en hauteur, cordistes, terrasses bois, thermo reflect, photovoltaïque, assainissement, couverture, toiture, façades, enveloppe bâtiment, Paris, Île-de-France",
  authors: [{ name: "Groupe Expert Altitude" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://groupe-expert-altitude.com",
    siteName: "Groupe Expert Altitude",
    title: "Groupe Expert Altitude | Solutions complètes pour bâtiments professionnels",
    description: "5 pôles d'expertise pour tous vos projets : travaux en hauteur, terrasses, énergie, photovoltaïque et assainissement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groupe Expert Altitude | Solutions complètes pour bâtiments professionnels",
    description: "5 pôles d'expertise : travaux en hauteur, terrasses, traitements thermiques, photovoltaïque, assainissement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L2C79GNXNT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L2C79GNXNT');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} font-montserrat antialiased`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />

        {/* Bouton d'appel fixe - Visible uniquement sur mobile */}
        <a
          href="tel:0972143065"
          className="fixed bottom-6 left-6 lg:hidden w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-40 flex items-center justify-center animate-pulse-slow"
          aria-label="Appeler maintenant"
          title="Appelez-nous : 09 72 14 30 65"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>

        {/* Chatbot placeholder - Fixed button */}
        <button
          className="fixed bottom-6 right-6 w-14 h-14 bg-gea-blue text-white rounded-full shadow-lg hover:bg-gea-blue/90 transition-all hover:scale-110 z-40 flex items-center justify-center"
          aria-label="Ouvrir le chatbot"
          title="Besoin d'aide ? Chattez avec nous"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      </body>
    </html>
  );
}
