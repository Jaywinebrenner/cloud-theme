import { Inter } from "next/font/google";
import "./styles/app.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cumulus Web Design",
  description: "Affordable Custom Websites for Small Businesses & Beyond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

        {/* GOOGLE ANALYTICS */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YJNH5839N9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YJNH5839N9');
            `,
          }}
        />

        
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="custom websites, affordable websites, small business websites, cumulus web design, build a website, website builers" />

        {/* TWITTER */}
        <meta name="twitter:title" content="Cumulus Web Design" />
        <meta name="twitter:description" content="Affordable Custom Websites for Small Businesses & Beyond" />
        <meta name="twitter:image" content="/open-graph/twitter-open-graph.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* FACEBOOK */}
        <meta property="og:title" content="Cumulus Web Design"/>
        <meta property="og:description" content="Affordable Custom Websites for Small Businesses & Beyond"/>
        <meta property="og:image" content="/open-graph/facebook.png"/>
        <meta property="og:url" content="https://cumuluswebdesign.net/"/>
        <meta property="og:type" content="website"/>
        <meta property="fb:app_id" content="Your-Facebook-App-ID" />

        {/* LINKEDIN */}

        <meta name="author" content="Jay Winebrenner" />



        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
