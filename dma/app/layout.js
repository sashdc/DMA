import localFont from "next/font/local";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/navbar/navbar";
// import font awesome files
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <Navbar />
        </header>

        {children}

        <footer>
          <p>© {new Date().getFullYear()} DMA</p>
        </footer>

      </body>
    </html>
  );
}
