import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Flex } from 'next/font/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <style jsx global>{` html { font-family: 'Roboto_Flex', sans-serif; }`}</style>
  <Component {...pageProps} />
  </>
  )
}
