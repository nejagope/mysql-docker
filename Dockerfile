FROM node
WORKDIR /app
COPY /api/package.json .
RUN npm install
COPY ./api .
EXPOSE 5000
CMD [ "node", "index.js" ]