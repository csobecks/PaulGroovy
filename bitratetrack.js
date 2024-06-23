import useQueue from "discord-player"

export async function bitrate(interaction){
    const queue = useQueue(interaction.guildId);
    const value=interaction.options.getInteger('bitrate');
    queue.node.setBitrate(value);
    return void interaction.followUp ({content: `bitrate set to ${value} bits `});
}