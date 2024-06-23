import useQueue from "discord-player"

export async function skip(interaction){
    const queue = useQueue(interaction.guild.id);
    queue.node.skip();
    return void interaction.followUp({content:"skipping"});
}