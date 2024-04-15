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
        <div className="absolute overflow-x-hidden -z-[79] overflow-y-hidden h-[100vh] bg-animation-container w-full">
          <div className="body-first-child" />
          <div className="body-second-child -left-[10%] -bottom-[17%] sm:-bottom-[30%] w-[180px] min-h-[280px] xs:w-[250px] xs:min-h-[350px] sm:w-[300px] sm:min-h-[400px] md:w-[300px] md:min-h-[400px] desktop:w-[300px] desktop:min-h-[420px] lg:w-[350px] lg:min-h-[500px] xl:w-[400px] xl:min-h-[600px] " />
          <div className="body-third-child -right-[10%] -top-[17%] sm:-top-[30%] w-[180px] min-h-[280px] xs:w-[250px] xs:min-h-[350px] sm:w-[300px] sm:min-h-[400px] md:w-[300px] md:min-h-[400px] desktop:w-[300px] desktop:min-h-[420px] lg:w-[350px] lg:min-h-[500px] xl:w-[400px] xl:min-h-[600px] " />
          <div className="body-fourth-child z-[70] absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-b from-[#00000002] to-[#000000]" />
        </div>
        {children}
      </body>
    </html>
  );
}
