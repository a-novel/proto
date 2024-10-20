proto:
	npx buf generate

update-go:
	go get -u ./... && go mod tidy

update: update-go
	npx npm-check-updates
	npm i

install-go:
	go get ./... && go mod tidy

install: install-go
	npm i

breaking:
	npx buf breaking --against ".git#branch=master"

lint:
	npx buf lint

format:
	npx buf format -w

.PHONY: proto update-go update install-go install
