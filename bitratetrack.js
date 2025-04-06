import { useQueue } from "discord-player"

export async function bitrate(interaction) {
    await interaction.deferReply({ ephemeral: false });
    const queue = useQueue(interaction.guildId);
    const value=interaction.options.getInteger('bitrate');
    queue.node.setBitrate(value);
    return void interaction.editReply ({content: `bitrate set to ${value} bits `});
}