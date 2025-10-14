import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Transitions from "@/components/Transitions";
import { getSkillsData } from "./data";
import { skillsTranslations as ptTranslations } from "../../../locales/pt/skills";
import { skillsTranslations as enTranslations } from "../../../locales/en/skills";
import * as S from "./styles";

type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'framework' | 'tools';

const Skills: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');
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
    const skillsData = getSkillsData(currentLanguage);

    // Filtrar skills baseado na categoria selecionada
    const filteredSkills = useMemo(() => {
        if (activeFilter === 'all') return skillsData;
        return skillsData.filter(skill => skill.category === activeFilter);
    }, [activeFilter, skillsData]);

    // Contar skills por categoria
    const skillStats = useMemo(() => {
        const stats = {
            total: skillsData.length,
            frontend: skillsData.filter(s => s.category === 'frontend').length,
            backend: skillsData.filter(s => s.category === 'backend').length,
            database: skillsData.filter(s => s.category === 'database').length,
            expert: skillsData.filter(s => s.level === 'expert').length,
        };
        return stats;
    }, [skillsData]);

    // Categorias para filtros
    const categories = [
        { key: 'all' as const, label: t.categories.all },
        { key: 'frontend' as const, label: t.categories.frontend },
        { key: 'backend' as const, label: t.categories.backend },
        { key: 'database' as const, label: t.categories.database },
        { key: 'framework' as const, label: t.categories.framework },
        { key: 'tools' as const, label: t.categories.tools },
    ];

    // Animações
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.3,
            },
        },
    };

    const formatCategoryName = (category: string): string => {
        const categoryMap: Record<string, string> = {
            frontend: t.categories.frontend,
            backend: t.categories.backend,
            database: t.categories.database,
            framework: t.categories.framework,
            tools: t.categories.tools,
        };
        return categoryMap[category] || category;
    };

    const getLevelText = (level: string): string => {
        const levelMap: Record<string, string> = {
            beginner: t.levels.beginner,
            intermediate: t.levels.intermediate,
            advanced: t.levels.advanced,
            expert: t.levels.expert,
        };
        return levelMap[level] || level;
    };

    return (
        <Transitions>
            <S.SkillsSection>
                <S.Container>
                    <S.Header
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <S.Title variants={itemVariants}>
                            {isClient ? t.title : 'Habilidades'}
                        </S.Title>
                        <S.Subtitle variants={itemVariants}>
                            {isClient ? t.subtitle : 'Tecnologias e ferramentas que utilizo'}
                        </S.Subtitle>

                        <S.FilterContainer variants={itemVariants}>
                            {categories.map((category) => (
                                <S.FilterButton
                                    key={category.key}
                                    $isActive={activeFilter === category.key}
                                    onClick={() => setActiveFilter(category.key)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {category.label}
                                </S.FilterButton>
                            ))}
                        </S.FilterContainer>
                    </S.Header>

                    <S.SkillsGrid
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        layout
                    >
                        {filteredSkills.map((skill, index) => (
                            <S.SkillCard
                                key={skill.title}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                whileHover={{ scale: 1.02 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <S.SkillHeader>
                                    <S.SkillIcon>
                                        <img 
                                            src={skill.logo} 
                                            alt={`${skill.title} icon`}
                                            loading="lazy"
                                        />
                                    </S.SkillIcon>
                                    <S.SkillInfo>
                                        <S.SkillTitle>{skill.title}</S.SkillTitle>
                                        <S.SkillCategory>
                                            {formatCategoryName(skill.category || 'other')}
                                        </S.SkillCategory>
                                    </S.SkillInfo>
                                </S.SkillHeader>
                                
                                <S.SkillDescription>
                                    {skill.description}
                                </S.SkillDescription>

                                {skill.level && (
                                    <S.SkillLevel>
                                        <S.LevelLabel>
                                            {getLevelText(skill.level)}
                                        </S.LevelLabel>
                                        <S.LevelBar>
                                            <S.LevelProgress
                                                $level={skill.level}
                                                initial={{ width: 0 }}
                                                animate={{ 
                                                    width: skill.level === 'expert' ? '100%' :
                                                           skill.level === 'advanced' ? '75%' :
                                                           skill.level === 'intermediate' ? '50%' : '25%'
                                                }}
                                                transition={{ 
                                                    duration: 1,
                                                    delay: index * 0.1 + 0.5,
                                                    ease: 'easeOut'
                                                }}
                                            />
                                        </S.LevelBar>
                                    </S.SkillLevel>
                                )}
                            </S.SkillCard>
                        ))}
                    </S.SkillsGrid>

                    <S.StatsSection
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <S.StatCard
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <S.StatNumber>{skillStats.total}+</S.StatNumber>
                            <S.StatLabel>{isClient ? t.stats.technologies : 'Tecnologias'}</S.StatLabel>
                        </S.StatCard>

                        <S.StatCard
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 }}
                        >
                            <S.StatNumber>{skillStats.expert}</S.StatNumber>
                            <S.StatLabel>{isClient ? t.stats.expertLevel : 'Nível Expert'}</S.StatLabel>
                        </S.StatCard>

                        <S.StatCard
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.0 }}
                        >
                            <S.StatNumber>3+</S.StatNumber>
                            <S.StatLabel>{isClient ? t.stats.experience : 'Anos de Experiência'}</S.StatLabel>
                        </S.StatCard>

                        <S.StatCard
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 }}
                        >
                            <S.StatNumber>50+</S.StatNumber>
                            <S.StatLabel>{isClient ? t.stats.projects : 'Projetos Concluídos'}</S.StatLabel>
                        </S.StatCard>
                    </S.StatsSection>
                </S.Container>
            </S.SkillsSection>
        </Transitions>
    );
};

export default Skills;
