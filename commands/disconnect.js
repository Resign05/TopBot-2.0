const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
  const serverQueue = require("./play.js").queueExports.exportQueue.get(message.guild.id);

  if (!message.member.voiceChannel) return message.channel.send("You Are Not In The Same Channel As The Bot");
  serverQueue.songs = [];
  message.member.voiceChannel.leave();
  return message.channel.send("Bot Succesfully Disconnected");
}

module.exports.config = {
  name: "disconnect",
  aliases: ["leave", "l", "d"],
  accessableby: "Everyone",
  description: "Leaves The Discord Music Channel"
}