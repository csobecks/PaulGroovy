import {useQueue} from "discord-player"

export async function stop(interaction){
    const queue = useQueue(interaction.guild.id);
    queue.delete();
    return void interaction.reply({ content: "Stopped the player!" });
}