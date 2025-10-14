import { Inter, Poppins, JetBrains_Mono } from 'next/font/google';
import type { AppProps } from "next/app";
import { ThemeProvider } from 'styled-components';
import dynamic from 'next/dynamic';
import GlobalStyle from '@/styles/GlobalStyles';
import theme from '@/styles/themeColors';
import '@/lib/i18n'; // Inicializar i18n

// Dynamic import do Header para reduzir bundle inicial e evitar hidratação
const Header = dynamic(() => import('@/components/Header'), {
  ssr: false,
  loading: () => (
    <div style={{ height: '80px', backgroundColor: 'rgba(15, 23, 42, 0.8)' }}></div>
  )
});

// Configuração das fontes modernas com otimização
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false, // Menos crítico
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default App;
