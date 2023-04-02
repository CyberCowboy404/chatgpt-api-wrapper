# Run docker

#### dev
docker build -t chat-server:dev -f Dockerfile.dev .
docker run --rm -it -p 3000:3000 -v "$(pwd)":/app chat-server:dev

#### prod
docker build -t chat-server:prod -f Dockerfile.prod .
docker run --rm -it -p 3000:3000 -v "$(pwd)":/app chat-server:prod