FROM node:/lts-buster-slim

# create app dir
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY  . /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "dev"]