FROM node:22
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY frontend/package.json ./frontend/
COPY backend/package.json ./backend/

ENV NODE_ENV=production
RUN pnpm install --frozen-lockfile

COPY frontend/ ./frontend/
COPY backend/ ./backend/

RUN pnpm --filter frontend build
RUN pnpm --filter backend build

RUN cp -r ./frontend/dist ./backend/public/

WORKDIR /app/backend
CMD [ "node", "dist/index.js" ]
