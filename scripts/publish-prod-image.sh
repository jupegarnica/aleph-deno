#!/usr/bin/sh
IMAGE_ID=docker.pkg.github.com/$GITHUB_REPOSITORY/$IMAGE_NAME

# Change all uppercase to lowercase
IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')

# Strip git ref prefix from version
VERSION=$(echo "$GITHUB_REF" | sed -e 's,.*/\(.*\),\1,')

# Strip "v" prefix from tag name
[[ "$GITHUB_REF" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')

# Use Docker `latest` tag convention
# [ "$VERSION" == "master" ] && VERSION=latest
[ "$VERSION" == "master" ] && echo "NOT TAG FOUND, DO NOT DEPLOY" && exit 1

echo IMAGE_ID=$IMAGE_ID
echo VERSION=$VERSION
echo $VERSION > metadata/latestBuild
echo $IMAGE_ID > metadata/imageId

docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
docker push $IMAGE_ID:$VERSION