Backup database:

$ docker exec -t kanboard-db pg_dump -U kanboard kanboard > kanboard_backup.sql


Remove all containers

    $ docker rm $(docker ps -aq)