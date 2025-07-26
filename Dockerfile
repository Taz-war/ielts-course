# Use official Node.js LTS image
FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]