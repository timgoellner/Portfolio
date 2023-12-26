My personal portfolio website and blog with the following technologies:
- Ruby On Rails web app
- PostgreSQL database
- Nginx reverse proxy

Down below are the steps to create the docker network and start the different docker containers.

## Docker Network
```shell
docker network create portfolio
```

## NGINX + LetsEncrypt
```shell
docker-compose up -d
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
docker run -d --rm -it --name postgres --env-file ./psql/.env -v postgres-data:/var/lib/postgresql/data --network portfolio psql
```
