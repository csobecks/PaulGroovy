import {useQueue} from "discord-player"

export async function currentqueue(interaction){
    await interaction.deferReply({ ephemeral: false });
    const queue = useQueue(interaction.guild.id);
    const tracks = queue.tracks.toArray();
    const currentTrack = queue.currentTrack;

    return void interaction.editReply({content:`currently playing: ${currentTrack}\ncurrently queued: ${tracks}`});
}