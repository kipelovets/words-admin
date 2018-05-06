.PHONY: build

serve:
	docker-compose run --rm yarn

build:
	docker-compose run --rm yarn yarn build

deploy:
	scp -r build/* kipelovets.ru:/app/words-clj/public/
