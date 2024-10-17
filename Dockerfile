FROM node:18

WORKDIR /api-locadora
COPY package.json .
RUN npm install
COPY . .
CMD npm start