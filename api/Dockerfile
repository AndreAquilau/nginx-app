FROM node:latest
WORKDIR /workspace/api
COPY ./index.js /workspace/api/
COPY ./*.json /workspace/api/
RUN npm install
EXPOSE 5000
EXPOSE 3000
CMD ["npm", "start"]