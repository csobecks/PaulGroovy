const { useMainPlayer } = require("discord-player");

export async function play(interaction) {
    const player = useMainPlayer();
    const channel = interaction.member.voice.channel;
    
    if(!channel) return interaction.reply('You are not connected to a voice channel!');
    
    const query = interaction.options.getString('query',true);

    await interaction.deferReply();

    try{
        const{ track } = await player.play(channel,query,{
            nodeOptions:{
                leaveOnEmpty:true,
                leaveOnEnd:true,
                leaveOnEndCooldown:60000,
                metadata:{channel: interaction.channel,
                    client: interaction.user.guild,
                    requestedBy: interaction.user}
            }
        });

        return interaction.followUp(`**${track.title}** enqueued!`);
    } catch(e){
        return interaction.followUp(`Something went wrong: ${e}`);
    }
}