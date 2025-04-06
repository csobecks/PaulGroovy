export async function paulpager(interaction){
    await interaction.deferReply({ ephemeral: false });
    for(var i=0; i<5;i++){
        await interaction.client.users.send('98474303804149760','beep');
    }
    return await interaction.editReply({content: "beeping paul"});
}