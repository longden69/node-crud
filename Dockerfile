FROM node:10.17.0

RUN mkdir /app
COPY ./entrypoint.sh /
RUN chmod +x /entrypoint.sh

WORKDIR /app