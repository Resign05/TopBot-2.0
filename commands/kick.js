const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You Do Not Have Permissions To Kick Someone!");
  let kUser = message.guild.member(message.mentions.first || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send('Could Not Find The User');
  let kReason = args.join(" ").slice(22);

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("-=Kick Log=-")
  .setColor('#9B59B6')
  .setFooter(`TopBot`, bot.user.displayAvatarURL)
  .setTimestamp()
  .addField('Kicked User', `${kUser} With ID ${kUser.id}`)
  .addField('Kicked By', `<@${message.author.id}> With ID ${message.author.id}`)
  .addField('Kicked In', `${message.channel}`)
  .addField('Reason', `${kReason}`);

  let kickChannel = message.guild.channels.find(`name`,`senior-leadership`);
  message.guild.member(kUser).kick(kReason);
  return kickChannel.send(kickEmbed);
}

module.exports.config = {
 name: "kick",
 aliases: ["k"],
 description: "Kicks A Naughty User",
 accessableby: "Anyone With Administrator Privelidges"
}
