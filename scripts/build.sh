#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))

docker build  -t aleph-prod -f $DIR/../Dockerfile $DIR/..