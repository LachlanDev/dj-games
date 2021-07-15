
```
npm i dj-games
```
<p align="center">
 <a href="https://www.npmjs.com/package/dj-games"><img src="https://nodei.co/npm/dj-games.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a>
</p>

## What is dj-games?
- A fun npm package to play games within discord

##  Rock Paper scissor 

```js
const Discord = require('discord.js');
const client = new Discord.Client();
const games = require('dj-games')
const RPS = new games.RPS()

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
## Typer

```js
const Discord = require('discord.js');
const client = new Discord.Client();
const games = require('dj-games')
const typer = new games.typer()
client.on('ready', async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
	if(message.content === '!typer') {
typer.startGame(message)

client.login ('token');

});
```

## Contributing
- Contributions, issues and feature requests are welcome!
- if you foundd y bug/issues you can report it from **[issues page](https://github.com/corropted/dj-games/issues)**.

## Developers
- **[corrupted#4444](https://github.com/corropted)**
## Support
<br>
Discord server:
<a href="https://discord.gg/w6TuebW9Ys/"><img src="http://agencyesports.com/assets/img/join-discord.png"/></a>




