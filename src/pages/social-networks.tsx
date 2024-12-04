import SocialNetworks from "@/components/Pages/SocialNetworks";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function SocialNetworksPage() {
  return (
    <>
      <Head>
        <title>Social Network - Portfólio de Higor | Desenvolvedor Full Stack</title>
        <meta name="description" content="Conecte-se com Higor em redes sociais como LinkedIn, GitHub e outras plataformas profissionais para acompanhar projetos e novidades." />
        <meta name="canonical" content="https://portfolio-next.zurke.com.br/social-network" />
        <meta name="keywords" content="Redes sociais, LinkedIn, GitHub, Conexões, Higor, Desenvolvedor Full Stack" />

        {/* Open Graph */}
        <meta property="og:title" content="Social Network - Portfólio de Higor | Desenvolvedor Full Stack" />
        <meta property="og:description" content="Siga Higor nas redes sociais e conecte-se para saber mais sobre seu trabalho como desenvolvedor." />
        <meta property="og:url" content="https://portfolio-next.zurke.com.br/social-network" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:site_name" content="Portfólio de Higor" />

        {/* Twitter */}
        <meta name="twitter:title" content="Social Network - Portfólio de Higor | Desenvolvedor Full Stack" />
        <meta name="twitter:description" content="Conecte-se com Higor no LinkedIn, GitHub e outras redes sociais para acompanhar novidades." />
        <meta name="twitter:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>

      <AnimatePresence>
        <main>
          <SocialNetworks />
        </main>
      </AnimatePresence>
    </>
  );
}