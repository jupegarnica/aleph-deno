#!/usr/bin/sh

VERSION=$1;

docker pull docker.pkg.github.com/jupegarnica/aleph-deno/aleph-prod:$VERSION;

docker run --rm -p 8080:8080 docker.pkg.github.com/jupegarnica/aleph-deno/aleph-prod:$VERSION


# http://www.gnu.org/software/coreutils/manual/html_node/timeout-invocation.html
# timeout 5
# if [ $? -eq 124 ]; then
#    echo "failed"
#    exit 1
# else
#     # No hang
#     echo 'OK'
#     echo $?
#     exit 0
# fi