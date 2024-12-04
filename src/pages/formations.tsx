import Formations from "@/components/Pages/Formations";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function FormationsPage() {
  return (
    <>
      <Head>
        <title>Formações - Portfólio de Higor | Desenvolvedor Full Stack</title>
        <meta name="description" content="Conheça as formações e certificações de Higor, incluindo especializações em React, Node.js, PHP e tecnologias de ponta do mercado." />
        <meta name="canonical" content="https://portfolio-next.zurke.com.br/formations" />
        <meta name="keywords" content="Formações, Certificações, Cursos, Higor, Desenvolvedor Full Stack" />

        {/* Open Graph */}
        <meta property="og:title" content="Formações - Portfólio de Higor | Desenvolvedor Full Stack" />
        <meta property="og:description" content="Descubra as formações e certificações de Higor, que o tornam um desenvolvedor de destaque em React, Node.js e PHP." />
        <meta property="og:url" content="https://portfolio-next.zurke.com.br/formations" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:site_name" content="Portfólio de Higor" />

        {/* Twitter */}
        <meta name="twitter:title" content="Formações - Portfólio de Higor | Desenvolvedor Full Stack" />
        <meta name="twitter:description" content="Veja as certificações e cursos que tornam Higor um desenvolvedor experiente e qualificado." />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>

      <AnimatePresence>
        <main>
          <Formations />
        </main>
      </AnimatePresence>
    </>
  );
}
