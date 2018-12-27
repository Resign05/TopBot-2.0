const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You Do Not Have Permissions To Make A Poll!");
  embed = new Discord.RichEmbed()
  .setAuthor(`Poll By ${message.author.username}`,message.author.displayAvatarURL)
  .setDescription(args.join(" "))
  .setTimestamp()
  .setFooter("TopBot");
  await message.guild.channels.find('name','daily-polls').send('@everyone');
  msg = await message.guild.channels.find('name','daily-polls').send(embed);

  await msg.react('✅');
  await msg.react('❎');

  return message.channel.send("Poll Successfully Made!").then(msg => msg.delete(5000));
}

module.exports.config = {
	name: "poll",
  aliases: [],
  noalias: "No Aliases!",
  description: "Makes A Poll In A Channel Called daily-polls",
  accessableby: "Anyone With The Permission 'Administrator'"
}
