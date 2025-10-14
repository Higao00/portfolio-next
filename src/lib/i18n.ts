import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      navigation: {
        home: "Início",
        skills: "Habilidades", 
        formations: "Formação",
        projects: "Projetos",
        socialNetworks: "Redes Sociais",
        contact: "Contato"
      },
      common: {
        loading: "Carregando...",
        error: "Erro",
        success: "Sucesso",
        close: "Fechar",
        back: "Voltar",
        next: "Próximo",
        submit: "Enviar",
        cancel: "Cancelar",
        viewMore: "Ver Mais",
        viewLess: "Ver Menos",
        learnMore: "Saiba Mais"
      },
      home: {
        greeting: "Olá, eu sou",
        name: "Higor Henrique",
        title: "Desenvolvedor Full Stack",
        description: "Especializado em criar soluções web modernas e escaláveis utilizando as tecnologias mais atuais do mercado. Transformo ideias em experiências digitais incríveis.",
        contactButton: "Entre em Contato",
        projectsButton: "Ver Projetos",
        exploreWork: "Explore meu trabalho",
        stats: {
          projects: "Projetos",
          experience: "Anos Exp.",
          technologies: "Tecnologias",
          satisfaction: "Satisfação"
        }
      },
      skills: {
        title: "Minhas Habilidades",
        subtitle: "Tecnologias e ferramentas que domino",
        categories: {
          all: "Todas",
          frontend: "Frontend",
          backend: "Backend", 
          database: "Banco de Dados",
          tools: "Ferramentas",
          mobile: "Mobile"
        },
        levels: {
          beginner: "Iniciante",
          intermediate: "Intermediário", 
          advanced: "Avançado",
          expert: "Expert"
        }
      },
      formations: {
        title: "Minha Formação",
        subtitle: "Educação e certificações que moldaram minha carreira",
        types: {
          graduation: "Graduação",
          course: "Curso",
          certification: "Certificação",
          bootcamp: "Bootcamp"
        },
        status: {
          completed: "Concluído",
          inProgress: "Em Andamento",
          planned: "Planejado"
        }
      },
      projects: {
        title: "Meus Projetos",
        subtitle: "Alguns dos trabalhos que desenvolvi",
        categories: {
          all: "Todos",
          web: "Web",
          mobile: "Mobile",
          desktop: "Desktop",
          ecommerce: "E-commerce",
          institutional: "Institucional"
        },
        status: {
          active: "Ativo",
          development: "Em Desenvolvimento",
          completed: "Concluído",
          archived: "Arquivado"
        },
        buttons: {
          viewProject: "Ver Projeto",
          viewCode: "Ver Código",
          viewDemo: "Ver Demo"
        }
      },
      socialNetworks: {
        title: "Redes Sociais",
        subtitle: "Conecte-se comigo nas redes sociais",
        description: "Siga-me para acompanhar meu trabalho e novidades do mundo da tecnologia"
      },
      contact: {
        title: "Entre em Contato",
        subtitle: "Vamos conversar sobre seu próximo projeto",
        form: {
          title: "Envie uma Mensagem",
          description: "Preencha o formulário abaixo que retorno o mais breve possível. Todos os campos são obrigatórios.",
          name: "Nome",
          email: "E-mail",
          subject: "Assunto",
          message: "Mensagem",
          namePlaceholder: "Seu nome completo",
          emailPlaceholder: "seu@email.com",
          subjectPlaceholder: "Assunto da mensagem",
          messagePlaceholder: "Descreva seu projeto ou dúvida...",
          send: "Enviar Mensagem",
          sending: "Enviando...",
          success: "Mensagem enviada com sucesso!",
          error: "Erro ao enviar mensagem. Tente novamente."
        },
        info: {
          email: "E-mail",
          phone: "Telefone",
          location: "Localização",
          availability: "Disponibilidade",
          whatsappDesc: "Resposta rápida durante horário comercial",
          emailDesc: "Para propostas formais e documentos",
          phoneDesc: "Ligações por agendamento",
          sendMessage: "Enviar mensagem",
          sendEmail: "Enviar e-mail",
          callNow: "Ligar agora"
        },
        stats: {
          responseTime: "Tempo de resposta",
          returnRate: "Taxa de retorno",
          contactMethods: "Formas de contato"
        }
      }
    }
  },
  en: {
    translation: {
      navigation: {
        home: "Home",
        skills: "Skills",
        formations: "Education", 
        projects: "Projects",
        socialNetworks: "Social Networks",
        contact: "Contact"
      },
      common: {
        loading: "Loading...",
        error: "Error",
        success: "Success", 
        close: "Close",
        back: "Back",
        next: "Next",
        submit: "Submit",
        cancel: "Cancel",
        viewMore: "View More",
        viewLess: "View Less",
        learnMore: "Learn More"
      },
      home: {
        greeting: "Hello, I'm",
        name: "Higor Henrique",
        title: "Full Stack Developer", 
        description: "Specialized in creating modern and scalable web solutions using the latest market technologies. I transform ideas into incredible digital experiences.",
        contactButton: "Get in Touch",
        projectsButton: "View Projects",
        exploreWork: "Explore my work",
        stats: {
          projects: "Projects",
          experience: "Years Exp.",
          technologies: "Technologies",
          satisfaction: "Satisfaction"
        }
      },
      skills: {
        title: "My Skills",
        subtitle: "Technologies and tools I master",
        categories: {
          all: "All",
          frontend: "Frontend",
          backend: "Backend",
          database: "Database",
          tools: "Tools", 
          mobile: "Mobile"
        },
        levels: {
          beginner: "Beginner",
          intermediate: "Intermediate",
          advanced: "Advanced", 
          expert: "Expert"
        }
      },
      formations: {
        title: "My Education",
        subtitle: "Education and certifications that shaped my career",
        types: {
          graduation: "Graduation",
          course: "Course",
          certification: "Certification",
          bootcamp: "Bootcamp"
        },
        status: {
          completed: "Completed",
          inProgress: "In Progress",
          planned: "Planned"
        }
      },
      projects: {
        title: "My Projects",
        subtitle: "Some of the work I've developed",
        categories: {
          all: "All",
          web: "Web",
          mobile: "Mobile", 
          desktop: "Desktop",
          ecommerce: "E-commerce",
          institutional: "Institutional"
        },
        status: {
          active: "Active",
          development: "In Development",
          completed: "Completed",
          archived: "Archived"
        },
        buttons: {
          viewProject: "View Project",
          viewCode: "View Code",
          viewDemo: "View Demo"
        }
      },
      socialNetworks: {
        title: "Social Networks",
        subtitle: "Connect with me on social media",
        description: "Follow me to keep up with my work and tech world news"
      },
      contact: {
        title: "Get in Touch", 
        subtitle: "Let's talk about your next project",
        form: {
          title: "Send a Message",
          description: "Fill out the form below and I'll get back to you as soon as possible. All fields are required.",
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          namePlaceholder: "Your full name",
          emailPlaceholder: "your@email.com",
          subjectPlaceholder: "Message subject",
          messagePlaceholder: "Describe your project or question...",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Error sending message. Please try again."
        },
        info: {
          email: "Email",
          phone: "Phone",
          location: "Location",
          availability: "Availability",
          whatsappDesc: "Quick response during business hours",
          emailDesc: "For formal proposals and documents",
          phoneDesc: "Calls by appointment",
          sendMessage: "Send message",
          sendEmail: "Send email",
          callNow: "Call now"
        },
        stats: {
          responseTime: "Response time",
          returnRate: "Return rate",
          contactMethods: "Contact methods"
        }
      }
    }
  }
};const isClient = typeof window !== 'undefined';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Sempre iniciar com PT no servidor
    fallbackLng: 'pt',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },
  });

// Salvar idioma no localStorage quando mudar (apenas no cliente)
if (isClient) {
  // No cliente, carregar o idioma salvo após a hidratação
  const savedLanguage = localStorage.getItem('language') || 'pt';
  if (savedLanguage !== i18n.language) {
    i18n.changeLanguage(savedLanguage);
  }
  
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
  });
}

export default i18n;