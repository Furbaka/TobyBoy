const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');
const prefix = "*";
var TobyVersion = "1.0.0";

bot.on('ready', () => {
	bot.user.setActivity(bot.users.size + ' fanboys', { type: 'WATCHING' });
	
});

bot.login(process.env.TOKEN);

bot.on('message', async message => {

let sender = message.author;
let cont = message.content.slice(prefix.length).split(" ");
const messageSlice = message.content.slice(prefix.length).trim();
	
if(message.author.bot) return;
let msg = message.content.toUpperCase();
	
if(msg.startsWith("*contact")) {
	bot.users.get("328514801124900866").sendMessage(messageSlice);	
}

});
