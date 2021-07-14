#npm djs-games

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

