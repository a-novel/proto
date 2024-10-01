proto:
	npx buf generate

update:
	npx npm-check-updates
	npm i

install:
	npm i

breaking:
	npx buf breaking --against ".git#branch=master"

lint:
	npx buf lint

format:
	npx buf format -w

.PHONY: proto update install breaking lint format
