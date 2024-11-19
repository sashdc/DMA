import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script'
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata = {
  title: "Determination Martial Arts",
  description: "Hamilton's Community Martial Arts School",
  icons: {
    icon: "/dma_fav.png", // Path to your favicon file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
