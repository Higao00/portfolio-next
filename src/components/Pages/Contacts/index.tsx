import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Alert, Snackbar, Stack } from '@mui/material';
import { WhatsApp, Email, Phone, Send } from '@mui/icons-material';
import Transitions from '@/components/Transitions';
import { contactTranslations as ptTranslations } from "../../../locales/pt/contact";
import { contactTranslations as enTranslations } from "../../../locales/en/contact";

// Lazy loading do formulário para reduzir bundle inicial
const FormContact = lazy(() => import('../../FormContact'));

import {
  ContactSection,
  Container,
  Header,
  Title,
  Subtitle,
  ContactGrid,
  ContactInfo,
  ContactCard,
  ContactMethod,
  ContactIcon,
  ContactDetails,
  ContactTitle,
  ContactValue,
  ContactDescription,
  ContactAction,
  FormContainer,
  FormTitle,
  FormDescription,
  ContactStats,
  StatCard,
  StatNumber,
  StatLabel
} from './styles';

const Contact = () => {
  const [notification, setNotification] = useState(false);
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

  const handleClose = () => {
    setNotification(false);
  };

  const handleOpen = () => {
    setNotification(true);
  };

  const contactMethods = [
    {
      type: 'whatsapp',
      icon: <WhatsApp />,
      title: t.methods.whatsapp,
      value: '+55 16 99303-1255',
      description: t.info.whatsappDesc,
      action: 'https://wa.me/5516993031255',
      actionText: t.info.sendMessage
    },
    {
      type: 'email',
      icon: <Email />,
      title: t.info.email,
      value: 'freitashigor@hotmail.com',
      description: t.info.emailDesc,
      action: 'mailto:freitashigor@hotmail.com',
      actionText: t.info.sendEmail
    },
    {
      type: 'phone',
      icon: <Phone />,
      title: t.info.phone,
      value: '+55 16 99303-1255',
      description: t.info.phoneDesc,
      action: 'tel:+5516993031255',
      actionText: t.info.callNow
    }
  ];

  const stats = [
    { number: '24h', label: t.stats.responseTime },
    { number: '100%', label: t.stats.returnRate },
    { number: '3+', label: t.stats.contactMethods }
  ];

  return (
    <Transitions>
      <ContactSection>
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
              {isClient ? t.title : 'Entre em Contato'}
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isClient ? t.subtitle : 'Vamos conversar sobre seu próximo projeto?'}
            </Subtitle>
          </Header>

          <ContactGrid
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ContactInfo>
              {contactMethods.map((method, index) => (
                <ContactCard
                  key={method.type}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <ContactMethod>
                    <ContactIcon $type={method.type}>
                      {method.icon}
                    </ContactIcon>
                    <ContactDetails>
                      <ContactTitle>{method.title}</ContactTitle>
                      <ContactValue>{method.value}</ContactValue>
                      <ContactDescription>{method.description}</ContactDescription>
                    </ContactDetails>
                  </ContactMethod>
                  <ContactAction
                    href={method.action}
                    target={method.type === 'whatsapp' ? '_blank' : undefined}
                    rel={method.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  >
                    <Send />
                    {method.actionText}
                  </ContactAction>
                </ContactCard>
              ))}
            </ContactInfo>

            <FormContainer
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <FormTitle>{isClient ? t.form.title : 'Envie uma Mensagem'}</FormTitle>
              <FormDescription>
                {isClient ? t.form.description : 'Preencha o formulário abaixo que retorno o mais breve possível.'}
              </FormDescription>
              <Suspense fallback={<div>Carregando...</div>}>
                <FormContact openNotification={handleOpen} />
              </Suspense>
            </FormContainer>
          </ContactGrid>

          <ContactStats
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
          </ContactStats>
        </Container>
      </ContactSection>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={notification} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            {isClient ? (currentLanguage === 'en' ? 'Thank you! I will contact you soon! 👏👏👏' : 'Obrigado! Entrarei em contato em breve! 👏👏👏') : 'Obrigado! Entrarei em contato em breve! 👏👏👏'}
          </Alert>
        </Snackbar>
      </Stack>
    </Transitions>
  );
};

export default Contact;
