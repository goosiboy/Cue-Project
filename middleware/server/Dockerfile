FROM node

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm config set registry https://registry.npmjs.org/

RUN npm install

COPY  . /code/

CMD ["node", "server.js"]
