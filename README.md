# README

## Docker Network
```shell
docker network create portfolio
```

## NGINX + LetsEncrypt
```shell
docker-compose build
docker-compose up -d

docker-compose stop
docker-compose start
```

## Rails
```shell
docker build -t app ./portfolio/.
docker volume create app-storage
docker run -d --rm -it --name portfolio --env-file ./portfolio/.env -v app-storage:/rails/storage --network portfolio app
```

## Postgres
```shell
mkdir psql/postgres-data
docker build -t psql ./psql/.
docker run -d --name postgres --env-file ./psql/.env -v postgres-data:/var/lib/postgresql/data --network portfolio psql
