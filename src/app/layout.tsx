import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const inter = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T-E-A-C-H",
  description:
    "The T-E-A-C-H model is a tool for developing and implementing effective teaching strategies. It is a framework for planning and delivering lessons that are engaging, student-centered, and focused on student learning.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster richColors />
        {children}
        <Footer />
      </body>
    </html>
  );
}
