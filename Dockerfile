FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# The server bundle has no external dependencies, so the runtime image only needs `dist`.
FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=4000
COPY --from=build /app/dist ./dist
USER node
EXPOSE 4000
CMD ["node", "dist/morphus-app/server/server.mjs"]
