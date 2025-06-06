import { interactionHandler } from "./interaction.js";
import { deployment } from "./deploy.js";
import { YoutubeiExtractor } from "discord-player-youtubei";

import  Discord from "discord.js";
import  Player from "discord-player";
import  object from "./config.json" with { type: 'json' };


const client = new Discord.Client({
    intents: [
        'Guilds',
        'GuildVoiceStates',
        'GuildMessages',
        'DirectMessages',
        'MessageContent'
    ]
});

client.login(object.token);

client.on("ready", function (readyClient) {
    console.log("Bot is online!");
    client.user.setActivity({
        name:"Ram Ranch",
        type:2
    });
});

const player = new Player.Player(client, {});

//await player.extractors.register(YoutubeiExtractor,{overrideBridgeMode: "yt", generateWithPoToken: true, streamOption: {useClient: "WEB"}});
await player.extractors.register(YoutubeiExtractor,{generateWithPoToken: true, streamOption: {useClient: "WEB"}});

client.on("error",console.error);
client.on("warn",console.warn);


client.on("messageCreate", deployment);

client.on("interactionCreate", interactionHandler);





player.events.on('playerStart', (queue, track) => {
    // Emitted when the player starts to play a song
    queue.metadata.channel.send(`Started playing: **${track.title}**`);
    console.log({queue, track});
});

player.events.on('audioTrackAdd', (queue, track) => {
    // Emitted when the player adds a single song to its queue
    queue.metadata.channel.send(`Track **${track.title}** queued`);
});

player.events.on('audioTracksAdd', (queue) => {
    // Emitted when the player adds multiple songs to its queue
    queue.metadata.channel.send(`Multiple Track's queued`);
});

player.events.on('playerSkip', (queue, track) => {
    // Emitted when the audio player fails to load the stream for a song
    queue.metadata.channel.send(`Skipping **${track.title}**`);
});

player.events.on('disconnect', (queue) => {
    // Emitted when the bot leaves the voice channel
    queue.metadata.channel.send('leaving now');
});

player.events.on('emptyChannel', (queue) => {
    // Emitted when the voice channel has been empty for the set threshold
    // Bot will automatically leave the voice channel with this event
    queue.metadata.channel.send(`Leaving because no vc activity for the past 5 minutes`);
});

player.events.on('emptyQueue', (queue) => {
    // Emitted when the player queue has finished
    queue.metadata.channel.send('Queue finished!');
});
player.events.on('error', (error) => {
    // Emitted when the player queue encounters error
    console.log(`General player error event: ${error.message}`);
    console.log(error);
});

player.events.on('playerError', (error) => {
    // Emitted when the audio player errors while streaming audio track
    console.log(`Player error event: ${error.message}`);
    console.log(error);
});

player.on('debug', async(message) =>{
    console.log(`General player debug event: ${message}`);
});
player.events.on('debug', async(message) => {
    console.log(`Player debug event: ${message}`);
});
