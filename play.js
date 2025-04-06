import { useMainPlayer } from "discord-player"

export async function play(interaction) {
    const player = useMainPlayer();
    // console.log({player});
    const channel = interaction.member.voice.channel;
    await interaction.deferReply({ ephemeral: false });
    
    if(!channel) return interaction.editReply('You are not connected to a voice channel!');
    
    
    const query = interaction.options.getString('query',true);

    // await interaction.deferReply();
    // console.log({channel,query,interaction});
    try{
        await player.play(channel,query,{
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

        // return null;
    } catch(e){
        return void interaction.editReply({content:`something went wrong: ${e}`});
        //return void interaction.followUp(`Something went wrong: ${e}`);
    }
    return void interaction.editReply({content:"searching"});
}
