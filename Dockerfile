FROM node:15


ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
ENV PORT=8080
CMD [ "node", "index.js" ]
