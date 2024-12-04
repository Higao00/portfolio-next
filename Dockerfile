# 1. Use uma imagem base
FROM node:18-alpine

# 2. Defina o diretório de trabalho no container
WORKDIR /app

# 3. Copie os arquivos de dependência para o container
COPY package.json package-lock.json* ./

# 4. Instale as dependências
RUN npm install

# 5. Copie o restante do código para o container
COPY . .

# 6. Exponha a porta em que a aplicação rodará
EXPOSE 3000

# 7. Comando para rodar o aplicativo
CMD ["npm", "run", "dev"]
