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
	



if (message.content.toUpperCase("tobyboy")) {
	const embedtoby = new Discord.RichEmbed()
		.setAuthor(message.author.name, message.author.avatarURL)
		.setFooter("TobyBoy " + TobyVersion)
		.setColor("953da0")
		.setThumbnail(bot.user.avatarURL)

	message.channel.sendEmbed(embedtoby);
	
}
if (message.content.toUpperCase().StartWith("*contact")) {
	const furbaka = guild.member(user.id("328514801124900866"));
        let args = message.content.split(" ").slice(1);
	let thingToEcho = args.join(" ");
	bot.furbaka.sendMessage(thingToEcho)
}
});
