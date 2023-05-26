FROM node:16.15
WORKDIR /source
COPY ./package*.json ./
RUN npm install
COPY . .
