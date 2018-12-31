const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const botSettings = require("../botconfig.json");

const youtube = new YouTube(botSettings.YOUTUBEAPIKEY);

const queue = new Map();

function getQueue() {
  return queue;
}

module.exports.run = async (bot, message, args) => {
  const serverQueue = queue.get(message.guild.id);
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) return message.channel.send("You Must Be In A Voice Channel To Play Audio!");

  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has('CONNECT')) return message.channel.send("I Do Not Have The Correct Permissions To Play Music For You (I Cannot Connect)");
  if (!permissions.has('SPEAK')) return message.channel.send("I Do Not Have The Correct Permissions To Speak In This Channel(I Cannot Speak)");


  try {

    var videos = await youtube.searchVideos(args, 1);
    var video = await youtube.getVideoByID(videos[0].id);

  } catch (error) {

    try {

      var video = await youtube.getVideo(args);

    } catch (err) {

      return message.channel.send("I Could Not Find Your Video");

    }

  }

  const song = {

    id: video.id,
    title: video.title,
    url: 'https://www.youtube.com/watch?v=' + video.id

  };

  if (!serverQueue) {
    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;

      play(message.guild, queueConstruct.songs[0]);

    } catch (e) {
      console.error('Could Not Join Voice Channel For This Reason: ' + e);
      queue.delete(message.guild.id);
      return message.channel.send("I Failed To Join This Channel!");
    }
  } else {

    serverQueue.songs.push(song);
    return message.channel.send(song.title + " Has Been Added To The Queue");

  }

  return;

  function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
      serverQueue.voiceChannel.leave();
      queue.delete(guild.id);
      return;
    }

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
      .on('end', () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on('error', e => console.error(e));

    dispatcher.setVolumeLogarithmic(5 / 5);

    serverQueue.textChannel.send('Now Playing: **' + song.title + '**')
  }
}

module.exports.config = {
  name: "play",
  aliases: ["p"],
  description: "Plays A Song.",
  accessableby: "Everyone"
}
module.exports.queueExports = {
  exportQueue: queue,
}