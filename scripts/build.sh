#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))
echo $DIR
ls $DIR/..
docker build -e BUILD_MODE=development  -t aleph-prod $DIR/..