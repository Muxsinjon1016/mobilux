import type { Metadata } from "next";
import "./globals.css";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import { ReduxProvider } from "@/providers/reduxProvider";

export const metadata: Metadata = {
  title: "mobilux",
  description: "Generated by Muxsinjon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <html>
        <body className="bg-[#F6F8FA]">
          <header className="fixed top-0 left-0 right-0 z-50 bg-white rounded-b-3xl shadow-lg">
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ReduxProvider>
  );
}
