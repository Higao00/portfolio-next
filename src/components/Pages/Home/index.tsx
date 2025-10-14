import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Button } from '@/components/UI';
import Transitions from '@/components/Transitions';
import { homeTranslations as ptTranslations } from "../../../locales/pt/home";
import { homeTranslations as enTranslations } from "../../../locales/en/home";
import * as S from './styles';

// Ícones para elementos flutuantes
const TechIcons = ['⚛️', '🔥', '💻', '🚀', '⚡', '🎯', '🛠️', '📱'];

const Home: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem('i18nextLng') || 'pt';
    setCurrentLanguage(savedLanguage);

    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem('i18nextLng') || 'pt';
      setCurrentLanguage(newLanguage);
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  const t = currentLanguage === 'en' ? enTranslations : ptTranslations;

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Estatísticas (você pode conectar com APIs reais)
  const stats = [
    { number: '50+', label: isClient ? t.stats.projects : 'Projetos' },
    { number: '3+', label: isClient ? t.stats.experience : 'Anos Exp.' },
    { number: '15+', label: isClient ? t.stats.technologies : 'Tecnologias' },
    { number: '100%', label: isClient ? t.stats.satisfaction : 'Satisfação' },
  ];

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Transitions>
      <S.HeroSection>
        {/* Elementos flutuantes */}
        <S.FloatingElements>
          {TechIcons.map((icon, index) => (
            <S.FloatingIcon
              key={index}
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${index * 0.5}s`,
              }}
            >
              {icon}
            </S.FloatingIcon>
          ))}
        </S.FloatingElements>

        <S.HeroContainer>
          <S.HeroContent
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <S.HeroGreeting variants={itemVariants}>
              {isClient ? t.greeting : "Olá, eu sou"}
            </S.HeroGreeting>

            <S.HeroTitle variants={itemVariants}>
              {isClient ? t.name : "Higor Henrique"}
            </S.HeroTitle>

            <S.HeroSubtitle variants={itemVariants}>
              {isClient ? t.title : "Desenvolvedor Full Stack"}
            </S.HeroSubtitle>

            <S.HeroDescription variants={itemVariants}>
              {isClient ? t.description : "Especializado em criar soluções web modernas"}
            </S.HeroDescription>

            <S.HeroButtons variants={itemVariants}>
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => router.push('/contacts')}
              >
                {isClient ? t.contactButton : "Entre em Contato"}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => router.push('/projects')}
              >
                {isClient ? t.projectsButton : "Ver Projetos"}
              </Button>
            </S.HeroButtons>
          </S.HeroContent>

          <S.HeroVisual
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <S.ProfileImageContainer
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <S.ProfileImage
                src="https://avatars.githubusercontent.com/u/54690671?v=6"
                alt="Higor Henrique - Desenvolvedor Full Stack"
                width={300}
                height={300}
                priority
              />
            </S.ProfileImageContainer>

            <S.StatsGrid variants={itemVariants}>
              {stats.map((stat, index) => (
                <S.StatCard
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.8 + index * 0.1 }
                  }}
                >
                  <S.StatNumber>{stat.number}</S.StatNumber>
                  <S.StatLabel>{stat.label}</S.StatLabel>
                </S.StatCard>
              ))}
            </S.StatsGrid>
          </S.HeroVisual>
        </S.HeroContainer>

        <S.ScrollIndicator
          onClick={scrollToProjects}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 1.5 }
          }}
        >
          <div>{isClient ? t.exploreWork : "Explore meu trabalho"}</div>
          <S.ScrollArrow
            animate={{ 
              y: [0, 10, 0],
              transition: { 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          >
            ↓
          </S.ScrollArrow>
        </S.ScrollIndicator>
      </S.HeroSection>
    </Transitions>
  );
};

export default Home;
