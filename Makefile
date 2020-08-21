
IMAGE=mercury.bc

build:
	docker build --rm -t $(IMAGE) .

run:
	docker run -it --rm \
		-v `pwd`:/mercury/bc \
		-v /mercury/bc/node_modules \
		$(args) \
		-p 8080:8080 \
		-p 8888:8888 \
		--name $(IMAGE) \
		$(IMAGE) \
			$(cmd)


bash: build
bash: cmd=/bin/bash
bash: run


dev: build
dev: args=-e API_HOST=https://hgbuilds-api.azurewebsites.net
dev: cmd=npm run dev
dev: run