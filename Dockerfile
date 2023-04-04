# base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# copy project files and directories to the working directory
COPY package*.json ./
COPY models ./models
COPY migrations ./migrations
COPY config ./config
COPY app.js ./
COPY routes ./routes
COPY dtos ./dtos
COPY exeptions ./exeptions
COPY middlewares ./middlewares
COPY seeders ./seeders
COPY service ./service
COPY controllers ./controllers
# install dependencies
RUN npm install

# expose port
EXPOSE 5000

# start the app
CMD ["npm", "start"]
