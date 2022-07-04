
### Dockerfile
```Dockerfile
FROM nginx AS app-nginx
LABEL maintainer="André Aquilau"
WORKDIR /usr/share/nginx/html
WORKDIR /usr/share/nginx/config
VOLUME ./nginx:/usr/share/nginx/config
VOLUME ./templates:/usr/share/nginx/config/templates

EXPOSE 80
EXPOSE 8080
```

### Docker Compose File
```docker-compose.yml
version: '3.9'
services:
  nginx-app:
    build: .
    ports:
      - "80:80"
    volumes:
      - ./app:/usr/share/nginx/html
      - ./log:/var/log/nginx
      - './nginx/nginx.conf:/etc/nginx/nginx.conf'
      - './nginx/default.conf:/etc/nginx/conf.d/default.conf'
```

### Command Docker Compose
```bash
docker compose up

docker compose rm

docker compose reset

docker compose exec nginx-app nginx -h

docker compose exec nginx-app nginx -s reload
```


### Commond Nginx
```bash
docker compose exec nginx-app nginx -h
```
```bash
nginx version: nginx/1.21.6
Usage: nginx [-?hvVtTq] [-s signal] [-p prefix]
             [-e filename] [-c filename] [-g directives]

Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /etc/nginx/)
  -e filename   : set error log file (default: /var/log/nginx/error.log)
  -c filename   : set configuration file (default: /etc/nginx/nginx.conf)
  -g directives : set global directives out of configuration file
```
