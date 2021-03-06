# Botlist.me.js
A node.js API wrapper for the Botlist.me API that makes it easier to interact with our API

## Installation
For NPM:
`npm install botlist.me.js`
For Yarn:
`yarn add botlist.me.js`

## Documentation
API documentation is available [here](https://docs.botlist.me)

## Example

### Example of posting server count with auto poster. Supports Discord.js And Eris
```js
const Discord = require("discord.js"); // can also use with eris
const client = new Discord.Client();
const BotlistMeClient = require("botlist.me.js");
const botlistme = new BotlistMeClient('Your botlist.me authorization token', client);

// Optional events
botlistme.on('posted', () => {
  console.log('Server count posted!');
})

botlistme.on('error', e => {
 console.log(`Oops! ${e}`);
})
```

### Example of using webhooks to recieve voter data
```js
const BotlistMeClient = require('botlist.me.js');
const botlistme = new BotlistMeClient('Your botlist.me authorization token', { webhookPort: 3000, webhookAuth: 'password' });
botlistme.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
botlistme.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});
```
