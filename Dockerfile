FROM node:18-alpine
WORKDIR /var/www/server
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]