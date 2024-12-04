import Contact from "@/components/Pages/Contacts";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contato - Portfólio de Higor | Desenvolvedor Full Stack</title>
        <meta name="description" content="Entre em contato com Higor, desenvolvedor Full Stack especializado em React, Node.js, PHP e muito mais. Descubra como podemos colaborar em projetos incríveis." />
        <meta name="canonical" content="https://portfolio-next.zurke.com.br/contacts" />
        <meta name="keywords" content="Contato, Higor, Desenvolvedor Full Stack, React, Node.js, PHP, comunicação" />

        {/* Open Graph */}
        <meta property="og:title" content="Contato - Portfólio de Higor | Desenvolvedor Full Stack" />
        <meta property="og:description" content="Entre em contato com Higor, desenvolvedor Full Stack especializado em tecnologias como React, Node.js e PHP." />
        <meta property="og:url" content="https://portfolio-next.zurke.com.br/contacts" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/54690671?v=6" />
        <meta property="og:site_name" content="Portfólio de Higor" />

        {/* Twitter */}
        <meta name="twitter:title" content="Contato - Portfólio de Higor | Desenvolvedor Full Stack" />
        <meta name="twitter:description" content="Entre em contato com Higor para saber mais sobre seu trabalho como desenvolvedor." />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/u/54690671?v=6" />
        <meta name="twitter:card" content="https://avatars.githubusercontent.com/u/54690671?v=6" />

      </Head>

      <AnimatePresence>
        <main>
          <Contact />
        </main>
      </AnimatePresence>
    </>
  );
}