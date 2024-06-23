import useQueue from "discord-player"

export async function currentqueue(interaction){
    const queue = useQueue(interaction.guild.id);
    const tracks = queue.tracks.toArray();
    const currentTrack = queue.currentTrack;

    return void interaction.followUp({content:`currently playing: ${currentTrack}\ncurrently queued: ${tracks}`});
}