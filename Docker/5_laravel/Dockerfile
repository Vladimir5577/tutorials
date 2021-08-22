FROM php:7.4.16-fpm-alpine3.12

RUN apk update && apk add vim
RUN echo set number >> /etc/vim/vimrc
RUN echo colorscheme ron  >> /etc/vim/vimrc

RUN docker-php-ext-install pdo pdo_mysql
