"use client"
import './globals.css'
import { Navbar, Footer } from '../components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PageAnimations } from '../components'
import { AnimatePresence } from 'framer-motion'
import { serverClient } from '../components'
import { ApolloProvider } from '@apollo/client';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ApolloProvider client={serverClient}>
        <AnimatePresence>
          <PageAnimations>
            <Navbar />
            {children}
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </PageAnimations>
        </AnimatePresence>
      </ApolloProvider>
    </html>
  )
}
