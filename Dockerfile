# pull official base image
FROM node:alpine3.13

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