docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
cd apache-php-image
docker build -t res/apache-php .
cd ../express-image
docker build -t res/express-php .
cd ../apache-reverse-proxy
docker build -t res/apache-rp .
cd ../
docker run -d --name apache_static res/apache-php
docker run -d --name express_dynamic res/express-app
docker run -d -p 8080:80 --name apache_rp res/apache-rp