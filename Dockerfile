# pull official base image
FROM node:alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json .
RUN npm install

# add app
COPY . .

# pull official base image
FROM nginx

COPY --from=build /app/build /usr/share/nginx