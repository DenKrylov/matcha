FROM	golang:1.17.1

RUN		apt-get update && apt-get install -y postgresql postgresql-contrib

COPY	backend/ ./server

COPY	frontend/ ./www