import React, { useState, useEffect } from 'react';
import { Web, Code, Launch, Business, DeveloperMode } from '@mui/icons-material';
import Transitions from '@/components/Transitions';
import { getProjectsData, Project } from './data';
import { projectsTranslations as ptTranslations } from "../../../locales/pt/projects";
import { projectsTranslations as enTranslations } from "../../../locales/en/projects";
import {
  ProjectsSection,
  Container,
  Header,
  Title,
  Subtitle,
  FilterTabs,
  FilterTab,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectImageIcon,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTechnologies,
  TechTag,
  ProjectFooter,
  ProjectStatus,
  ProjectLink,
  ProjectStats,
  StatCard,
  StatNumber,
  StatLabel
} from './styles';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [currentLanguage, setCurrentLanguage] = useState('pt');
  const [isClient, setIsClient] = useState(false);

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
  const projectsData = getProjectsData(currentLanguage);

  const filters = [
    { id: 'all', label: t.categories.all, icon: <Code /> },
    { id: 'website', label: t.categories.web, icon: <Web /> },
    { id: 'system', label: t.categories.system, icon: <DeveloperMode /> },
    { id: 'landing', label: t.categories.landing, icon: <Business /> },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const getProjectIcon = (category: Project['category']) => {
    switch (category) {
      case 'website':
        return <Web />;
      case 'system':
        return <DeveloperMode />;
      case 'landing':
        return <Business />;
      default:
        return <Code />;
    }
  };

  const getStatusLabel = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return t.status.active;
      case 'development':
        return t.status.development;
      case 'completed':
        return t.status.completed;
      default:
        return 'Status';
    }
  };

  const stats = [
    { number: projectsData.length.toString(), label: t.title },
    { number: projectsData.filter(p => p.status === 'active').length.toString(), label: t.status.active },
    { number: '100%', label: t.stats.satisfaction },
    { number: '3+', label: t.stats.experience }
  ];

  return (
    <Transitions>
      <ProjectsSection>
        <Container>
          <Header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {isClient ? t.title : 'Projetos'}
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isClient ? t.subtitle : 'Alguns dos projetos que desenvolvi'}
            </Subtitle>
          </Header>

          <FilterTabs
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {filters.map((filter) => (
              <FilterTab
                key={filter.id}
                $active={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </FilterTab>
            ))}
          </FilterTabs>

          <ProjectsGrid
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                <ProjectImage>
                  <ProjectImageIcon>
                    {getProjectIcon(project.category)}
                  </ProjectImageIcon>
                </ProjectImage>

                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <ProjectTechnologies>
                    {project.technologies.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </ProjectTechnologies>

                  <ProjectFooter>
                    <ProjectStatus $status={project.status}>
                      {getStatusLabel(project.status)}
                    </ProjectStatus>
                    <ProjectLink
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Launch />
                      {isClient ? t.buttons.visit : 'Visitar'}
                    </ProjectLink>
                  </ProjectFooter>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          <ProjectStats
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </ProjectStats>
        </Container>
      </ProjectsSection>
    </Transitions>
  );
}
