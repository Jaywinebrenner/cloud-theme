import { Inter } from "next/font/google";
import "./styles/app.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloud Template",
  description: "NextJs Template for Small Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
