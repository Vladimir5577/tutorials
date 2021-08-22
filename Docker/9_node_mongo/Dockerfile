FROM node:16.0.0-alpine3.12

RUN mkdir /app

# install vim
RUN apk add vim
RUN echo set number >> /etc/vim/vimrc
RUN echo set tabstop=4  >> /etc/vim/vimrc
RUN echo colo ron  >> /etc/vim/vimrc
RUN echo set autoindent  >> /etc/vim/vimrc

WORKDIR /app

COPY package.json .

RUN npm install

# !!!!!!!!!!
# it will copy everything in WORKDIR (/app)
# but we dont need to copy node_modules folder it in .gockerignore file
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]