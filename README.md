
# **Portfólio Next.js**

## **Descrição do Projeto**
O **Portfólio Next.js** é um site criado para exibir projetos e habilidades profissionais. Ele utiliza tecnologias modernas como Next.js, Styled Components, Material-UI e Framer Motion. O site foi projetado para ser estático, garantindo maior desempenho e escalabilidade. O deploy é feito diretamente na AWS S3.

---

## **Dependências do Projeto**

### **Dependências de Produção**
| Dependência               | Versão      | Descrição                                                                 |
|---------------------------|-------------|---------------------------------------------------------------------------|
| `@emailjs/browser`        | `^4.4.1`    | Biblioteca para envio de e-mails diretamente do navegador.               |
| `@emotion/react`          | `^11.13.5`  | Biblioteca para estilização dinâmica com suporte a Material-UI.          |
| `@emotion/styled`         | `^11.13.5`  | API para criar componentes estilizados com Emotion.                      |
| `@mui/icons-material`     | `^5.10.3`   | Coleção de ícones para uso com Material-UI.                               |
| `@mui/lab`                | `^5.0.0-alpha.101` | Componentes experimentais para Material-UI.                              |
| `@mui/material`           | `^5.10.3`   | Biblioteca de componentes para design com Material-UI.                   |
| `framer-motion`           | `^11.13.1`  | Biblioteca para animações declarativas no React.                         |
| `next`                    | `^15.0.3`   | Framework para React com suporte a renderização no lado do servidor (SSR).|
| `react`                   | `^18.3.1`   | Biblioteca principal para construção da interface.                       |
| `react-dom`               | `^18.3.1`   | Biblioteca para manipulação do DOM em projetos React.                    |
| `react-hook-form`         | `^7.53.2`   | Gerenciamento de formulários e validações.                               |
| `styled-components`       | `^6.1.13`   | Biblioteca para estilização baseada em componentes.                      |

### **Dependências de Desenvolvimento**
| Dependência               | Versão      | Descrição                                                                |
|---------------------------|-------------|---------------------------------------------------------------------------|
| `@types/node`             | `^20.17.9`  | Tipos do Node.js para TypeScript.                                        |
| `@types/react`            | `^18.3.12`  | Tipos do React para TypeScript.                                          |
| `@types/react-dom`        | `^18`       | Tipos do React DOM para TypeScript.                                      |
| `@types/styled-components`| `^5.1.34`   | Tipos para a biblioteca Styled Components.                               |
| `typescript`              | `^5`        | Superset do JavaScript para adicionar tipagem estática.                  |

---

## **Configuração do Ambiente**

### **Requisitos**
- Node.js >= 18.x
- Gerenciador de pacotes (`npm` ou `yarn`)

### **Instalação**
1. Clone o repositório:
   ```bash
   git clone https://github.com/Higao00/portfolio-next
   cd portfolio-next
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

---

## **Execução do Projeto**

### **Ambiente de Desenvolvimento**
Inicie o servidor local:
```bash
npm run dev
```

Acesse no navegador:
```
http://localhost:3000
```

### **Build para Produção**
Gere os arquivos estáticos para produção:
```bash
npm run build
```

Os arquivos gerados estarão na pasta `out/`.

---

## **Deploy na AWS S3**

### **Pré-requisitos**
1. Configure o bucket S3 para hospedar os arquivos estáticos:

## **Estrutura do Projeto**

```plaintext
.
├── public/                # Arquivos estáticos (imagens, favicon, etc.)
├── src/
│   ├── components/        # Componentes React reutilizáveis
│   ├── pages/             # Páginas do Next.js
│   │   ├── index.tsx      # Página inicial
│   │   └── contato.tsx    # Página de contato
│   ├── styles/            # Estilos globais
│   ├── utils/             # Funções utilitárias
│   └── ...
├── Dockerfile             # Configuração Docker
├── next.config.js         # Configuração do Next.js
├── package.json           # Dependências e scripts
└── ...
```

---

## **SEO e Meta Tags**
As páginas incluem meta tags para otimização em mecanismos de busca e compartilhamento em redes sociais:
- **`title`**
- **`description`**
- **`og:title`**, **`og:description`**, **`og:image`**
- **`twitter:title`**, **`twitter:description`**

Consulte o arquivo `src/pages/index.tsx` como exemplo para adicionar meta tags nas demais páginas.

---

### **Tecnologias Usadas**
- **Next.js**: Framework para desenvolvimento web.
- **Styled Components**: Estilização CSS-in-JS.
- **Material-UI**: Componentes de UI prontos para uso.
- **AWS S3**: Hospedagem do site estático.
