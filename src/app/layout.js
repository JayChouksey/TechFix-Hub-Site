import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"], //  weights to load 
  variable: "--font-poppins", // Optional for global CSS usage
});

export const metadata = {
  title: "TechFix Hub",
  description: "Expert Repairs & Quality Pre-Owned Devices",
  icons: {
    icon: "/favicon.ico"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
