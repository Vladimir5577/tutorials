    
    Install in docker.
    ------------------

1. Copy .env and put credentials inside
    $ cp .env.example .env



Backup database:

    $ docker exec -t kanboard-db pg_dump -U kanboard kanboard > kanboard_backup.sql


Remove all containers

    $ docker rm $(docker ps -aq)

// ============================================

Open in browser localhost:80
    admin
    admin