import interactionHandler from "./interaction.js"
import deployment from "./deploy.js"

import  Client from "discord.js"
import  Player from "discord-player"
import token from "./config.json"

const player = new Player(readyClient);

const client = new Client({
    intents: [
        'Guilds',
        'GuildVoiceStates',
        'GuildMessages',
        'DirectMessages',
        'MessageContent'
    ]
});

client.login(token);

client.on("ready", function (readyClient) {
    console.log("Bot is online!");
    client.user.setActivity({
        name:"Ram Ranch",
        type:2
    });
});



client.on("error",console.error);
client.on("warn",console.warn);

player.extractors.loadDefault((ext));

client.on("messageCreate", deployment);

client.on("interactionCreate", interactionHandler);



player.events.on('playerStart', (queue, track) => {
    // Emitted when the player starts to play a song
    queue.metadata.send(`Started playing: **${track.title}**`);
});

player.events.on('audioTrackAdd', (queue, track) => {
    // Emitted when the player adds a single song to its queue
    queue.metadata.send(`Track **${track.title}** queued`);
});

player.events.on('audioTracksAdd', (queue, track) => {
    // Emitted when the player adds multiple songs to its queue
    queue.metadata.send(`Multiple Track's queued`);
});

player.events.on('playerSkip', (queue, track) => {
    // Emitted when the audio player fails to load the stream for a song
    queue.metadata.send(`Skipping **${track.title}**`);
});

player.events.on('disconnect', (queue) => {
    // Emitted when the bot leaves the voice channel
    queue.metadata.send('leaving now');
});

player.events.on('emptyChannel', (queue) => {
    // Emitted when the voice channel has been empty for the set threshold
    // Bot will automatically leave the voice channel with this event
    queue.metadata.send(`Leaving because no vc activity for the past 5 minutes`);
});

player.events.on('emptyQueue', (queue) => {
    // Emitted when the player queue has finished
    queue.metadata.send('Queue finished!');
});
player.events.on('error', (queue, error) => {
    // Emitted when the player queue encounters error
    console.log(`General player error event: ${error.message}`);
    console.log(error);
});

player.events.on('playerError', (queue, error) => {
    // Emitted when the audio player errors while streaming audio track
    console.log(`Player error event: ${error.message}`);
    console.log(error);
});

player.on('debug', async(message) =>{
    console.log(`General player debug event: ${message}`);
});
player.events.on('debug', async(queue,message) => {
    console.log(`Player debug event: ${message}`);
});
