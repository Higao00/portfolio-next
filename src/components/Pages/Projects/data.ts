export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  technologies: string[];
  category: 'website' | 'system' | 'ecommerce' | 'landing';
  status: 'active' | 'development' | 'completed';
  year: number;
}

const projectsDataPt: Project[] = [
  {
    id: 'zurke-main',
    title: 'Zurke Innovation',
    description: 'Site institucional da Zurke Innovation, empresa de tecnologia especializada em soluções digitais inovadoras.',
    url: 'https://www.zurke.com.br',
    technologies: ['React', 'Next.js', 'TypeScript', 'Styled Components'],
    category: 'website',
    status: 'active',
    year: 2024,
  },
  {
    id: 'prime-contabilidade',
    title: 'Prime Contabilidade e Associados',
    description: 'Website profissional para escritório de contabilidade com foco em serviços empresariais.',
    url: 'https://www.primecontabilidadeeassociados.com',
    technologies: ['WordPress', 'PHP', 'MySQL', 'CSS3'],
    category: 'website',
    status: 'active',
    year: 2024,
  },
  {
    id: 'desenvolvimento-software',
    title: 'Desenvolvimento de Software Zurke',
    description: 'Landing page especializada em serviços de desenvolvimento de software personalizado.',
    url: 'https://desenvolvimento-de-software.zurke.com.br',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    category: 'landing',
    status: 'active',
    year: 2024,
  },
  {
    id: 'diamante-azul',
    title: 'Diamante Azul Imobiliário',
    description: 'Portal imobiliário completo com sistema de busca e catálogo de propriedades.',
    url: 'https://www.diamanteazulimobiliario.com',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
    category: 'website',
    status: 'active',
    year: 2023,
  },
  {
    id: 'crm-zurke',
    title: 'CRM Zurke',
    description: 'Sistema CRM completo para gestão de clientes, vendas e relacionamento.',
    url: 'https://www.crm.zurke.com.br',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    category: 'system',
    status: 'active',
    year: 2024,
  },
  {
    id: 'trafego-pago',
    title: 'Tráfego Pago Orgânico',
    description: 'Plataforma especializada em estratégias de marketing digital e tráfego pago.',
    url: 'https://trafego-pago-organico.zurke.com.br',
    technologies: ['React', 'Next.js', 'Google Analytics', 'Facebook Pixel'],
    category: 'landing',
    status: 'active',
    year: 2024,
  },
];

const projectsDataEn: Project[] = [
  {
    id: 'zurke-main',
    title: 'Zurke Innovation',
    description: 'Institutional website for Zurke Innovation, a technology company specialized in innovative digital solutions.',
    url: 'https://www.zurke.com.br',
    technologies: ['React', 'Next.js', 'TypeScript', 'Styled Components'],
    category: 'website',
    status: 'active',
    year: 2024,
  },
  {
    id: 'prime-contabilidade',
    title: 'Prime Accounting & Associates',
    description: 'Professional website for accounting firm focused on business services.',
    url: 'https://www.primecontabilidadeeassociados.com',
    technologies: ['WordPress', 'PHP', 'MySQL', 'CSS3'],
    category: 'website',
    status: 'active',
    year: 2024,
  },
  {
    id: 'desenvolvimento-software',
    title: 'Zurke Software Development',
    description: 'Landing page specialized in custom software development services.',
    url: 'https://desenvolvimento-de-software.zurke.com.br',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    category: 'landing',
    status: 'active',
    year: 2024,
  },
  {
    id: 'diamante-azul',
    title: 'Blue Diamond Real Estate',
    description: 'Complete real estate portal with search system and property catalog.',
    url: 'https://www.diamanteazulimobiliario.com',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
    category: 'website',
    status: 'active',
    year: 2023,
  },
  {
    id: 'crm-zurke',
    title: 'Zurke CRM',
    description: 'Complete CRM system for customer, sales and relationship management.',
    url: 'https://www.crm.zurke.com.br',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    category: 'system',
    status: 'active',
    year: 2024,
  },
  {
    id: 'trafego-pago',
    title: 'Organic Paid Traffic',
    description: 'Platform specialized in digital marketing strategies and paid traffic.',
    url: 'https://trafego-pago-organico.zurke.com.br',
    technologies: ['React', 'Next.js', 'Google Analytics', 'Facebook Pixel'],
    category: 'landing',
    status: 'active',
    year: 2024,
  },
];

export const getProjectsData = (language: string): Project[] => {
  return language === 'en' ? projectsDataEn : projectsDataPt;
};

export const projectsData = projectsDataPt;

export const getProjectsByCategory = (category: Project['category'], language: string = 'pt') => {
  const projects = getProjectsData(language);
  return projects.filter(project => project.category === category);
};

export const getProjectsByStatus = (status: Project['status'], language: string = 'pt') => {
  const projects = getProjectsData(language);
  return projects.filter(project => project.status === status);
};