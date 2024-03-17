import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ThemeProvider, createTheme } from "@mui/material";
import { theme } from "@/utils/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Association ABA'A",
  description:
    "Association ABA'A est une association à but non lucratif qui accompagne les personnes âgées et les personnes en situation de handicap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Header />

          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
