#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))

docker run --rm  -v $DIR/..:/app docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base  aleph build app