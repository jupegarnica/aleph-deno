#!/usr/bin/sh

DIR=$(dirname $(realpath "$0"))

docker run --rm -it  -v $DIR/..:/app --name aleph-test aleph-test sh scripts/test.sh