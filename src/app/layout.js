import {Montserrat } from 'next/font/google'
import './globals.css'
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";

export const metadata = {
  title: 'Better-future',
  description: 'Generated by create next app',
}
const mont = Montserrat({
  weight: '400',
  subsets:  ['latin', 'latin-ext'],
  variable: '--font-mont',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont.variable}>{children}</body>
    </html>
  )
}
