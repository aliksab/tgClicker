FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "start"]