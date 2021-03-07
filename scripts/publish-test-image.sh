#!/usr/bin/sh
DIR=$(dirname $(realpath "$0"))

docker build -t aleph-test -f Dockerfile.test $DIR &&\

cat $DIR/../github-token.secret | docker login https://docker.pkg.github.com -u jupegarnica --password-stdin &&\

docker tag aleph-test docker.pkg.github.com/jupegarnica/aleph-deno/aleph-test:latest &&\
docker push docker.pkg.github.com/jupegarnica/aleph-deno/aleph-test:latest