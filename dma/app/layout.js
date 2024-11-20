import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Fredoka, Comfortaa } from "next/font/google";

config.autoAddCss = false;

// Import Fredoka font
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fredoka", // Match CSS variable name
});

// Import Poiret One font
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],		
  variable: "--font-comfortaa", // Match CSS variable name
});

export const metadata = {
  title: "Determination Martial Arts",
  description: "Hamilton's Community Martial Arts School",
  icons: {
    icon: "/dma_fav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className="page-container">
        <header>
          <Navbar />
        </header>

        {children}

        <footer>
          <Footer />
        </footer>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
