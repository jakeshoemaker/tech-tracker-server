## Tech-Tracker Server

This is the backend for my full stack app. 

#### To get started build the image:
`docker build -t "image-name-here" .`

#### To run the server image in a container type:
`docker run --net="host" image-name-here`

### pull mongo docker image:
`docker pull mongo`
### run mongoDB image in a container:
`docker run -d -p 27017:27017 --name mongodb mongo -v /data/db:/data/db`
- the following command runs the image and mounts the data to the container and your local machine that way you will not lose data on restarting
