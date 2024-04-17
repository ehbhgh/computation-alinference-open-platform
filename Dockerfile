FROM nginx:latest
MAINTAINER testing <testing@naritech.com>

RUN mkdir -p /home/d5000/iot/logs/AccessWeb

COPY  ./dist20/ /home/d5000/daping/dist20/
COPY  ./dist30/ /home/d5000/daping/dist30/
COPY  ./dist10/ /home/d5000/iot/daping/dist10/
COPY  ./dist/ /home/d5000/iot/service/IoTAcessWeb/dist
COPY  ./nginx.conf /etc/nginx/nginx.conf


EXPOSE 23301