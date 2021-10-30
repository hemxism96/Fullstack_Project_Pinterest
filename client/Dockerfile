FROM node:10.15.2-alpine
RUN mkdir /frontend
WORKDIR /frontend
COPY package.json /frontend/package.json
RUN yarn install && yarn start

FROM nginx:latest
COPY nginx.conf /nginx.conf
RUN apt-get update && apt-get install -y nginx-extras
