const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("This Is The Users Info!")
		.setColor("#9B59B6")
		.addField("Full Username:", message.author.username + "#" + message.author.discriminator)
		.addField("ID:", message.author.id)
		.addField("Created At:", message.author.createdAt);

	message.channel.send({embed: embed});

}

module.exports.config = {
	name: "userinfo",
	aliases: ["ui"],
	description: "Sends The Information Of The User",
	accessableby: "Everyone"
}
