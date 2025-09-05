Run docker curl sh

	$ docker run --rm -it -v "$PWD:/work" -w /work curlimages/curl:latest sh

		use flag
			--network="host" 
		to access localhost if need  --- !!!

Remove:
	$ docker rmi curlimages/curl:latest