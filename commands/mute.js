module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Do Not Have Permissions To Mute!");
	if(!message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES")) return message.channel.send("You Do Not Have Permissions To Mute!");

	let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

	if(!toMute) return message.channel.send("You Did Not Specify A User Or ID To Mute");

	let role = message.guild.roles.find(r => r.name === "BOT Muted");

	if(!role){
		try{
			role = await message.guild.createRole({
				name: "BOT Muted",
				color: "#000000",
				permissions: []
			});

			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(role, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false
				});
			});
		}catch(e){
			console.log(e.stack);
		}
	}
	if(toMute.roles.has(role.id)) return message.channel.send("This User Has Already Been Muted!");

	await toMute.addRole(role);
	message.channel.send("The Person Has Been Muted!");
}

module.exports.config = {
	name: "mute",
	aliases: [],
	description: "Mutes Someone Who's Being Naughty",
	accessableby: "Someone Who Has The Permission 'Manage Messages'",
	noalias: "No Aliases!"
}
