import { Inter } from "next/font/google";
import "./styles/app.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cumulus Web Design",
  description: "Affordable Custom Websites for Small Businesses & Beyond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
