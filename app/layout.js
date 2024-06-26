
"use"

import { Inter } from "next/font/google";
import "./styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google';
import Navigation from "./components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cumulus Web Design",
  description: "Affordable Custom Websites for Small Businesses & Beyond",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="custom websites, affordable websites, small business websites, cumulus web design, build a website, website builers" />

        {/* TWITTER */}
        <meta name="twitter:title" content="Cumulus Web Design" />
        <meta name="twitter:description" content="Affordable Custom Websites for Small Businesses & Beyond" />
        <meta name="twitter:image" content="https://www.cumuluswebdesign.net/open-graph/twitter-open-graph.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* FACEBOOK */}
        <meta property="og:title" content="Cumulus Web Design"/>
        <meta property="og:description" content="Affordable Custom Websites for Small Businesses & Beyond"/>
        <meta property="og:image" content="https://www.cumuluswebdesign.net/open-graph/facebook.png"/>
        <meta property="og:url" content="https://cumuluswebdesign.net/"/>
        <meta property="og:type" content="website"/>
        <meta property="fb:app_id" content="Your-Facebook-App-ID" />

        {/* LINKEDIN */}

        <meta name="author" content="Jay Winebrenner" />



        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.cumuluswebdesign.net/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.cumuluswebdesign.net/favicons/favicon-16x16.png"/>
      </Head>

      <body className={inter.className}>
        {/* <Navigation logoColor="white"/> */}
        {children}
        <GoogleAnalytics gtmId="G-VJE13M754E" />
        <GoogleTagManager gtmId="G-VJE13M754E"/>
        </body>
    </html>
  );
}
