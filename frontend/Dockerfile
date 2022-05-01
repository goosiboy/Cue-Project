FROM node

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent
COPY  . /code/

CMD ["npm", "start"]