FROM node

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm config set registry https://registry.npmjs.org/

RUN npm install
RUN npm install react-scripts@5.0.1 -g
COPY  . /code/

EXPOSE 8080
EXPOSE 8081

CMD ["npm", "start"]