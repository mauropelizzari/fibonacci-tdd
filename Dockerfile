#From node parent image
FROM node:8.4.0-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

#install npm
RUN npm install

# Set port 4000 and make available to the world outside this container
ENV PORT 4000
EXPOSE $PORT

#Copy sources file
CMD ["npm","start"]
