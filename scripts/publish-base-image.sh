#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))

docker build -t aleph-base -f Dockerfile.base $DIR &&\

cat $DIR/github-token.secret | docker login https://docker.pkg.github.com -u jupegarnica --password-stdin &&\

docker tag aleph-base docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base:latest &&\
docker push docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base:latest