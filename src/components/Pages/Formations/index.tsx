import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Transitions from "@/components/Transitions";
import { getFormationsData } from "./data";
import { formationsTranslations as ptTranslations } from "../../../locales/pt/formations";
import { formationsTranslations as enTranslations } from "../../../locales/en/formations";
import * as S from "./styles";

const Formations: React.FC = () => {
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
    const formationsData = getFormationsData(currentLanguage);
    
    // Ordenar formações do menor ano para o maior
    const sortedFormations = [...formationsData].sort((a, b) => {
        const yearA = parseInt(a.period.split(' - ')[0]) || parseInt(a.period.split(' ')[1]) || 0;
        const yearB = parseInt(b.period.split(' - ')[0]) || parseInt(b.period.split(' ')[1]) || 0;
        return yearA - yearB;
    });
    // Animações
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

    const timelineVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 0.8,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    // Funções auxiliares
    const getStatusText = (status: string): string => {
        const statusMap: Record<string, string> = {
            completed: t.status.completed,
            'in-progress': t.status.inProgress,
            planned: t.status.planned,
        };
        return statusMap[status] || status;
    };

    const getTypeText = (type: string): string => {
        const typeMap: Record<string, string> = {
            graduation: t.types.graduation,
            bootcamp: t.types.bootcamp,
            course: t.types.course,
            certification: t.types.certification,
        };
        return typeMap[type] || type;
    };

    const getInstitutionInitials = (institution: string): string => {
        return institution
            .split(' ')
            .map(word => word.charAt(0).toUpperCase())
            .slice(0, 2)
            .join('');
    };

    return (
        <Transitions>
            <S.FormationsSection>
                <S.Container>
                    <S.Header
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <S.Title variants={itemVariants}>
                            {isClient ? t.title : 'Formação'}
                        </S.Title>
                        <S.Subtitle variants={itemVariants}>
                            {isClient ? t.subtitle : 'Minha jornada acadêmica e profissional'}
                        </S.Subtitle>
                    </S.Header>

                    <S.Timeline
                        variants={timelineVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {sortedFormations.map((formation, index) => (
                            <S.FormationCard
                                key={formation.id}
                                $isLeft={index % 2 === 0}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.2 }}
                            >
                                <S.TimelineDot $status={formation.status} />
                                
                                <S.CardContent
                                    $isLeft={index % 2 === 0}
                                >
                                    <S.CardHeader>
                                        <S.InstitutionLogo>
                                            {getInstitutionInitials(formation.institution)}
                                        </S.InstitutionLogo>
                                        <S.CardInfo>
                                            <S.FormationTitle>
                                                {formation.title}
                                            </S.FormationTitle>
                                            <S.Institution>
                                                {formation.institution}
                                            </S.Institution>
                                            <S.Period>
                                                {formation.period}
                                            </S.Period>
                                        </S.CardInfo>
                                    </S.CardHeader>

                                    {formation.description && (
                                        <S.Description>
                                            {formation.description}
                                        </S.Description>
                                    )}

                                    <div style={{ 
                                        display: 'flex', 
                                        gap: '0.5rem', 
                                        marginTop: '1rem',
                                        flexWrap: 'wrap'
                                    }}>
                                        <S.TypeBadge $type={formation.type}>
                                            {getTypeText(formation.type)}
                                        </S.TypeBadge>
                                        <S.StatusBadge $status={formation.status}>
                                            {getStatusText(formation.status)}
                                        </S.StatusBadge>
                                    </div>
                                </S.CardContent>
                            </S.FormationCard>
                        ))}
                    </S.Timeline>
                </S.Container>
            </S.FormationsSection>
        </Transitions>
    );
};

export default Formations;
