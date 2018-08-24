# node-with-docker
This repo is a simple example of node app with docker

Steps to follow:

1. Clone this repository

2. Run npm install

3. Create a docker file named Dockerfile on root folder and add the contents as it is given in Dockerfile

4. Create dockerignore file also and add ignored files and folders in that

5. Run node index.js



Using docker

1. Install docker

2. Run command docker pull abhijeetverma/node-with-docker

3. Run command docker run -p 4100:4100 abhijeetverma/node-with-docker

4.Open browser and run localhost:4100



How to push on docker hub

1. Signup on https://hub.docker.com/

2. Create your app

3. Create Dockerfile and .dockerignore file.

4. Run command docker login and login using credentials

5. Run command export DOCKER_ID_USER="docker-username"

5. Create tag using command docker tag my_image $DOCKER_ID_USER/my_image

6. Push to docker hub using docker push $DOCKER_ID_USER/my_image


