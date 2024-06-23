import {useQueue} from "discord-player"

export async function pause(interaction){
    const queue=useQueue(interaction.guild.id);
    queue.node.setPaused(!queue.node.isPaused());
    return void interaction.followUp({content:"pausing"})
}