FROM node

ADD . /app
WORKDIR /app
EXPOSE 3000
RUN npm i -g webpack
RUN npm i -g babel-cli
RUN npm i
RUN webpack --config webpack.config.babel.js

CMD npm run prod
