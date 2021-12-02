FROM node:14-alpine

WORKDIR /backend/app

COPY . .

COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["sh", "-c", "sleep 30 ; npm run db:reset ; npm start" ]

# ENTRYPOINT ["sh", "-c", "npm run db:reset ; npm start" ]