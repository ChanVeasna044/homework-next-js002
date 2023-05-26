
import Footer from '@/components/footer'
import './globals.css'
import Navbar from '@/components/navbar'

import { SCRIPT } from '@/util/constant'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src={SCRIPT} defer />
      </head>
      <body>
      <Navbar/>
      {children}
      <Footer/>
      
      </body>
    </html>
  )
}
