import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hack-O-Verse",
  description: "Presented by HnCC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#0c0c0c] ${inter.className}`}>
        <div className="body-first-child" />
        {/* <div className="body-second-child" /> */}
        {children}
      </body>
    </html>
  );
}
