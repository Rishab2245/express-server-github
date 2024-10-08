FROM node
WORKDIR /developer/nodejs/express-project
COPY package*.json ./
COPY . .
RUN npm ci
EXPOSE 4000
ENV PORT=4000
CMD [ "npm" , "start" ] 
