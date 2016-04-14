# Aurelia-api-loopback-sample

[![Join the chat at https://gitter.im/SpoonX/Dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SpoonX/Dev?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a skeleton for an [Aurelia](http://aurelia.io/) client using [spoonx/aurelia-api](https://github.com/SpoonX/aurelia-api) for access to a [Strongloop](http://loopback.io/) loopback api server based on paul van bladel's [aurelia-loopback-sample](https://github.com/paulvanbladel/aurelia-loopback-sample/).

Comments on [aurelia](https://gitter.im/aurelia/discuss) or [spoonx/dev gitter](https://gitter.im/SpoonX/Dev) and push requests welcome.
..

## Installation instructions

```sh
git clone https://github.com/dirkeisinger/aurelia-api-loopback-sample
cd aurelia-api-loopback-sample
npm install
cd client
npm install
jspm install
```

### Optional

Install loopback-component-explorer with `npm install loopback-component-explorer --save-dev` to use the loopback api explorer (recommended, free registration needed).

Use `npm install strongloop -g` for the [Strongloop](http://loopback.io/) suite (recommended).

## How to run the sample

In the root folder type:

```sh
npm start
```

Browse to [http://localhost:9000](http://localhost:9000) to see the app. You can make changes in the code found under `src` and the browser should auto-refresh itself as you save files.

## What's in it

### Server

```sh
/server
/common
```

A [loopback](https://docs.strongloop.com/display/public/LB/LoopBack) api server with a user and a customer model with ACL.

```js
user hasMany customers
customer belongsTo user
```

Unauthorized users only can list the customers. Authorized users additionally can manage their own customers. See the models in common/models.
Users can signup & login with verified emails or third-party providers (facebook). After signup with email, a verification emails is send. Users can also request an email to reset their password.

A local file is used as database. Have a peek at `mydata.json` to gain some insight.

By default loopback uses session token for authorization.

#### Client

```sh
/client
```

An aurelia client app with authorized pages for user profile and customer management and unauthorized pages for login, signup and customer listing.

## Support

- Aurelia Gitter chat [![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Spoonx/Dev Gitter Chat for aurelia-api/-authentication/-orm/-notifications [![Join the chat at https://gitter.im/SpoonX/Dev](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/SpoonX/Dev?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Loopback Gitter Chat [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/strongloop/loopback?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
