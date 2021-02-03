FROM node:15.7.0-alpine3.10

MAINTAINER Artyom Kuzkov <artyom.kuzkov@yandex.ru>

WORKDIR /nestjs-microservices/apps/app

EXPOSE 3000

COPY ./dist .
COPY ./package.json ./package.json

RUN npm i --production
CMD ["node", "main.js"]
