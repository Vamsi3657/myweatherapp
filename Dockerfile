
FROM node:18

#create app dir
WORKDIR /usr/src/app

#install app dependemcies
#A wildcard is used to ensure both package.json AND package-lock.json are
#where available (npm@5+)

COPY package*.json ./

RUN npm install
# if you are building your code for production
#RUN npm ci --only=production

#bundle app source
COPY . .


CMD [ "node", "server.js"]