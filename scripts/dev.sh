#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))

cd $DIR/../app
# aleph dev
docker-compose up --build