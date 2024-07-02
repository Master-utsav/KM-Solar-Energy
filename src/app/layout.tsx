import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KM Solar Energy",
  description: "At KM Solar Energy, we are dedicated to empowering a sustainable future through innovative solar solutions. Our commitment is to provide top-quality solar products and exceptional installation services, ensuring our customers achieve maximum energy efficiency and cost savings. We prioritize transparency, offering honest advice and never pushing unnecessary equipment. Our experienced team takes pride in exceeding customer expectations with every project. Join us in harnessing the power of the sun to create a greener tomorrow.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
       <Head>
          <meta name="google-adsense-account" content={process.env.NEXT_PUBLIC_ADKEY} />
      </Head>
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right"/>
        </body>
    </html>
  );
}
