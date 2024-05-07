import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './tailwind.css';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Head from 'next/head';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const inter = Inter({
  weight: '400',
  subsets: ['greek'],
});

export const metadata: Metadata = {
  title: 'Gunvant Sarpate',
  description: 'Personal Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>
        <link rel="icon" href="/images/favicon.ico" sizes="any"></link>
      </Head>

      <body className={`${inter.className} bg-body-bg`}>
        <div className="flex flex-col h-screen container mx-auto max-w-4xl  bg-main-bg">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
