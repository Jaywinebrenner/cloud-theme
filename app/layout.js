import { Inter } from "next/font/google";
import "./styles/app.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cumulus Web Design",
  description: "Affordable Custom Websites for Small Businesses & Beyond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <title>Cumulus Web Design</title>
          <meta name="description" content="Affordable Custom Websites for Small Businesses & Beyond" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
