default:
	@printf "$$HELP"

build:
	sh scripts/build.sh

dev:
	sh scripts/dev.sh

deploy:
	sh scripts/deploy.sh

test:
	sh scripts/test-in.container.sh

publish-base-image:
	sh scripts/publish-base-image.sh

publish-test-image:
	sh scripts/publish-test-image.sh


define HELP
build:
	sh scripts/build.sh

dev:
	sh scripts/dev.sh

deploy:
	sh scripts/deploy.sh

test:
	sh scripts/test-in.container.sh

publish-base-image:
	sh scripts/publish-base-image.sh

publish-test-image:
sh scripts/publish-test-image.sh

endef

export HELP