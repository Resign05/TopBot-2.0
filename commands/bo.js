module.exports.run = async (bot, message, args) => {

  const serverQueue = require("./play.js").queueExports.exportQueue.get(message.guild.id);

  if (!serverQueue) return message.channel.send("Play A Song For Me Will You?");
  serverQueue.songs.push({
    id: 'W0quDfpfRUQ',
    title: 'Welcome To Youtube',
    url: 'https://www.youtube.com/watch?v=W0quDfpfRUQ'
  });
  serverQueue.songs.push({
    id: 'ByC8sRdL-Ro',
    title: 'Kill Yourself',
    url: 'https://www.youtube.com/watch?v=ByC8sRdL-Ro'
  });
  serverQueue.songs.push({
    id: 'jk6gjqMrOy8',
    title: 'Straight White Male',
    url: 'https://www.youtube.com/watch?v=jk6gjqMrOy8'
  });
  serverQueue.songs.push({
    id: 'n450GmN2Yfk',
    title: 'Lower Your Expectations',
    url: 'https://www.youtube.com/watch?v=n450GmN2Yfk'
  });
  serverQueue.songs.push({
    id: 'MPTKR12cUqc',
    title: 'Today\'s Country Songs',
    url: 'https://www.youtube.com/watch?v=MPTKR12cUqc'
  });
  serverQueue.songs.push({
    id: 'HLSvY1fKQI4',
    title: 'A World On Fire And Sad',
    url: 'https://www.youtube.com/watch?v=HLSvY1fKQI4'
  });
  serverQueue.songs.push({
    id: 'RUBjHPYH8Rs',
    title: '#Deep',
    url: 'https://www.youtube.com/watch?v=RUBjHPYH8Rs',
  });
  serverQueue.songs.push({
    id: 'rYy0o-J0x20',
    title: 'Can\'t Handle This',
    url: 'https://www.youtube.com/watch?v=rYy0o-J0x20'
  });
  serverQueue.songs.push({
    id: 'Zxc20saM8DA',
    title: 'From God\'s Perspective',
    url: 'https://www.youtube.com/watch?v=Zxc20saM8DA'
  });
  serverQueue.songs.push({
    id: 'QCVGpvzcHko',
    title: 'Repeat Stuff',
    url: 'https://www.youtube.com/watch?v=QCVGpvzcHko'
  });
  serverQueue.songs.push({
    id: 'BGkRUYjflbY',
    title: 'Nerds',
    url: 'https://www.youtube.com/watch?v=BGkRUYjflbY'
  });
  serverQueue.songs.push({
    id: 'TCmu2oofRw',
    title: 'Beating Off In A Minor',
    url: 'https://www.youtube.com/watch?v=wTCmu2oofRw'
  });
  serverQueue.songs.push({
    id: 'VoscbQA3lM',
    title: 'Ironic',
    url: 'https://www.youtube.com/watch?v=5VoscbQA3lM'
  });
  serverQueue.songs.push({
    id: 'KWKwjJFtb54',
    title: 'Andy The Frog',
    url: 'https://www.youtube.com/watch?v=KWKwjJFtb54'
  });
  serverQueue.songs.push({
    id: 'Z-ap5Fp2T6c',
    title: 'Im Bo Yo',
    url: 'https://www.youtube.com/watch?v=Z-ap5Fp2T6c'
  });
  serverQueue.songs.push({
    id: '2NFmnNYIgmk',
    title: 'Out Of The Abyss',
    url: 'https://www.youtube.com/watch?v=2NFmnNYIgmk'
  });
  serverQueue.songs.push({
    id: 'P7hMlHlOrO4',
    title: 'My Whole Family Thinks I\'m Gay',
    url: 'https://www.youtube.com/watch?v=P7hMlHlOrO4'
  });
  serverQueue.songs.push({
    id: '0jBK4qDJ-OM',
    title: 'Left Brain, Right Brain',
    url: 'https://www.youtube.com/watch?v=0jBK4qDJ-OM'
  });
  serverQueue.songs.push({
    id: '2LzgYWCgkZk',
    title: 'Bo Fo Sho',
    url: 'https://www.youtube.com/watch?v=2LzgYWCgkZk'
  });

  message.channel.send("Get Bo'ed").then(msg => msg.delete(10000));

}

module.exports.config = {
  name: "bo",
  aliases: [],
  description: "Adds All Bo Burnham Songs To The Queue",
  accessableby: "Everyone"
}