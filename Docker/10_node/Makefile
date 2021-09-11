build:
	docker build -t logsapp_image:logsapp_tag .

run:
	docker run -d -p 3000:3000 -v logs:/app/data --rm --name logsapp_container logsapp_image:logsapp_tag

stop:
	docker stop logsapp_container
