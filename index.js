const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');
var prefix = "*";
var TobyVersion = "1.0.0";

bot.on('ready', () => {
	bot.user.setActivity(bot.users.size + ' fanboys', { type: 'WATCHING' });
	
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

	let msg = message.content.toUpperCase();


	if (message.content == "tobyboy") {
	const embedtoby = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.AvatarURL)
		.setVideo('https://twitter.com/i/status/1073525646326849536')
		.setFooter("TobyBoy " + TobyVersion)
		.setColor("953da0")
		.setThumbnail(user.bot.AvatarURL)

	message.channel.sendEmbed(embedtoby);
	
	}
});
