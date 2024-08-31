FROM php:8.2-fpm

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug


# install vim
RUN apt-get update && apt-get install -y vim
RUN echo set number >> /etc/vim/vimrc
RUN echo set tabstop=4  >> /etc/vim/vimrc
RUN echo colo ron  >> /etc/vim/vimrc
RUN echo set autoindent  >> /etc/vim/vimrc

# sql extension
RUN apt-get install -y libpq-dev \
    && docker-php-ext-install pgsql pdo_pgsql pdo