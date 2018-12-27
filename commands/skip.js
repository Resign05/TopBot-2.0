module.exports.run = async (bot, message, args) => {

	const serverQueue = require("./play.js").queueExports.exportQueue.get(message.guild.id);

	if(!serverQueue) return message.channel.send("There Is Nothing To Skip!");
	serverQueue.connection.dispatcher.end();

}

module.exports.config = {
	name: "skip",
	aliases: ["s"],
	description: "Skips The Current Song.",
	accessableby: "Everyone"
}
