import {useQueue} from "discord-player"

export async function resume(interaction){
    const queue=useQueue(interaction.guild.id);
    queue.node.setPaused(queue.node.isPaused());
    return void interaction.reply({content:"resuming"})
}