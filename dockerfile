#create build app
FROM node:12-stretch-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install react-scripts -g
COPY . .
RUN npm react-scripts build

FROM nginx:1.14.2-alpine
COPY --from=0 /usr/src/app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
# start app
CMD ["nginx", "-g", "daemon off;"]