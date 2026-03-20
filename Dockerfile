FROM node:20 AS Builder
WORKDIR /app
COPY  . .
RUN npm install && npm run build 



FROM nginx:alpine AS Runtime
WORKDIR /usr/share/nginx/html
COPY /app/dit .
EXPOSE 80