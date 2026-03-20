FROM node:20 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build



FROM nginx:alpine as runtime
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80