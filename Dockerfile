# pull official base image
FROM node:17.8.0-slim

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . ./

# listener port at runtime
EXPOSE 3000

# start app
CMD ["npm", "start"]