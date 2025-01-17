import { ModalProvider } from "@/hooks/useModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Red_Hat_Display } from 'next/font/google'

const redFont = Red_Hat_Display({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
   <>
   <style jsx global>{`
        html {
          font-family: ${redFont.style.fontFamily};
        }
      `}</style>
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
   
   </>
  );
}
