import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Add only the weights you need
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
      </body>
    </html>
  );
}
