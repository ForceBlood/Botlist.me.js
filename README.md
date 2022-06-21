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

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const BotlistMeClient = require("botlist.me.js");
const botlistme = new BotlistMeClient('Your botlist.me authorization token', { autoPost: true, webhookEnabled: true }, client);

// Optional events
botlistme.on('posted', () => {
  console.log('Server count posted!');
})

botlistme.on('error', e => {
 console.log(`Oops! ${e}`);
})

botlistme.on('voted', data => {
  console.log(`${data.user} has voted for ${data.bot}`)
})
```
