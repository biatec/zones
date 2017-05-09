FROM node:7
MAINTAINER p4km9y

EXPOSE 4200

RUN apt-get update && apt-get install -y zip && \
    wget -q -O /tmp/m.zip https://github.com/biatec/zones/archive/master.zip && \
    unzip /tmp/m.zip -d /opt && \
    cd /opt/zones-master && \
    npm install && \
    rm /tmp/m.zip

WORKDIR /opt/zones-master

ENTRYPOINT ["npm", "start"]
