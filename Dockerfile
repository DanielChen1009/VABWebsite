FROM node:19.7-alpine AS sk-build
WORKDIR /usr/src/app

ARG TZ=America/Los_Angeles

COPY . /usr/src/app
COPY package-lock.json /usr/src/app
COPY package.json /usr/src/app
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm i
RUN npm install mongodb -g
RUN npm run build

FROM node:19.7-alpine
WORKDIR /usr/src/app

ARG TZ=America/Los_Angeles
RUN apk --no-cache add curl tzdata
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY --from=sk-build /usr/src/app/package.json /usr/src/app/package.json
COPY --from=sk-build /usr/src/app/package-lock.json /usr/src/app/package-lock.json

COPY --from=sk-build /usr/src/app/build /usr/src/app/build

EXPOSE 3000
CMD ["node", "build/index.js"]