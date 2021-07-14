
```
npm i dj-games
```
<p align="center">
<img src="https://img.shields.io/badge/Documentation-No-amiajokegreen.svg?style=flat-square" /></a>
<br>
 <a href="https://www.npmjs.com/package/dj-games"><img src="https://nodei.co/npm/dj-games.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a>
</p>

## What is dj-games?
- A fun npm package to play games within Discord!
## Rock Paper  Scissor ✏️
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const djgames = require('dj-games')
const RPS = new dj-games.RPS()

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
	if(message.content === '!RockPaperScissors') {
 RPS.startGame(message)
          }
});

client.login('DISCORD_BOT_TOKEN');
```

## Tic Tac Toe
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const tttgame = require('dj-games')
const opponent = message.mentions.users.first();
if (!opponent) return 

client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
	if(message.content === '!ttt') {
 message.channel.send('**Mention someone**);
 
const game = new tttgame({
    message: message,
    opponent: opponent,
    xColor: 'red'
    oColor: 'blue',
    xEmoji: '❌', 
    oEmoji: '0️⃣'
})
game.start()
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




