const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const token = "YOUR_TOKEN_HERE"

client.on('ready', () => {
  console.log(`Logged in! My name is ${client.user.tag}!`);

client.user.setStatus('Online')
client.user.setActivity('https://bit.ly/3jCcaNo', { type: 'WATCHING'}).catch(console.error);

});


client.on('message', async message => {
    if (message.content === '%rickroll') {
if (!message.member.voice.channel) {
    // idk why I added this part but okay.
    if (!message.author.bot) {
    message.reply('You need to join a voice channel before using this command!')
    }
}
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            // LET IT RIP, BABY!
const dispatcher = connection.play('audio.mp3');

dispatcher.on('start', () => {
    console.log('Someone\'s getting rickrolled!');
});
// sweet sweet pain has finished. we sniped em good, boi
dispatcher.on('finish', () => {
    console.log('Rickroll ended successfully');
    message.member.voice.channel.leave();
}); 
// because error.
dispatcher.on('error', console.error);
        }
    }

});

client.login(token);
