FROM node:14-alpine as frontend

WORKDIR /frontend/app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm" ]

CMD [ "start" ]