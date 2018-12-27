 module.exports.run = async (bot, message, args) => {

	let msg = await message.channel.send("Generating Wales Meme...");
	let walesMeme = '';

	function getRandomInt() {
		min = Math.ceil(1);
		max = Math.floor(6);
		return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}

	if (getRandomInt() == 1)
	{
		walesMeme = 'https://memegenerator.net/img/instances/51082786/meanwhile-in-wales.jpg';
	}else if(getRandomInt() == 2)
	{
		walesMeme = 'https://img.memecdn.com/wales-the-origins-of-ugly-americans_o_1812237.webp';
	}else if(getRandomInt() == 3)
	{
		walesMeme = 'https://media.makeameme.org/created/women-in-wales.jpg';
	}else if(getRandomInt() == 4)
	{
		walesMeme = 'https://i.redd.it/5e1dm5wis8y01.png';
	}else
	{
		walesMeme = 'https://i.chzbgr.com/full/7602119168/h2AAE3536/';
	}
	message.channel.send({files: [
		{
			attachment: walesMeme,
			name: "wales.png"
		}
	]});
	msg.delete();
	msg = await message.channel.send("Generation Complete...");
}

module.exports.config = {
	name: "wales",
	aliases: ["w"],
  description: "Sends A Wales Meme",
  accessableby: "Everyone"
}
