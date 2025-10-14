import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { getNavigationData } from "./data";
import * as S from "./styles";

// Dynamic import do LanguageSelector para evitar problemas de hidratação
const LanguageSelector = dynamic(() => import("@/components/LanguageSelector"), {
    ssr: false,
    loading: () => (
        <div style={{ width: '80px', height: '40px' }}></div>
    )
});

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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

    // Função de tradução simples baseada no idioma atual
    const t = (key: string, fallback: string) => {
        if (!isClient) return fallback;
        
        const translations: Record<string, Record<string, string>> = {
            pt: {
                'nav.home': 'Início',
                'nav.skills': 'Habilidades', 
                'nav.formations': 'Formação',
                'nav.projects': 'Projetos',
                'nav.social': 'Redes Sociais',
                'nav.contact': 'Contato'
            },
            en: {
                'nav.home': 'Home',
                'nav.skills': 'Skills',
                'nav.formations': 'Education', 
                'nav.projects': 'Projects',
                'nav.social': 'Social Networks',
                'nav.contact': 'Contact'
            }
        };
        
        return translations[currentLanguage]?.[key] || fallback;
    };

    const navigationData = getNavigationData(t);

    // Controlar scroll para efeito de blur no header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fechar menu mobile ao navegar
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [router.pathname]);

    // Bloquear scroll quando menu mobile estiver aberto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLogoClick = () => {
        router.push('/');
    };

    // Animações para o menu mobile
    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.2,
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
        open: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };

    const mobileItemVariants = {
        closed: { opacity: 0, y: 20 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <>
            <S.HeaderContainer
                className={isScrolled ? 'scrolled' : ''}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <S.HeaderContent>
                    <S.LogoContainer
                        onClick={handleLogoClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <S.LogoImage
                            src="https://avatars.githubusercontent.com/u/54690671?v=6"
                            alt="Higor Henrique"
                            width={50}
                            height={50}
                            priority
                        />
                        <S.LogoText>Higor Henrique</S.LogoText>
                    </S.LogoContainer>

                    {/* Menu Desktop */}
                    <S.Navigation>
                        <S.NavList>
                            {navigationData.map((item, index) => (
                                <S.NavItem
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <S.NavLink
                                        href={item.link}
                                        className={router.pathname === item.link ? 'active' : ''}
                                    >
                                        <item.icon />
                                        <span>{item.name}</span>
                                    </S.NavLink>
                                </S.NavItem>
                            ))}
                        </S.NavList>
                        
                        {/* Seletor de Idioma */}
                        <LanguageSelector />
                    </S.Navigation>

                    {/* Botão Menu Mobile */}
                    <S.MobileMenuButton
                        onClick={toggleMobileMenu}
                        $isOpen={isMobileMenuOpen}
                        whileTap={{ scale: 0.9 }}
                    >
                        <S.MenuLine $isOpen={isMobileMenuOpen} />
                        <S.MenuLine $isOpen={isMobileMenuOpen} />
                        <S.MenuLine $isOpen={isMobileMenuOpen} />
                    </S.MobileMenuButton>
                </S.HeaderContent>
            </S.HeaderContainer>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <S.MobileMenuOverlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMobileMenu}
                        />
                        <S.MobileMenu
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <S.MobileNavList>
                                {navigationData.map((item, index) => (
                                    <S.MobileNavItem
                                        key={item.name}
                                        variants={mobileItemVariants}
                                    >
                                        <S.MobileNavLink href={item.link}>
                                            <item.icon />
                                            <span>{item.name}</span>
                                        </S.MobileNavLink>
                                    </S.MobileNavItem>
                                ))}
                                
                                {/* Seletor de Idioma no Mobile */}
                                <S.MobileNavItem variants={mobileItemVariants}>
                                    <LanguageSelector />
                                </S.MobileNavItem>
                            </S.MobileNavList>
                        </S.MobileMenu>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
