const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sEmbed = new Discord.RichEmbed()
    .setColor("#9B59B6")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name}'s' info`, message.guild.iconURL)
    .addField("**Guild Name**", message.guild.name)
    .addField("**Guild Owner**", message.guild.owner)
    .addField("**Members**", message.guild.memberCount)
    .setFooter("TopBot", bot.user.displayAvatarURL);

  return message.channel.send(sEmbed).then(msg => msg.delete(10000));
}

module.exports.config = {
  name: "serverinfo",
  aliases: ["si", "info"],
  description: "Gives You Info About The Server You're On!",
  accessableby: "Everyone"
}