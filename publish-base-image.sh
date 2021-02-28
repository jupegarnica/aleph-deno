#!/usr/bin/sh

docker build -t aleph-base -f Dockerfile-base .

cat ./github-token | docker login https://docker.pkg.github.com -u jupegarnica --password-stdin

docker tag aleph-base docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base:latest
docker push docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base:latest