FROM node:14-slim

LABEL AUTHOR='Joe Ridenour <jridenour@mercury.io>'

WORKDIR /mercury/bc

COPY package.json .

RUN npm install --development --silent

ADD . .


CMD ["npm", "start"]