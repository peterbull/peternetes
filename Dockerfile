FROM node:22

RUN corepack enable
WORKDIR /app
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

CMD [ "node", "dist/index.js" ]
