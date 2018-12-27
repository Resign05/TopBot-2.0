const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")

bot.on('ready', async() => {
  console.log(`The bot \'TopBot\' is now online!`);

  let statuses = [
    `Top Bot | ${botconfig.PREFIX}help for more info!`,
    `I Am On ${bot.guilds.size} Server(s)!`,
  ]

  setInterval(() => {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status);
  }, 3000);
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) console.log(`[LOGS] Couldn't find any commands, try again cheif!`);

  jsfile.forEach((f, i) => {
    let pull = require(`./commands/${f}`)
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      bot.aliases.set(alias, pull.config.name)
    });
  });
});

bot.on('message', async message => {
  if(message.author.bot || message.channel.type === 'dm') return;

  let prefix = botconfig.PREFIX;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(command.slice(prefix.length)) || bot.commands.get(bot.aliases.get(command.slice(prefix.length)));

  if(!message.content.startsWith(prefix)) return;
  if(commandfile) commandfile.run(bot,message,args)
});

bot.login(botconfig.TOKEN);
