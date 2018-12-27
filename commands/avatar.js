module.exports.run = async (bot, message, args) => {

	let msg = await message.channel.send("Generating Avatar...");

	message.channel.send({files: [
		{
			attachment: message.author.displayAvatarURL,
			name: "avatar.png"
		}
	]});
	msg.delete();
	msg = await message.channel.send("Generation Complete...")
}

module.exports.config = {
	name: "avatar",
	aliases: [],
	noalias: "No Aliases!",
	description: "Sends Your Avatar As A PNG.",
	accessableby: "Everyone"
}
