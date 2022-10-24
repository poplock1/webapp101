## Webapp101

My first fullstack webapp using TypeScript and node.js. App is based on project from "Essential TypeScript 4: From Beginner to Pro" by Adam Freeman.

## Requirements

* Node 8
* Git
* Docker(optionally)

## Common setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/poplock1/webapp101.git
cd webapp101
```

```bash
npm install
```

## Steps for running the app

To start the express server, run the following

```bash
npm run start
```

Open [http://localhost:4000](http://localhost:4000) and take a look around.


## Use Docker
You can also run this app as a Docker container:

Step 1: Clone the repo

```bash
git clone https://github.com/poplock1/webapp101.git
```

Step 2: Build the Docker image

```bash
docker build . -t webapp -f Dockerfile
```

Step 3: Run the Docker container locally:

```bash
docker run -p 4000:4000 webapp
```