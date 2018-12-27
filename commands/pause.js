 module.exports.run = async (bot, message, args) => {

	const serverQueue = require("./play.js").queueExports.exportQueue.get(message.guild.id);

	if(serverQueue && !serverQueue.playing) return message.channel.send("There Is Nothing Playing!");
	serverQueue.connection.dispatcher.pause();
	serverQueue.playing = false;

	return message.channel.send("**Music Succesfully Paused**");

}

module.exports.config = {
	name: "pause",
	aliases: [],
  noalias: "No Aliases!",
  description: "Pauses The Current Playing Song",
  accessableby: "Everyone"
}
