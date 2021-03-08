#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))
docker build  --no-cache  -t aleph-prod $DIR/..