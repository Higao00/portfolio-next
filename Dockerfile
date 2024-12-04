# Use uma imagem base oficial do Node.js
FROM node:18 AS builder

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos do projeto para o container
COPY package.json package-lock.json ./
COPY . .

# Instale as dependências e gere a build
RUN npm install
# RUN npm run build

# Use uma imagem menor para rodar a aplicação
FROM node:18-slim AS runner

# Copie os arquivos da build para o runner
# WORKDIR /app
# COPY --from=builder /app/package.json /app/package-lock.json ./
# COPY --from=builder /app/.next /app/.next
# COPY --from=builder /app/public /app/public
# COPY --from=builder /app/node_modules /app/node_modules

# Porta que será usada pela aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "dev"]
