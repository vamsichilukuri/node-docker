# node-docker
dockerizing node app

```

## Usage

```
# Install dependencies
npm install

# Run
npm start

```

## Docker

```
# Image
vamsichilukuri/node-docker:latest

# Build image
docker build -t dockerid/reponame:tag .

# Run container
docker run -it -dp 3001:3001 dockerid/reponame:tag

```
## pull directly image and test
> docker run -it -dp 3001:3001 vamsichilukuri/node-docker:latest
