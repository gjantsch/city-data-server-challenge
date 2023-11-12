import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Crud',
  description: 'A Simple CRUD using ReactJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}
