#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))

docker run --rm -e BUILD_MODE=development  -v $DIR/..:/app docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base  aleph build app