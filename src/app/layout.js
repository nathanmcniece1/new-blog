import { Bebas_Neue, Roboto_Mono } from "next/font/google";
import "./globals.css";


export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weights: ['200', '300', '400', '700'],
  variable: "--font-roboto-mono",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});


export const metadata = {
  title: "Musashi's Blog",
  description: "A Blog by Musashi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${bebas.variable}`}>
      <body>{children}</body>
    </html>
  );
}
