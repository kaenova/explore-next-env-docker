# Explore Next.js Environment Variable Build and Runtime

This is a simple example to demonstrate how to use environment variables in a Next.js app.  

# What you need to do

You'll need to add/change your Next.js project to be compiled easily for Docker using Github Action:

1. Create `script/stage-file.sh`: File for staging file on nextjs standalone compiler
2. Create `Dockerfile`: File for creating the Docker Image. You can see inside this file there's `ENV_FILE` building argument and will be created into `.env.local`, so that when building the web it'll use this file that the inside are injected from `ENV_FILE` building argument.
3. Add `s:build` and `s:start` in `package.json`: For shortcut script on building and starting a next js standalone output
4. Change `next.config.js`: A config for next js output to standalone
5. Add `.github/workflows/next-js-docker-env-build.yaml`: A github action script that get environment variable using `secret ENV_FILE_GITHUB` that will be injected when creating image on `Dockerfile`

# How i learn

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
