#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))
echo $DIR
ls $DIR/..
docker build  -t aleph-prod $DIR/..