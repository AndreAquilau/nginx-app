FROM nginx AS app-nginx
LABEL maintainer="André Aquilau"
WORKDIR /usr/share/nginx/html
WORKDIR /usr/share/nginx/spa
WORKDIR /usr/share/nginx/config
COPY ./spa/dist/spa /usr/share/nginx/spa/
VOLUME ./nginx:/usr/share/nginx/config
VOLUME ./nginx/templates:/usr/share/nginx/config/templates

EXPOSE 80
EXPOSE 8080