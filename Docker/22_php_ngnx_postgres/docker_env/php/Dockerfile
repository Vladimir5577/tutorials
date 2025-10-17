FROM php:8.4-fpm

RUN apt-get update && apt-get install -y zip unzip \
    libpq-dev

RUN docker-php-ext-install pdo_pgsql

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY ../../src .

RUN composer install --no-interaction --prefer-dist

EXPOSE 80