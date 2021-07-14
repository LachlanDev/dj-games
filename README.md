<p align="center"> </p>
<h1 align="center">dj-games </h1>
<p align="center">
<img src="https://img.shields.io/badge/Documentation-No-amiajokegreen.svg?style=flat-square" /></a>
 <a href="https://www.npmjs.com/package/dj-games"><img src="https://nodei.co/npm/dj-games.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a>
</p>

## What is dj-games?
- A fun npm package to play games within Discord!
## Example ✏️
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const djsGames = require('djs-games')
const fasttyper = new djsGames.fasttyper()

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
	if(message.content === '!fasttypet') {
		fasttyper.startGame(message)
          }
});

client.login('DISCORD_BOT_TOKEN');
```
## Contributing 🤝
- Contributions, issues and feature requests are welcome!
- Feel free to check **[issues page](https://github.com/corropted/dj-games/issues)**.

## Developers 👨‍💻
- **[corrupted#4444](https://github.com/corropted)**
## Support
<br>
Discord server:
<a href="https://discord.gg/w6TuebW9Ys/"><img src="http://agencyesports.com/assets/img/join-discord.png"/></a>




