FROM php:5.6-apache

RUN apt-get update && apt-get install -y vim

COPY content/ /var/www/html/

#memo for dev
#docker run -d -p 9091:80 res/apache-php
#docker run -it res/apache-php /bin/bash
#192.168.99.100:9091
