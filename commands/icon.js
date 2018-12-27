module.exports.run = async (bot, message, args) => {

	let msg = await message.channel.send("Generating Icon...");

	if(!message.guild.iconURL) return msg.send("No Icon!");

	message.channel.send({files: [
		{
			attachment: message.guild.iconURL,
			name: "icon.png"
		}
	]});
	msg.delete();
	msg = await message.channel.send("Generation Complete...")
}

module.exports.config = {
	name: "icon",
	aliases: [],
	noalias: "No Aliases!",
	description: "Sends The Icon Of The Server As A PNG",
	accessableby: "Everyone"
}
