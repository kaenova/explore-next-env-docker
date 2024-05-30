# Explore Next.js Environment Variable Build and Runtime

This is a simple example to demonstrate how to use environment variables in a Next.js app.  

To reproduce the steps i learn do this:
```sh
bun install # installing all dependency

SAMPLE_ENV="build-time" bun s:build # build next js
SAMPLE_ENV="run-time" bun s:start # run next js
```

You should see even though we're using same environment variable after opening `/build-time` and `/run-time` page, the value of `SAMPLE_ENV` is different.	


Now how we do this cleanly in Github Action x Docker?

First we create action workflows in `.github/workflows` directory. You can see script to create an image. The important part is that we have to pass the environment variable to the image. We do it with Github Action Repository Secret. We pass our environment file variable to the `ENV_FILE_GITHUB` secret. After that we pass it to build argument in docker build command. 

After we build and uploaded to docker hub, we can run the image with the environment variable we want to run as runtime variable. You should try to change the environment variable value to see the impact.

```sh
docker run -e SAMPLE_ENV=run-time -p 3000:3000 <your-image-name>
```