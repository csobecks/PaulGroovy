import { play } from "./play.js"
import { skip } from "./skiptrack.js"
import { pause } from "./pausetrack.js"
import { ethan } from "./ethan.js"
import { violet } from "./violet.js"
import { helping } from "./helper.js"
import { d20roll } from "./d20roll.js"
import { paulpager } from "./paulpager.js"
import { eggorleg } from "./eggorleg.js"
import { stop } from "./stoptrack.js"
import { resume } from "./resumetrack.js"
import { bitrate } from "./bitratetrack.js"
import { currentqueue } from "./currentqueue.js"

export async function interactionHandler(interaction,client) {
    if (!interaction.isCommand() || !interaction.guildId) return;

    if (!interaction.member.voice.channel) {
        if (interaction.commandName === "ethan"){
            ethan(interaction);
        }else if (interaction.commandName === "violet"){
            violet(interaction);
        }else if(interaction.commandName==="help"){
            helping(interaction);
        }else if(interaction.commandName==="d20roll"){
            d20roll(interaction);
        }else if(interaction.commandName==="eggorleg"){
            eggorleg(interaction);
        }else if(interaction.commandName==="paulpager"){
            paulpager(client);
        }else{
            return void interaction.reply({ content: "You are not in a voice channel!", ephemeral: true });
        }
    }else{
        if (interaction.commandName === "play") {
            await play(interaction);
        } else if (interaction.commandName === "skip") {
            await skip(interaction);
        } else if (interaction.commandName === "stop") {
            await stop(interaction);
        } else if (interaction.commandName==="pause") {
            await pause(interaction);
        } else if(interaction.commandName==="resume") {
            await resume(interaction);
        }else if (interaction.commandName==="queue"){
            await currentqueue(interaction);
        }else if (interaction.commandName === "ethan"){
            await ethan(interaction);
        }else if (interaction.commandName === "violet"){
            await violet(interaction);
        }else if(interaction.commandName==="help"){
            await helping(interaction);
        }else if(interaction.commandName==="bitrate"){
            await bitrate(interaction);
        }else if(interaction.commandName==="eggorleg"){
            await eggorleg(interaction);
        }else if(interaction.commandName==="paulpager"){
            await paulpager(interaction,client)
        }else if(interaction.commandName==="d20roll"){
            await d20roll(interaction);
        }else {
            interaction.reply({
                content: "Unknown command!",
                ephemeral: true
            });
        }
    }
}