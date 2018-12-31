const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {

      if (args[0]) {
        let command = args[0];
        if (bot.commands.has(command)) {
          message.delete();
          command = bot.commands.get(command);
          var embed = new Discord.RichEmbed()
            .setColor("#9B59B6")
            .setAuthor(`${command.config.name}'s info!`)
            .setFooter(`TopBot`, bot.user.displayAvatarURL)
            .setDescription(`The Bot Prefix Is **${botconfig.PREFIX}**\n\n**>Command:** ${command.config.name}\n**>Description:** ${command.config.description || "No Description!"}\n**>Usable By:** ${command.config.accessableby || "Everyone"}\n**>Aliases:** ${command.config.noalias || command.config.aliases}`)
            .setTimestamp();
          return message.author.send(embed);
        }
      } else {
        let cmds = [];
        bot.commands.tap((c, i) => {
          cmds.push(i);
        });
        message.delete();
        let embed = new Discord.RichEmbed()
          .setColor("#9B59B6")
          .setAuthor(`TopBot Help!`, bot.user.displayAvatarURL)
          .setTimestamp()
          .setDescription(`The Bot Prefix Is **${botconfig.PREFIX}**\nThere Are **${cmds.length}** Commands:`)
          .addField(`**>Commands:**`, `\`${cmds.join("\` \`")}\``)
    .setFooter(`TopBot`, bot.user.displayAvatarURL);
    return message.author.send(embed);
  }
}

module.exports.config = {
  name: "help",
  aliases: ["h"],
  description: "Shows All Commands And Their Info!",
  accessableby: "Everyone"
}