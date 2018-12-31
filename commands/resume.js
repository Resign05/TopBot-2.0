  module.exports.run = async (bot, message, args) => {

    const serverQueue = require("./play.js").queueExports.exportQueue.get(message.guild.id);

    if (!serverQueue || serverQueue.playing) return message.channel.send("There Is Nothing Paused!");
    serverQueue.connection.dispatcher.resume();
    serverQueue.playing = true;

    return message.channel.send("**Music Succesfully Resumed**");

  }

  module.exports.config = {
    name: "resume",
    aliases: ["r"],
    description: "Resumes The Paused Song",
    accessableby: "Everyone"
  }