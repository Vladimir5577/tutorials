FROM php:8.0.5-fpm

RUN apt-get update && apt-get install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip \
    && docker-php-ext-install intl opcache pdo pdo_mysql \
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip

# install vim
RUN ["apt-get", "install", "-y", "vim"]
RUN echo set number >> /etc/vim/vimrc
RUN echo set tabstop=4  >> /etc/vim/vimrc
RUN echo colo ron  >> /etc/vim/vimrc
RUN echo set autoindent  >> /etc/vim/vimrc

WORKDIR /var/www/project


# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# install symfony 
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony