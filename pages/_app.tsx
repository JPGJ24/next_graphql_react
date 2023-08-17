import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LayoutsHead } from '../layouts/LayoutsHead';
import { SessionProvider } from 'next-auth/react';

interface Props {
  Component: React.FC;
  pageProps: any;
  Session: any;
}

export default function App({ Component, pageProps, Session }: Props) {
  return (
  <>
    <SessionProvider session={Session}>
      <LayoutsHead />
      <Component {...pageProps} />
    </SessionProvider>
  </>
  )
  
}
