# RickBot
Alright so this one is kinda an iffy one that took no programming skills to write whatsoever. This is literally shitposting on Github.
Who would have known society could have evolved so fast?

Requirements: FFMPEG installed, fs, discord.js, and @discordjs/opus. No extra programming except for putting in you bot's token. Of course this is in Node.JS so tough luck, python users.

Once you got all of this crap set up, join a voice channel that your friend/enemy is in, and type in any chat "%rickroll". The whole song will play, and pain will be delivered. It's the whole song. No mercy. The only way to stop it is to wait or disconnect it if you have the perms lol.


I guess I'll walk you through this(assuming you know how to install Node.JS and it's already installed)

Go to https://discord.com/developers/applications and make an app
Give the app a name(this won't matter too much just do what you feel like.)
Copy the Client ID cause you're gonna need this.(put in a note or something).

Go to the Bot tab and make a new bot by clicking add bot. Name it what you feel like, but this is the name of the actual bot.
Copy the token(don't share this with anyone and put it in a note or something).
You can customise this bot all you want by changing profile pictures and being fancy, but that's kinda whatever.

Make a folder where you will copy all these project files to. Name it what you feel like, and open the directory in command prompt/powershell, whatever suits you.
Type in "npm init" and go through the options. Next, you will need to install the following things/run the following commands.

FFMPEG(search up a tutorial i guess)

FS: npm i fs

discord.js: npm i discord.js

@discord.js/opus: npm i @discordjs/opus


Next, download the master branch of this project. Keep in mind you're kinda downloading the full entirety of Rick Astley's <i>Never Gonna Give You Up</i>. If you're the kind of "Oh lord praise the Copyright Laws" person in the room, I would just use coding skills to play this from a YT video instead, but whatever.


Open the index.js file and where I put "YOUR_TOKEN_HERE", paste your token, but keep the "" right there. KEEP EM THERE, K. Save the file!

You're done with the code! Run the file with "node index.js".
All that's left is the invite. Remember that Client ID I told you to copy? You're gonna need that. Put that ID into this URL where it says to put an ID into.

https://discord.com/oauth2/authorize?client_id=CLIENT_ID_HERE!&permissions=537159744&scope=bot

Invite it to the discord, and you're done!

How to Rick Roll:

Join a voice chat you want to rick roll
Type in any text chat: "%rickroll"
The whole song will play.
