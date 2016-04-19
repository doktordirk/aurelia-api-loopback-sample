# Aurelia-api-loopback-sample

[![Join the chat at https://gitter.im/SpoonX/Dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SpoonX/Dev?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a skeleton for an [Aurelia](http://aurelia.io/) client using [spoonx/aurelia-api](https://github.com/SpoonX/aurelia-api) for rest access to a [Strongloop](http://loopback.io/) loopback api server.

## Installation instructions

```sh
git clone https://github.com/dirkeisinger/aurelia-api-loopback-sample
cd aurelia-api-loopback-sample
npm install
cd client
npm install
jspm install
```

## How to run the sample

In the root folder type:

```sh
npm start
```

This builds the aurelia-client and serves client and api. Open `http://localhost:9000` to open the client in your browser.

## What's in it

### Loopback server

#### [/server](/server)

A [loopback](https://docs.strongloop.com/display/public/LB/LoopBack) api server. A local file is used as database. Have a peek at [mydata.json](mydata.json) to gain some insight.

#### [/common](/common)

The customer model with firstName and lastName properties.

### Aurelia client

#### [/client](/client)

An aurelia client app using aurelia-api for customer management.

## Support

- Aurelia Gitter chat [![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Spoonx/Dev Gitter Chat for aurelia-api/-authentication/-orm/-notifications [![Join the chat at https://gitter.im/SpoonX/Dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SpoonX/Dev?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Loopback Gitter Chat [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/strongloop/loopback?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
