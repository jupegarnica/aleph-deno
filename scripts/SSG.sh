#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))
echo $DIR
ls $DIR/..

docker run --rm  -it -v $DIR/..:/app docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base  aleph build app