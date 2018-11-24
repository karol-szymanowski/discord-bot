FROM node:10-alpine

RUN npm i pm2 -g

COPY ./install.sh /src/

RUN mkdir /src/bot
COPY ./bot/package.json /src/bot/
RUN mkdir /src/web
COPY ./web/package.json /src/web/

RUN chmod +x /src/docker-entrypoint.sh

ENTRYPOINT /src/docker-entrypoint.sh
