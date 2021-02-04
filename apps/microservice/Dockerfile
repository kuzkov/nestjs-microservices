FROM node:15.8.0-alpine3.10

MAINTAINER Artyom Kuzkov <artyom.kuzkov@yandex.ru>

WORKDIR /app

COPY ./dist .
COPY ./package.json ./package.json

RUN npm install --production

CMD ["node", "main.js"]
