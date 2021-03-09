#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))
echo $DIR
ls $DIR/..
docker build  --no-cache  -t aleph-prod $DIR/..