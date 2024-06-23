import { interactionHandler } from "./interaction.js"
import { deployment } from "./deploy.js"
import { useQueue } from "discord-player"

import  Discord from "discord.js"
import  Player from "discord-player"
import object from "./config.json" assert { type: 'json' };

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

const player = new Player.Player(client);



client.on("error",console.error);
client.on("warn",console.warn);

player.extractors.loadDefault();
// player.extractors.loadDefault((ext)=>ext=='YouTubeExtractor');

client.on("messageCreate", deployment);

client.on("interactionCreate", interactionHandler);



player.events.on('playerStart', (interaction, track) => {
    // Emitted when the player starts to play a song
    const queue = useQueue(interaction.guild.id);
    queue.metadata.send(`Started playing: **${track.title}**`);
});

player.events.on('audioTrackAdd', (interaction, track) => {
    // Emitted when the player adds a single song to its queue
    const queue = useQueue(interaction.guild.id);
    queue.metadata.send(`Track **${track.title}** queued`);
});

player.events.on('audioTracksAdd', (interaction) => {
    // Emitted when the player adds multiple songs to its queue
    const queue = useQueue(interaction.guild.id);
    queue.metadata.send(`Multiple Track's queued`);
});

player.events.on('playerSkip', (interaction, track) => {
    // Emitted when the audio player fails to load the stream for a song
    const queue = useQueue(interaction.guild.id);
    queue.metadata.send(`Skipping **${track.title}**`);
});

player.events.on('disconnect', (interaction) => {
    // Emitted when the bot leaves the voice channel
    const queue = useQueue(interaction.guild.id);
    queue.metadata.send('leaving now');
});

player.events.on('emptyChannel', (interaction) => {
    // Emitted when the voice channel has been empty for the set threshold
    // Bot will automatically leave the voice channel with this event
    const queue = useQueue(interaction.guild.id);
    queue.metadata.send(`Leaving because no vc activity for the past 5 minutes`);
});

player.events.on('emptyQueue', (interaction) => {
    // Emitted when the player queue has finished
    const queue = useQueue(interaction.guild.id);
    queue.metadata.send('Queue finished!');
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
