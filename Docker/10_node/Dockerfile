FROM node:16-alpine3.11

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

EXPOSE 3000

# VOLUME [ "/app/data" ]

CMD [ "node", "app.js" ]


####################
# 
# The difference between RUN and CMD:
# 	- RUN will execute when container build
# 	- CMD will execute when we start ths container