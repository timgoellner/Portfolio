FROM postgres:14.2-alpine

ENV POSTGRES_DB=${POSTGRES_DB}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV PGDATA=/var/lib/postgresql/data/db-files/

COPY ./postgres-data /var/lib/postgresql/data

EXPOSE 80

CMD ["postgres"]