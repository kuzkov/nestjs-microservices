FROM node:12.10-slim

MAINTAINER Artyom Kuzkov <artyom.kuzkov@yandex.ru>

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]