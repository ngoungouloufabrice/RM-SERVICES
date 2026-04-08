import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "../components/ThemeRegistry";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "RM SERVICES - Réseau, Sécurité & Communication",
  description: "Installation, configuration et maintenance d’infrastructures réseau, vidéosurveillance, téléphonie IP et sécurité.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-white antialiased">
        <ThemeRegistry>
          <Header />
          <main style={{ flexGrow: 1 }}>
            {children}
          </main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
