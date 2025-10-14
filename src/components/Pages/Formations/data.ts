import { Formation } from "@/types";

const formationsDataPt: Formation[] = [
    {
        id: "1",
        title: "Sistemas de Informação",
        institution: "Cruzeiro do Sul Virtual",
        period: "2019 - 2023",
        description: "Graduação completa em Sistemas de Informação com foco em desenvolvimento de software, banco de dados, redes e gestão de projetos tecnológicos.",
        type: "graduation",
        status: "completed"
    },
    {
        id: "2", 
        title: "Inteligência Artificial e Machine Learning",
        institution: "Cruzeiro do Sul Virtual",
        period: "set 2025 - out 2026",
        description: "Pós-graduação Lato Sensu em Inteligência Artificial e Machine Learning. Curso focado em modelos preditivos, regressão linear e logística, análise de séries temporais, redes neurais, deep learning, visão computacional e processamento de linguagem natural.",
        type: "graduation",
        status: "in-progress"
    },
    {
        id: "3",
        title: "Ignite - Front-End | Back-End | Mobile",
        institution: "Rocketseat",
        period: "2021 - 2023",
        description: "Bootcamp completo com trilhas especializadas em React, React Native, Node.js e tecnologias modernas de desenvolvimento web e mobile.",
        type: "bootcamp",
        status: "completed"
    },
    {
        id: "4",
        title: "Gestão Empresarial",
        institution: "Euro Anglo",
        period: "2017 - 2018",
        description: "Curso técnico em gestão empresarial com foco em administração, contabilidade, recursos humanos e estratégias de negócio.",
        type: "course",
        status: "completed"
    }
];

const formationsDataEn: Formation[] = [
    {
        id: "1",
        title: "Information Systems",
        institution: "Cruzeiro do Sul Virtual",
        period: "2019 - 2023",
        description: "Complete degree in Information Systems focused on software development, databases, networks and technology project management.",
        type: "graduation",
        status: "completed"
    },
    {
        id: "2", 
        title: "Artificial Intelligence and Machine Learning",
        institution: "Cruzeiro do Sul Virtual",
        period: "Sep 2025 - Oct 2026",
        description: "Lato Sensu postgraduate degree in Artificial Intelligence and Machine Learning. Course focused on predictive models, linear and logistic regression, time series analysis, neural networks, deep learning, computer vision and natural language processing.",
        type: "graduation",
        status: "in-progress"
    },
    {
        id: "3",
        title: "Ignite - Front-End | Back-End | Mobile",
        institution: "Rocketseat",
        period: "2021 - 2023",
        description: "Complete bootcamp with specialized tracks in React, React Native, Node.js and modern web and mobile development technologies.",
        type: "bootcamp",
        status: "completed"
    },
    {
        id: "4",
        title: "Business Management",
        institution: "Euro Anglo",
        period: "2017 - 2018",
        description: "Technical course in business management focused on administration, accounting, human resources and business strategies.",
        type: "course",
        status: "completed"
    }
];

export const getFormationsData = (language: string) => {
    return language === 'en' ? formationsDataEn : formationsDataPt;
};

export default formationsDataPt;
