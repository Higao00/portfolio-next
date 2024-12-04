import Skills from "@/components/Pages/Skills";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills - Portfólio de Higor | Desenvolvedor Full Stack</title>
        <meta name="description" content="Explore as principais habilidades de Higor, incluindo expertise em React, Node.js, PHP, bancos de dados e desenvolvimento de aplicações modernas." />
        <meta name="canonical" content="https://portfolio-next.zurke.com.br/skills" />
        <meta name="keywords" content="Skills, Habilidades, React, Node.js, PHP, Higor, Desenvolvedor Full Stack" />

        {/* Open Graph */}
        <meta property="og:title" content="Skills - Portfólio de Higor | Desenvolvedor Full Stack" />
        <meta property="og:description" content="Conheça as principais habilidades de Higor, como desenvolvimento Full Stack com React, Node.js e PHP." />
        <meta property="og:url" content="https://portfolio-next.zurke.com.br/skills" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:site_name" content="Portfólio de Higor" />

        {/* Twitter */}
        <meta name="twitter:title" content="Skills - Portfólio de Higor | Desenvolvedor Full Stack" />
        <meta name="twitter:description" content="Descubra as habilidades de Higor, um desenvolvedor Full Stack com expertise em tecnologias modernas." />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>

      <AnimatePresence>
        <main>
          <Skills />
        </main>
      </AnimatePresence>
    </>
  );
}
