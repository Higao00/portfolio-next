import Home from "@/components/Pages/Home";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Portfólio de Higor - Desenvolvedor Full Stack | React, Node.js, PHP e mais</title>
        <meta name="description" content="Explore o portfólio de Higor, um desenvolvedor Full Stack especializado em tecnologias como React, Node.js, PHP e muito mais. Veja projetos inovadores e soluções tecnológicas que entregam resultados de alta qualidade." />
        <meta name="canonical" content="https://portfolio-next.zurke.com.br" />
        <meta name="keywords" content="" />

        {/* Open Graph tags dinâmicas */}
        <meta property="og:title" content="Portfólio de Higor - Desenvolvedor Full Stack | React, Node.js, PHP e mais" />
        <meta property="og:description" content="Explore o portfólio de Higor, um desenvolvedor Full Stack especializado em tecnologias como React, Node.js, PHP e muito mais. Veja projetos inovadores e soluções tecnológicas que entregam resultados de alta qualidade." />
        <meta property="og:url" content="https://portfolio-next.zurke.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/54690671?v=6" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Portfólio de Higor" />

        {/* Outras tags para SEO */}
        <meta name="twitter:title" content="Portfólio de Higor - Desenvolvedor Full Stack | React, Node.js, PHP e mais" />
        <meta name="twitter:description" content="Explore o portfólio de Higor, um desenvolvedor Full Stack especializado em tecnologias como React, Node.js, PHP e muito mais. Veja projetos inovadores e soluções tecnológicas que entregam resultados de alta qualidade." />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/54690671?v=6" />
        <meta property="twitter:card" content="https://avatars.githubusercontent.com/u/54690671?v=6" />
      </Head>

      <AnimatePresence>
        <main>
          <Home />
        </main>
      </AnimatePresence>
    </>
  );
}