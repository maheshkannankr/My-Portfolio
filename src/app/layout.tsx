import './globals.css';
import { Nunito, Tangerine } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito',
});

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-tangerine',
});

export const metadata = {
  title: 'Mahesh Portfolio',
  description: 'Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${nunito.variable} ${tangerine.variable}`}>
      <body className='font-sans bg-background-light text-text-primary dark:bg-background-dark dark:text-text-inverse transition-colors duration-300'>
        {children}
      </body>
    </html>
  );
}
