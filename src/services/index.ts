import emailjs from "@emailjs/browser";

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message?: string;
}

export const SendEmail = async (template: EmailData): Promise<boolean> => {
  try {
    // Configuração do EmailJS - substitua pelos seus valores reais
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

    // Dados do template para o EmailJS
    const templateParams = {
      from_name: template.name,
      from_email: template.email,
      subject: template.subject,
      message: template.message || `Assunto: ${template.subject}\n\nContato de: ${template.name} (${template.email})`,
      to_email: 'freitashigor@hotmail.com', // Seu e-mail de destino
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    console.log('E-mail enviado com sucesso:', response);
    return response.status === 200;
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return false;
  }
};

// Inicialização do EmailJS (opcional, mas recomendado)
export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (publicKey) {
    emailjs.init(publicKey);
  }
};
