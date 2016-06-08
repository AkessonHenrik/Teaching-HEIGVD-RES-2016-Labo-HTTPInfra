FROM node:4.4

RUN apt-get update && apt-get install -y vim

COPY src /opt/app

WORKDIR /opt/app/

CMD ["node", "index.js"]

#Memo for dev
#docker run -p 9090:3000 res/express-app
#192.168.99.100:9090
