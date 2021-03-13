#!/usr/bin/sh

VERSION=$1;

docker pull docker.pkg.github.com/jupegarnica/aleph-deno/aleph-prod:$VERSION;

docker run --rm -p 8081:8080 docker.pkg.github.com/jupegarnica/aleph-deno/aleph-prod:$VERSION;