import { Roboto } from 'next/font/google';
import type { AppProps } from "next/app";
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyles';
import Header from '@/components/Header';
import themeColors from '@/theme/themeColors';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'], // Light, Regular, Medium, Bold
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <ThemeProvider theme={themeColors}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
