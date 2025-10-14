import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Send, Error as ErrorIcon } from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SendEmail, EmailData } from '../../services';
import { contactTranslations as ptTranslations } from "../../locales/pt/contact";
import { contactTranslations as enTranslations } from "../../locales/en/contact";

// Dynamic imports para reduzir bundle
const FormControl = dynamic(() => import('@mui/material/FormControl'), { ssr: false });
const InputLabel = dynamic(() => import('@mui/material/InputLabel'), { ssr: false });
const MenuItem = dynamic(() => import('@mui/material/MenuItem'), { ssr: false });
const Select = dynamic(() => import('@mui/material/Select'), { ssr: false });

import {
  FormWrapper,
  Form,
  InputGroup,
  StyledTextField,
  TextArea,
  ErrorMessage,
  SubmitButton,
  FormGrid,
  FullWidthField,
  FormFooter,
  PrivacyNote
} from './styles';

interface IFormContact {
  openNotification: () => void;
}

const FormContact = (props: IFormContact) => {
  const [loadingButtonSubmit, setLoadingButtonSubmit] = useState(false);
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailData>();

  const onSubmit: SubmitHandler<EmailData> = async (data: EmailData) => {
    setLoadingButtonSubmit(true);
    
    try {
      const success = await SendEmail(data);
      
      if (success) {
        reset();
        props.openNotification();
      } else {
        console.error('Falha ao enviar e-mail');
        // Aqui você pode adicionar uma notificação de erro
      }
    } catch (error) {
      console.error('Erro no envio:', error);
    } finally {
      setLoadingButtonSubmit(false);
    }
  };

  const subjects = [
    { value: 'Development', label: t.form.subjects.development },
    { value: 'Personal contact', label: t.form.subjects.personal },
    { value: 'Help with programming', label: t.form.subjects.help },
    { value: 'Job vacancy', label: t.form.subjects.job },
  ];  return (
    <FormWrapper>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FormGrid>
          <InputGroup
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <StyledTextField
              fullWidth
              label={isClient ? t.form.name : "Nome Completo"}
              variant="outlined"
              placeholder={isClient ? t.form.namePlaceholder : "Seu nome completo"}
              {...register('name', { 
                required: isClient ? (currentLanguage === 'en' ? 'Name is required' : 'Nome é obrigatório') : 'Nome é obrigatório',
                minLength: { value: 2, message: isClient ? (currentLanguage === 'en' ? 'Name must be at least 2 characters' : 'Nome deve ter pelo menos 2 caracteres') : 'Nome deve ter pelo menos 2 caracteres' }
              })}
              error={!!errors.name}
            />
            {errors.name && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ErrorIcon fontSize="small" />
                {errors.name.message}
              </ErrorMessage>
            )}
          </InputGroup>

          <InputGroup
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StyledTextField
              fullWidth
              label={isClient ? t.form.email : "E-mail"}
              variant="outlined"
              type="email"
              placeholder={isClient ? t.form.emailPlaceholder : "seu@email.com"}
              {...register('email', { 
                required: isClient ? (currentLanguage === 'en' ? 'Email is required' : 'E-mail é obrigatório') : 'E-mail é obrigatório',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: isClient ? (currentLanguage === 'en' ? 'Invalid email' : 'E-mail inválido') : 'E-mail inválido'
                }
              })}
              error={!!errors.email}
            />
            {errors.email && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ErrorIcon fontSize="small" />
                {errors.email.message}
              </ErrorMessage>
            )}
          </InputGroup>
        </FormGrid>

        <FullWidthField>
          <InputGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FormControl fullWidth error={!!errors.subject}>
              <InputLabel>{isClient ? t.form.subject : "Assunto"}</InputLabel>
              <Select
                label={isClient ? t.form.subject : "Assunto"}
                {...register('subject', { required: isClient ? (currentLanguage === 'en' ? 'Subject is required' : 'Assunto é obrigatório') : 'Assunto é obrigatório' })}
                defaultValue=""
                sx={{
                  background: '#f8fafc',
                  borderRadius: '12px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e2e8f0',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3b82f6',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#2563eb',
                    borderWidth: '2px',
                  },
                }}
              >
                {subjects.map((subject) => (
                  <MenuItem key={subject.value} value={subject.value}>
                    {subject.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors.subject && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ErrorIcon fontSize="small" />
                {errors.subject.message}
              </ErrorMessage>
            )}
          </InputGroup>
        </FullWidthField>

        <FullWidthField>
          <InputGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TextArea
              fullWidth
              label={isClient ? t.form.message : "Mensagem"}
              variant="outlined"
              multiline
              rows={4}
              placeholder={isClient ? t.form.messagePlaceholder : "Descreva seu projeto ou necessidade..."}
              {...register('message', { 
                required: isClient ? (currentLanguage === 'en' ? 'Message is required' : 'Mensagem é obrigatória') : 'Mensagem é obrigatória',
                minLength: { value: 10, message: isClient ? (currentLanguage === 'en' ? 'Message must be at least 10 characters' : 'Mensagem deve ter pelo menos 10 caracteres') : 'Mensagem deve ter pelo menos 10 caracteres' }
              })}
              error={!!errors.message}
            />
            {errors.message && (
              <ErrorMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ErrorIcon fontSize="small" />
                {errors.message.message}
              </ErrorMessage>
            )}
          </InputGroup>
        </FullWidthField>

        <FormFooter>
          <SubmitButton
            type="submit"
            loading={loadingButtonSubmit}
            loadingPosition="start"
            startIcon={<Send />}
            variant="contained"
            fullWidth
            size="large"
            disabled={loadingButtonSubmit}
          >
            {loadingButtonSubmit ? (isClient ? t.form.sending : 'Enviando...') : (isClient ? t.form.send : 'Enviar Mensagem')}
          </SubmitButton>
          
          <PrivacyNote>
            {isClient ? (currentLanguage === 'en' ? 'Your data is protected and used only to respond to your message. Guaranteed response within 24 hours.' : 'Seus dados são protegidos e utilizados apenas para responder sua mensagem. Retorno garantido em até 24 horas.') : 'Seus dados são protegidos e utilizados apenas para responder sua mensagem. Retorno garantido em até 24 horas.'}
          </PrivacyNote>
        </FormFooter>
      </Form>
    </FormWrapper>
  );
};

export default FormContact;
