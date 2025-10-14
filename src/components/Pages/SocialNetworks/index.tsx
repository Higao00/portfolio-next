import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as Icons from "@mui/icons-material";
import Transitions from "@/components/Transitions";
import socialNetworksData from "./data";
import { socialNetworksTranslations as ptTranslations } from "../../../locales/pt/social-networks";
import { socialNetworksTranslations as enTranslations } from "../../../locales/en/social-networks";
import * as S from "./styles";

const SocialNetworks: React.FC = () => {
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
    };

    // Função para abrir link
    const handleOpenLink = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Transitions>
            <S.SocialSection>
                <S.Container>
                    <S.Header
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <S.Title variants={itemVariants}>
                            {isClient ? t.title : 'Redes Sociais'}
                        </S.Title>
                        <S.Subtitle variants={itemVariants}>
                            {isClient ? t.subtitle : 'Conecte-se comigo nas redes sociais'}
                        </S.Subtitle>
                    </S.Header>

                    <S.SocialGrid
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {socialNetworksData.map((social, index) => (
                            <S.SocialCard
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={cardVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <S.IconContainer $platform={social.name}>
                                    <social.icon />
                                </S.IconContainer>
                                
                                <S.SocialInfo>
                                    <S.SocialName>{social.name}</S.SocialName>
                                    <S.SocialUsername>{social.username}</S.SocialUsername>
                                </S.SocialInfo>
                            </S.SocialCard>
                        ))}
                    </S.SocialGrid>

                    <S.QuickActions
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <S.QuickActionButton
                            href={currentLanguage === 'en' 
                                ? "https://wa.me/5516993031255?text=Hello! I saw your portfolio and would like to talk about opportunities."
                                : "https://wa.me/5516993031255?text=Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades."
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icons.WhatsApp />
                            {isClient ? t.buttons.whatsapp : 'Chamar no WhatsApp'}
                        </S.QuickActionButton>

                        <S.QuickActionButton
                            href={currentLanguage === 'en'
                                ? "mailto:freitashigor@hotmail.com?subject=Contact via Portfolio&body=Hello Higor! I saw your portfolio and would like to talk."
                                : "mailto:freitashigor@hotmail.com?subject=Contato via Portfólio&body=Olá Higor! Vi seu portfólio e gostaria de conversar."
                            }
                            className="email"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icons.Email />
                            {isClient ? t.buttons.email : 'Enviar Email'}
                        </S.QuickActionButton>
                    </S.QuickActions>

                    <S.ConnectButton
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleOpenLink('/contacts')}
                    >
                        <S.ConnectText>
                            {isClient ? t.contactForm : '💬 Ou use o formulário de contato para uma mensagem mais detalhada'}
                        </S.ConnectText>
                    </S.ConnectButton>
                </S.Container>
            </S.SocialSection>
        </Transitions>
    );
};

export default SocialNetworks;
