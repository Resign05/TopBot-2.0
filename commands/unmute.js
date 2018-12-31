module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You Do Not Have Permissions To Mute!");
  if (!message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You Do Not Have Permissions To Mute!");

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!toMute) return message.channel.sendMessage("You Did Not Specify A User Or ID To Mute");

  let role = message.guild.roles.find(r => r.name === "BOT Muted");
  if (!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("This User Is Not Muted!");

  await toMute.removeRole(role);
  message.channel.sendMessage("The Person Has Been Unmuted!");
}

module.exports.config = {
  name: "unmute",
  aliases: [],
  noalias: "No Aliases",
  accessableby: "Someone Who Has The Permission 'Manage Messages'",
  description: "Unmutes Someone Who Is No-longer Naughty!"
}