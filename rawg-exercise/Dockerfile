FROM node:16.17.1

WORKDIR /usr/src/app/web

COPY package*.json ./

RUN npm install -g @angular/cli && npm install

EXPOSE 4200

CMD ["npm", "start"]
