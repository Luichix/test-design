import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';

import styles from './layout.module.css';
import Lock from '@/components/svg/Lock';
import Banner from '@/components/Banner';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const slides = [
  { icon: 'warranty', label: '30-DAY SATISFACTION GUARANTEE' },
  { icon: 'delivery', label: 'Free delivery on orders over $40.00' },
  { icon: 'customer', label: '50.000+ HAPPY CUSTOMERS' },
  { icon: 'money', label: '100% Money Back Guarantee' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${styles.container}`}>
        <Banner slides={slides} />
        {children}
        <footer className={styles.footer}>
          <div className={styles.info}>
            <span>Copyright (c) 2023</span>
            <hr className={styles.hr} />
            <span>Clarifionsupport@clarifion.com</span>
          </div>
          <div className={styles.secure}>
            <Lock />
            <span>Secure 256-bit SSL encryption.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
