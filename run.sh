#!/usr/bin/sh
# docker run -d -it -p 8080:8080 --name aleph-prod --restart=always aleph-prod
docker run -d --rm  -it -p 8080:8080 --name aleph-prod aleph-prod