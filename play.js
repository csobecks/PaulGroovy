import { useMainPlayer } from "discord-player"

export async function play(interaction) {
    const player = useMainPlayer();
    console.log({player});
    const channel = interaction.member.voice.channel;
    
    if(!channel) return interaction.reply('You are not connected to a voice channel!');
    
    const query = interaction.options.getString('query',true);

    await interaction.deferReply();
    console.log({channel,query,interaction});
    try{
        const{ track } = await player.play(channel,query,{
            nodeOptions:{
                leaveOnEmpty:true,
                leaveOnEnd:true,
                leaveOnEndCooldown:60000,
                metadata: interaction
                // metadata:{channel: interaction.channel,
                //     client: interaction.user.guild,
                //     requestedBy: interaction.user}
            }
        });

        return interaction.followUp(`**${track.title}** enqueued!`);
    } catch(e){
        return interaction.followUp(`Something went wrong: ${e}`);
    }
}