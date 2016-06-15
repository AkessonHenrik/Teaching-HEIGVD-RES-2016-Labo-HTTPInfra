docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
cd docker-images
cd apache-php-image
docker build -t res/apache-php .
cd ../express-image
docker build -t res/express-php .
cd ../apache-reverse-proxy
docker build -t res/apache-rp .
cd ../