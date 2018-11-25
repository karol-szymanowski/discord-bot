FROM node:10-alpine

RUN npm i pm2 -g

WORKDIR /src/

COPY ./docker-entrypoint.sh /src/
COPY ./process.json /src/

RUN mkdir /src/bot
COPY ./bot/package.json /src/bot/
RUN mkdir /src/web
COPY ./web/package.json /src/web/

RUN chmod +x /src/docker-entrypoint.sh
