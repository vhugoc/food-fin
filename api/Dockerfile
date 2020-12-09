# specify the node base image with your desired version node:<version>
FROM node:14

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

# replace this with your application's default port
EXPOSE 3030

CMD ["npm", "start"]
