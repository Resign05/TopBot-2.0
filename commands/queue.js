module.exports.run = async (bot, message, args) => {

	const serverQueue = require("./play.js").queueExports.exportQueue.get(message.guild.id);

	if(!serverQueue) return message.channel.send("There Is No Queue!");
	return message.channel.send("__**Song Queue:**__ \n**Now Playing:** " + serverQueue.songs.map(song => '**-** ' + song.title).join('\n '));

}

module.exports.config = {
	name: "queue",
	aliases: ["q"],
	description: "Shows The Queue",
	accessableby: "Everyone"
}
