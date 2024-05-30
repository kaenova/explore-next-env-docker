# Builder
FROM node:18-alpine3.18 AS builder
WORKDIR /build

## Prepare Environment Variable
ARG ENV_FILE
ENV ENV_FILE=$ENV_FILE
RUN echo "$ENV_FILE" >> .env.local

## Prepare Bun and Glibc
RUN apk add make unzip curl
RUN apk --no-cache add ca-certificates wget
RUN wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub
RUN wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.28-r0/glibc-2.28-r0.apk
RUN apk add --no-cache --force-overwrite glibc-2.28-r0.apk
RUN npm install -g bun

## Build Next.js
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY . .
RUN bun run s:build

# Runner
FROM node:20.11.1-alpine3.19 AS runner
WORKDIR /app
COPY --from=builder /build/.next/standalone/ /app
CMD ["node", "server.js"]