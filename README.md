<p align="center"><img width="100px"
   style="margin-bottom:-6px" src="" /></p>
<h1 align="center">dj-games </h1>
<p align="center">
   <a href="https://www.npmjs.com/package/dj-games"><img src="" /></a>
   <img src="https://img.shields.io/badge/Documentation-No-amiajokegreen.svg?style=flat-square" /></a>
   <a href="https://github.com/corropted/blob/main/LICENSE"><img src="https://averylongdomainyesitisverylongasyoucanseedudesee.tk/static/weky-license.svg" /></a>
   <br>
   <a href="https://www.npmjs.com/package/weky"><img src="https://nodei.co/npm/weky.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a>
</p>

## What is dj-games?
- A fun npm package to play games within Discord!
## Example ✏️
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const djsGames = require('djs-games')
const fasttyper = new djsGames.FastTyper()

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
	if(message.content === '!fasttypet') {
		FastTyper.startGame(message)
          }
});

client.login('DISCORD_BOT_TOKEN');
```
For Support Join discord
<a href="https://discord.gg/ANzBrkcXZy"><img src="https://icon-library.com/images/discord-app-icon/discord-app-icon-15.jpg"/></a>

