import Header from "@/components/Header";
import "./css/globals.css";

import type { Metadata } from "next";
import Layout from "@/components/Layout";
export const metadata: Metadata = {
  title: "Fashion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
        <Header />
        {children}
        </Layout>
      </body>
    </html>
  );
}
