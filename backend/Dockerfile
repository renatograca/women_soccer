FROM node:14-alpine

WORKDIR /backend/app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 3001

ENTRYPOINT [ "npm run db:reset" ]

CMD [ "npm start" ]