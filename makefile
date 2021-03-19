default:
	@printf "$$HELP"

build:
	sh scripts/build.sh

dev:
	sh scripts/dev.sh


run:
	sh scripts/run.sh

release:
	sh scripts/release.sh

test:
	sh scripts/test-in.container.sh
base:
	docker build -t aleph-base -f ./Dockerfile.base .
	docker tag aleph-base docker.pkg.github.com/jupegarnica/aleph-deno/aleph-base:latest


publish-base-image:
	sh scripts/publish-base-image.sh

publish-test-image:
	sh scripts/publish-test-image.sh

publish-prod-image:
 	GITHUB_REPOSITORY=jupegarnica/aleph-deno IMAGE_NAME=aleph-prod GITHUB_REF=refs/tags/v0.0.100 sh scripts/publish-prod-image.sh

define HELP
build:
	sh scripts/build.sh
run:
	sh scripts/run.sh
dev:
	sh scripts/dev.sh

release:
	sh scripts/release.sh

test:
	sh scripts/test-in.container.sh

publish-base-image:
	sh scripts/publish-base-image.sh

publish-test-image:
sh scripts/publish-test-image.sh

endef

export HELP