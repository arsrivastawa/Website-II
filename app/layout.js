import { Inter } from "next/font/google";
import "../styles/globals.css";
// import PreLoader from "@/components/PreLoader/Preloader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hack-O-Verse",
  description: "Presented by HnCC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#0c0c0c] ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
